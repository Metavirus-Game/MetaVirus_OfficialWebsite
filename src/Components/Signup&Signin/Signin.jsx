import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, message, Modal } from "antd";
import axios from "axios";
import "./sign.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { AuthContext } from "../../App";
import { useState } from "react";
import Signup from "./Signup";
import UserInfo from "../UserInfo/UserInfo";
const Signin = ({ isSigninOpen, setIsSigninOpen }) => {
  const navigate = useNavigate();
  const { auth, setAuth, userInfo, setUserInfo } = useContext(AuthContext);
  const [isUserInfoOpen, setIsUserInfoOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  // const [userData, setUserData] = useState(null);

  // useEffect(() => {
  //   if (auth === true) {
  //     navigate("/MetaVirusWeb_Formal/userInfo", {
  //       state: { userData: userData },
  //     });
  //   }
  // }, [auth, userData]);

  const onFinish = ({ username, password }) => {
    setLoading(true);
    axios
      .post("https://acc.metavirus.games/account/loginRequest", {
        username: username,
        password: password,
        channel: "OFFICIAL-WEB",
        serviceId: "",
      })
      .then(function (response) {
        console.log("register response:", response);
        const errorCode = response.data.code;
        if (errorCode === 0) {
          setLoading(false);
          console.log(response.data.retObject);
          const userData = response.data.retObject;
          localStorage.setItem("accountId", userData.accountId);
          localStorage.setItem("loginKey", userData.msg);
          return userData;
        } else {
          setLoading(false);
          messageApi.open({
            type: "error",
            content: response.data["msg"],
          });
        }
      })
      .then((userData) => {
        console.log(userData);
        axios
          .get("https://acc.metavirus.games/account/getProfile", {
            params: {
              id: userData.accountId,
              token: userData.msg,
              channel: "OFFICIAL-WEB",
              serviceId: "",
            },
            headers: {
              accountId: userData.accountId,
              loginKey: userData.msg,
              serviceId: "",
            },
          })
          .then((response) => {
            console.log(response);
            const errorCode = response.data.code;
            if (errorCode === 0) {
              const userData = response.data.retObject;
              // setUserData(userData);
              setIsSigninOpen(false);
              setAuth(true);
              setUserInfo(userData);
              // navigate("/userInfo", {
              //   state: { userData: userData },
              // });
              localStorage.setItem("username", userData.username);
              // sessionStorage.setItem("referralCode", userData.referralCode);
              // navigate("/userInfo");
              setIsUserInfoOpen(true);
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
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      {contextHolder}
      <Modal
        open={isSigninOpen}
        footer={null}
        onCancel={() => setIsSigninOpen(false)}
        title="Sign In"
        centered
        width={400}
        // className="w-[1000rem]"
      >
        <Form
          className="mt-[2rem]"
          name="normal_login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          {/* <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item> */}
          <Form.Item className="mt-[2rem]">
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="w-[5rem] mx-auto block"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <UserInfo
        userInfo={userInfo}
        setIsUserInfoOpen={setIsUserInfoOpen}
        isUserInfoOpen={isUserInfoOpen}
      />
    </>
  );
};

export default Signin;
