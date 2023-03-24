import { useLocation, useNavigate } from "react-router-dom";
import { Button, Modal, Form, Input, message } from "antd";
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
  const refCodeRef = useRef(null);

  function logout() {
    localStorage.clear();
    setIsUserInfoOpen(false);
    navigate("/");
    // setUserInfo(null);
    // setIsUserInfoOpen(false);
    setAuth(false);
  }

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
                console.log(response);
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
                  className="basis-[95%] h-[20%] rounded-xl hover:cursor-pointer relative bg-white flex justify-center items-center shadow-md"
                  onClick={() =>
                    window.open(item.link, "_blank", "noopener,noreferrer")
                  }
                >
                  <img
                    src={item.img}
                    alt="icon"
                    className="w-[6.5%] absolute left-[1rem] top-[1.2rem]"
                  />
                  <p className="w-[80%] ml-[2rem] font-medium">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
            <div className="basis-[100%] flex justify-center">
              <button
                className="px-[1.5rem] py-[0.5rem] h-[2rem] rounded-md font-bold border-none text-white bg-[#48A1C7] hover:cursor-pointer"
                onClick={() => setSocialNameOpen(true)}
              >
                Bind Your Social Media
              </button>
              <button
                className="px-[1.5rem] py-[0.5rem] h-[2rem] rounded-md font-bold ml-[2rem] hover:cursor-pointer"
                onClick={() => logout()}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        title={"Save your social networks' usernames"}
        open={socialNameOpen}
        footer={null}
        centered
        onCancel={() => setSocialNameOpen(false)}
      >
        <Form
          onFinish={onSave}
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 20,
          }}
          initialValues={{
            twitter: userInfo && userInfo.socialMediaAccounts[0],
            discord: userInfo && userInfo.socialMediaAccounts[1],
            telegram: userInfo && userInfo.socialMediaAccounts[2],
          }}
        >
          <Form.Item label="Twitter" name="twitter">
            <Input placeholder={"Please Input your Twitter username"} />
          </Form.Item>
          <Form.Item label="Discord" name="discord">
            <Input placeholder={"Please Input your Discord username"} />
          </Form.Item>
          <Form.Item label="Telegram" name="telegram">
            <Input placeholder={"Please Input your Telegram username"} />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 10,
              span: 14,
            }}
          >
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
