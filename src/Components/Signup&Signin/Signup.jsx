import { Button, Form, Input, Card, Modal } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Signin from "./Signin";
import "./sign.scss";
function Signup({ isSignupOpen, setIsSignupOpen }) {
  const [resendState, setResendState] = useState(
    sessionStorage.getItem("resendState") === "true"
  );
  const [resendTime, setResendTime] = useState(
    sessionStorage.getItem("resendTime")
  );

  const [userEmail, setUserEmail] = useState(null);
  const [token, setToken] = useState(null);

  const [isSigninOpen, setisSigninOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      if (resendTime > 0) {
        setResendTime((pre) => pre - 1);
        sessionStorage.setItem("resendTime", resendTime);
      }
      if (resendTime === 0) {
        sessionStorage.setItem("resendState", false);
        setResendState(false);
        clearInterval(interval);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [resendTime]);

  const sendVeriCode = ({ email, password }) => {
    setUserEmail(email);
    // setUserPassword(password);
    setResendState(true);
    sessionStorage.setItem("resendState", true);
    setResendTime(60);
    axios
      .post("https://acc.metavirus.games/account/registerRequest", {
        username: email,
        password: password,
        channel: "OFFICIAL-WEB",
        serviceId: "",
      })
      .then(function (response) {
        console.log("register response:", response);
        const errorCode = response.data["code"];
        console.log(errorCode);
        if (errorCode === 0) {
          setToken(response.data["msg"]);
          // localStorage.setItem("token", response.data["msg"]);
        } else {
          alert(response.data["msg"]);
          // <Alert
          //   message="Error"
          //   description={response.data["msg"]}
          //   type="warning"
          //   showIcon
          //   closable
          // />;
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const sendVeriCodeFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const formLayout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const onSignup = ({ code }) => {
    // setUserCode(code);
    axios
      .post("https://acc.metavirus.games/account/verifyCode", {
        username: userEmail,
        token: token,
        code: code,
      })
      .then(function (response) {
        const errorCode = response.data["code"];
        if (errorCode === 0) {
          // redirect to login page?
          alert("register successful");
        } else {
          alert(response.data["msg"]);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onSignupFailed = (values) => {};
  return (
    // <div className="signForm">
    //   <HomeOutlined className="homeIcon" onClick={() => navigate("/")} />
    <>
      <Modal
        open={isSignupOpen}
        footer={null}
        onCancel={() => setIsSignupOpen(false)}
        title="Sign Up"
        // className="max-w-[50vw] w-[50rem]"
        centered
      >
        {/* <Card title="Sign Up" style={{ width: 700 }} className="signupCard"> */}
        <Form
          name="form1"
          // style={{
          //   maxWidth: 600,
          // }}
          initialValues={{
            remember: true,
          }}
          // labelAlign="left"
          onFinish={sendVeriCode}
          onFinishFailed={sendVeriCodeFailed}
          autoComplete="off"
        >
          <Form.Item
            {...formLayout}
            label="Email"
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },

              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            {...formLayout}
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
              {
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                message:
                  "Password must contain at least one uppercase, lowercase, and number",
              },
              {
                max: 18,
                message: "The length of password must less than 18 characters",
              },
              {
                min: 8,
                message: "The length of password must longer than 8 characters",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit" disabled={resendState}>
              Get Verification Code
            </Button>
            {resendState && <div>Retry after: {resendTime}</div>}
          </Form.Item>
        </Form>
        <Form
          name="form2"
          initialValues={{
            remember: true,
          }}
          onFinish={onSignup}
          onFinishFailed={onSignupFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Verification Code"
            name="code"
            {...formLayout}
            rules={[
              {
                required: true,
                message: "Please input your verification code",
              },
            ]}
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 10,
            }}
          >
            <Input />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 10,
              span: 14,
            }}
          >
            <Button type="primary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
        <div className="mx-auto w-[10rem]">
          <div className="mb-[.5rem]">Already have an account?</div>
          <Button
            className="ml-[2.5rem] w-[5rem]"
            type="primary"
            // onClick={() => navigate("/signin")}
            onClick={() => {
              setisSigninOpen(true);
              setIsSignupOpen(false);
            }}
          >
            Sign in
          </Button>
        </div>
        {/* </Card> */}
      </Modal>
      <Signin isSigninOpen={isSigninOpen} setIsSigninOpen={setisSigninOpen} />
    </>
  );
}
export default Signup;
