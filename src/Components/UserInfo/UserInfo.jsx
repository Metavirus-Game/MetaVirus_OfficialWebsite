import { useLocation, useNavigate } from "react-router-dom";
import { Button, Modal, Form, Input, message, Checkbox } from "antd";
import "./userInfo.scss";
import { AuthContext } from "../../App";
import { useContext, useEffect, useState, useRef } from "react";
import copy from "copy-to-clipboard";
import axios from "axios";
export default function UserInfo({
  isUserInfoOpen,
  setIsUserInfoOpen,
  fullpageApi,
}) {
  const navigate = useNavigate();
  // const location = useLocation();
  const { setAuth, userInfo, setUserInfo } = useContext(AuthContext);
  const [messageApi, contextHolder] = message.useMessage();
  const [socialNameOpen, setSocialNameOpen] = useState(false);
  const [hasBound, setHasBound] = useState(false);
  const [captcha, setCaptcha] = useState("");
  const [captchaImg, setCaptchaImg] = useState("");
  const [verifyKey, setVerifyKey] = useState("");
  const refCodeRef = useRef(null);
  const [form] = Form.useForm();

  function logout() {
    localStorage.clear();
    setIsUserInfoOpen(false);
    navigate("/");
    // setUserInfo(null);
    // setIsUserInfoOpen(false);
    setAuth(false);
  }

  // console.log(hasBound);

  useEffect(() => {
    if (userInfo && userInfo.socialMediaAccounts[0] !== "") {
      setHasBound(true);
    } else {
      setHasBound(false);
    }
  }, [userInfo]);

  // console.log(userInfo);

  const onSave = ({ twitter, discord, telegram }) => {
    if (!twitter && !discord && !telegram) {
      messageApi.open({
        type: "error",
        content: "You didn't input any social media accounts!",
      });
    } else {
      setSocialNameOpen(false);
      const accountId = localStorage.getItem("accountId");
      const loginKey = localStorage.getItem("loginKey");
      axios
        .get("https://acc.metavirus.games/account/bindSocialMediaAccount", {
          params: {
            twitterAccount: twitter,
            discordAccount: discord,
            telegramAccount: telegram,
            verifyKey: verifyKey,
            verifyCode: captcha,
          },
          headers: {
            accountId: accountId,
            loginKey: loginKey,
            serviceId: "",
          },
        })
        .then((res) => {
          if (res.data.code === 0) {
            messageApi.open({
              type: "success",
              content: "Your social media account is successfully saved!",
            });
            axios
              .get("https://acc.metavirus.games/account/getProfile", {
                params: {
                  id: accountId,
                  token: loginKey,
                  channel: "OFFICIAL-WEB",
                  serviceId: "",
                },
                headers: {
                  accountId: accountId,
                  loginKey: loginKey,
                  serviceId: "",
                },
              })
              .then((response) => {
                // console.log(response);
                const errorCode = response.data.code;
                if (errorCode === 0) {
                  const userData = response.data.retObject;
                  setUserInfo(userData);
                } else {
                  messageApi.open({
                    type: "error",
                    content: "Failed to retrieve user information",
                  });
                }
              })
              .catch((error) => {
                console.log(error);
              });
          } else {
            messageApi.open({
              type: "error",
              content: res.data.msg,
            });
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
    // localStorage.setItem("twitter", twitter);
    // localStorage.setItem("discord", discord);
    // localStorage.setItem("telegram", telegram);
  };

  const shareToIcons = [
    process.env.PUBLIC_URL + "/img/twitter.png",
    process.env.PUBLIC_URL + "/img/discord.png",
    process.env.PUBLIC_URL + "/img/telegram.png",
    process.env.PUBLIC_URL + "/img/copy.png",
  ];

  const openSocialNameModal = () => {
    setSocialNameOpen(true);
    getCaptcha();
  };

  const getCaptcha = () => {
    axios
      .post("https://acc.metavirus.games/captcha/request", {
        params: {
          key: verifyKey,
        },
      })
      .then((res) => {
        if (res.data.code === 0) {
          const data = res.data.retObject;
          setCaptcha(data.text);
          setCaptchaImg(data.captchaImg);
          setVerifyKey(data.uuid);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const shareToSocialNet = (index) => {
    const socialNetwork = ["twitter", "discord", "telegram"];
    // const referralCode = userInfo && userInfo.referralCode;
    const referralCode = userInfo.referralCode;
    const pageUrl = window.location.origin; // Replace with the URL of your web page
    const shareText = `Join this amazing game with my referral code: ${referralCode}!`;
    const shareUrl = localStorage.getItem(socialNetwork[index])
      ? [
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            shareText
          )}%0A&url=${encodeURIComponent(
            pageUrl
          )}?referralCode=${referralCode}%0A&via=${localStorage.getItem(
            socialNetwork[index]
          )}`,
          `https://discord.com/invite/YsYfT2MU4M`,
          `https://t.me/share/url?url=${encodeURIComponent(
            pageUrl + `?referralCode=${referralCode}`
          )}&text=${encodeURIComponent(shareText)}`,
        ]
      : [
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            shareText
          )}%0A&url=${encodeURIComponent(
            pageUrl
          )}?referralCode=${referralCode}`,
          `https://discord.com/invite/YsYfT2MU4M`,
          `https://t.me/share/url?url=${encodeURIComponent(
            pageUrl + `?referralCode=${referralCode}`
          )}&text=${encodeURIComponent(shareText)}`,
        ];

    if (index === 1) {
      copy(`${pageUrl}?referralCode=${referralCode}`);
      messageApi.open({
        type: "success",
        content: "You have copied the referral link to clipboard!",
      });
      setTimeout(() => {
        window.open(shareUrl[index], "_blank", "noopener,noreferrer");
      }, 1500);
      return;
    } else if (index === 3) {
      copy(referralCode);
      messageApi.open({
        type: "success",
        content: "You have copied the referral link to clipboard!",
      });
      return;
    }

    window.open(shareUrl[index], "_blank", "noopener,noreferrer");
  };

  const redirectToIcons = [
    {
      img: process.env.PUBLIC_URL + "/img/telegram.png",
      content: "Telegram Announcement",
      link: "https://t.me/MetaVirus_Announcements",
    },
    {
      img: process.env.PUBLIC_URL + "/img/discord.png",
      content: "Join the MetaVirus Discord Server!",
      link: "https://discord.com/invite/YsYfT2MU4M",
    },
    {
      img: process.env.PUBLIC_URL + "/img/twitter.png",
      content: "Follow us Twitter!",
      link: "https://twitter.com/metavirus_games?s=21&t=oyqN0Vci0SpsXLEl3HTyOg",
    },
    {
      img: process.env.PUBLIC_URL + "/img/telegram.png",
      content: "Telegram: Contact@MetaVirus_Games",
      link: "https://t.me/MetaVirus_Games",
    },
  ];

  return (
    <>
      {contextHolder}
      <Modal
        open={isUserInfoOpen}
        footer={null}
        onCancel={() => setIsUserInfoOpen(false)}
        // title="Sign Up"
        // className="max-w-[50vw] w-[50rem]"
        centered
        width={1000}
        bodyStyle={{
          height: "80vh",
          maxHeight: "650px",
        }}
        wrapClassName="no-padding-modal"
      >
        <div className="flex w-[100%] h-[100%] max-[600px]:flex-wrap">
          <div className="h-[100%] flex-[1] flex justify-center items-center flex-wrap bg-[url('Components/UserInfo/userInfo_bg.jpg')] bg-cover max-[600px]:h-[30%]">
            <div className="p-[2rem] bg-[#D0D8B0] w-[70%] h-[20%] rounded-xl flex justify-center items-center relative max-[600px]:h-[60%]">
              <span
                ref={refCodeRef}
                className="absolute top-[5%] text-[#939393] text-[1.2rem] font-bold"
              >
                REFERRAL CODE
              </span>
              <span className="text-black text-[2rem] font-bold">
                {userInfo && userInfo.referralCode}
              </span>
            </div>
          </div>
          <div className="h-[100%] flex-[2] bg-[#ecf0f1] flex flex-wrap justify-center max-[600px]:h-[70%]">
            <div className="basis-[100%] flex justify-center items-center flex-wrap text-black text-[1rem] font-bold text-[#757575]">
              <span className="text-[#757575] basis-[100%] text-center relative top-[1.5rem]">
                Share to
              </span>
              {shareToIcons.map((item, index) => (
                <div
                  key={index}
                  className="w-[45px] h-[45px] bg-white flex justify-center items-center rounded-xl m-[1rem] hover:cursor-pointer shadow-md"
                  onClick={() => shareToSocialNet(index)}
                >
                  <img src={item} alt="icon" className="w-[50%]" />
                </div>
              ))}
            </div>
            <div className="w-[70%] h-[50%] bg-[#F4F4F4] flex justify-center items-center flex-wrap bg-[#F4F4F4] rounded-xl max-[600px]:w-[80%]">
              {redirectToIcons.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center basis-[95%] h-[20%] rounded-xl hover:cursor-pointer relative bg-white flex justify-center items-center shadow-md"
                  onClick={() =>
                    window.open(item.link, "_blank", "noopener,noreferrer")
                  }
                >
                  <img src={item.img} alt="icon" className="w-[6.5%]" />
                  <p className="w-[80%] ml-[2vw] font-medium  max-[600px]:text-[0.8rem]">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
            <div className="basis-[100%] flex justify-center">
              <button
                className="px-[1.5rem] py-[0.5rem] h-[2rem] rounded-md font-bold border-none text-white bg-[#48A1C7] hover:cursor-pointer shadow-md"
                onClick={() => openSocialNameModal()}
              >
                {/* {userInfo && userInfo.socialMediaAccounts[0] !== ""
                  ? "Your Social Media"
                  : "Bind Your Social Media"} */}

                {hasBound ? "Your Social Media" : "Bind Your Social Media"}
              </button>
              <button
                className="px-[1.5rem] py-[0.5rem] h-[2rem] rounded-md font-bold ml-[2rem] hover:cursor-pointer shadow-md"
                onClick={() => logout()}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        title={
          !hasBound
            ? "Save your social networks' usernames"
            : "Your Social Media Accounts"
        }
        open={socialNameOpen}
        footer={null}
        centered
        onCancel={() => {
          setSocialNameOpen(false);
          form.resetFields();
        }}
        width={400}
      >
        {!hasBound ? (
          <Form
            onFinish={onSave}
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 16,
              // offset: 2,
            }}
            form={form}
            initialValues={{
              twitter: userInfo && userInfo.socialMediaAccounts[0],
              discord: userInfo && userInfo.socialMediaAccounts[1],
              telegram: userInfo && userInfo.socialMediaAccounts[2],
            }}
            // disabled={hasBound}
          >
            <Form.Item
              label="Twitter"
              name="twitter"
              rules={[
                {
                  required: true,
                  message: "Please input your Twitter's username!",
                },
              ]}
            >
              <Input placeholder={"Please Input your Twitter username"} />
            </Form.Item>
            <Form.Item
              label="Discord"
              name="discord"
              rules={[
                {
                  required: true,
                  message: "Please input your Discord's username!",
                },
              ]}
            >
              <Input placeholder={"Please Input your Discord username"} />
            </Form.Item>
            <Form.Item
              label="Telegram"
              name="telegram"
              rules={[
                {
                  required: true,
                  message: "Please input your Telegram's username!",
                },
              ]}
            >
              <Input placeholder={"Please Input your Telegram username"} />
            </Form.Item>
            <Form.Item
              label="Captcha"
              name="Captcha"
              rules={[
                {
                  required: true,
                  // message: "Please input Captcha!",
                  validator: (_, value) => {
                    if (value === captcha) {
                      return Promise.resolve();
                    } else {
                      return Promise.reject(
                        new Error("Please input correct captcha!")
                      );
                    }
                  },
                },
              ]}
            >
              <div>
                <img
                  src={"data:image/jpg;base64," + captchaImg}
                  alt="captach"
                  onClick={() => getCaptcha()}
                />
                <Input />
              </div>
            </Form.Item>
            <Form.Item
              name="agreement1"
              valuePropName="checked"
              wrapperCol={{
                span: 24,
                // offset: 4,
              }}
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(new Error("Please accept agreement")),
                },
              ]}
            >
              <Checkbox>
                I confirm that this is my own acount, I don’t have multiple
                accounts or submissions.
              </Checkbox>
            </Form.Item>
            <Form.Item
              name="agreement2"
              valuePropName="checked"
              wrapperCol={{
                span: 24,
                // offset: 4,
              }}
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(new Error("Please accept agreement")),
                },
              ]}
            >
              <Checkbox>
                I agree with the T&Cs applied to this campaign
              </Checkbox>
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 9,
                span: 15,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        ) : (
          <div className="w-[100%] h-[250px] flex justify-center items-center">
            {/* <div>
              <img
                src={process.env.PUBLIC_URL + "/img/twitter.png"}
                alt="twitter"
                className="w-[6.5%]"
              />
              <span></span>
            </div>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/img/discord.png"}
                alt="discord"
                className="w-[6.5%]"
              />
              <span></span>
            </div>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/img/telegram.png"}
                alt="telegram"
                className="w-[6.5%]"
              />
              <span></span>
            </div> */}
            <div className="w-[90%] h-[90%] bg-[#F4F4F4] flex justify-center items-center flex-wrap bg-[#F4F4F4] rounded-xl max-[600px]:w-[80%]">
              {redirectToIcons.slice(0, 3).map((item, index) => (
                <div
                  key={index}
                  className="flex items-center basis-[95%] h-[25%] rounded-xl hover:cursor-pointer relative bg-white flex justify-left items-center shadow-md"
                  onClick={() =>
                    window.open(item.link, "_blank", "noopener,noreferrer")
                  }
                >
                  <img src={item.img} alt="icon" className="w-[8%] ml-[2vw]" />
                  <p className="ml-[2vw] font-medium">
                    Username: {userInfo.socialMediaAccounts[index]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
