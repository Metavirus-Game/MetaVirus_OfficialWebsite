import { Button, Form, Input, Alert } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./sign.scss";
function Signup() {
  const [resendState, setResendState] = useState(
    sessionStorage.getItem("resendState") === "true"
  );
  const [resendTime, setResendTime] = useState(
    sessionStorage.getItem("resendTime")
  );

  const [userEmail, setUserEmail] = useState(null);
  // const [userPassword, setUserPassword] = useState(null);
  const [token, setToken] = useState(null);
  // const [userCode, setUserCode] = useState(null);

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
    setResendTime(3);
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
    <>
      <Form
        name="form1"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={sendVeriCode}
        onFinishFailed={sendVeriCodeFailed}
        autoComplete="off"
      >
        <Form.Item
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
          {resendState && <div>{resendTime}</div>}
        </Form.Item>
      </Form>
      <Form
        name="form2"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
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
          rules={[
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
      <div style={{ color: "black" }}>Already have an account?</div>
      <Button type="primary" onClick={() => navigate("/signin")}>
        Sign in
      </Button>
    </>
  );
}
export default Signup;
