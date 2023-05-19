import { Button, Form, Input, message, Modal } from "antd";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Signin from "./Signin";
import "./sign.scss";
function Signup({
  isSignupOpen,
  setIsSignupOpen,
  referralCode,
  fullpageApi,
  isSigninOpen,
  setIsSigninOpen,
}) {
  const [resendState, setResendState] = useState(
    sessionStorage.getItem("resendState") === "true"
  );
  const [resendTime, setResendTime] = useState(
    sessionStorage.getItem("resendTime")
  );

  const [userEmail, setUserEmail] = useState(null);
  const [token, setToken] = useState(null);
  // const [isSigninOpen, setisSigninOpen] = useState(false);
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);

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

  const sendVeriCode = ({ email, password, referralCode }) => {
    setUserEmail(email);
    // setUserPassword(password);
    sessionStorage.setItem("resendState", true);
    setLoading(true);
    axios
      .post("https://acc.metavirus.games/account/registerRequest", {
        username: email,
        password: password,
        channel: "OFFICIAL-WEB",
        serviceId: "",
        referralCode: referralCode,
      })
      .then(function (response) {
        console.log("register response:", response);
        const errorCode = response.data["code"];
        console.log(errorCode);
        if (errorCode === 0) {
          setToken(response.data["msg"]);
          setIsVerifiOpen(true);
          setIsSignupOpen(false);
          setLoading(false);
          setResendState(true);
          setResendTime(60);
          // localStorage.setItem("token", response.data["msg"]);
        } else {
          setLoading(false);
          messageApi.open({
            type: "error",
            content: response.data["msg"],
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const resendVerifiCode = () => {
    setLoading(true);
    axios
      .get("https://acc.metavirus.games/account/resendCode", {
        params: {
          username: userEmail,
          token: token,
        },
      })
      .then(function (response) {
        console.log(response);
        const errorCode = response.data["code"];
        if (errorCode === 0) {
          setLoading(false);
          setResendTime(60);
          setResendState(true);
        } else {
          setLoading(false);
          messageApi.open({
            type: "error",
            content: response.data["msg"],
          });
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
    setLoading(true);
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
          messageApi.open({
            type: "success",
            content: "You have successfully registered!",
          });
          form.resetFields();
          // setIsSignupOpen(false);
          setIsVerifiOpen(false);
          setIsSigninOpen(true);
          setLoading(false);
        } else {
          setLoading(false);
          messageApi.open({
            type: "error",
            content: response.data["msg"],
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onSignupFailed = (values) => {};

  const [isVerifiOpen, setIsVerifiOpen] = useState(false);

  const VerificationModal = () => (
    <Modal
      centered
      title="Verification Code"
      open={isVerifiOpen}
      onCancel={() => {
        setIsVerifiOpen(false);
        form.resetFields();
      }}
      footer={null}
    >
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
            span: 16,
          }}
        >
          <div className="flex">
            {/* <div className="w-[10rem] mr-[1rem]"> */}
            <Input className="w-[8rem] mr-[1rem]" />
            {/* </div> */}

            <Button
              type="primary"
              onClick={resendVerifiCode}
              disabled={resendState}
              // loading={loading}
            >
              {resendState ? `Retry after: ${resendTime}` : `Resend code`}
            </Button>
          </div>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            // loading={loading}
            className="w-[5rem] mx-auto block"
          >
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );

  return (
    <>
      {contextHolder}
      <Modal
        open={isSignupOpen}
        footer={null}
        onCancel={() => {
          setIsSignupOpen(false);
          form.resetFields();
        }}
        title="Sign Up"
        // className="max-w-[50vw] w-[50rem]"
        centered
      >
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
          form={form}
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
                // pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
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
          <Form.Item label="Referral Code" name="referralCode" {...formLayout}>
            <Input
              placeholder="Please input your referral code"
              defaultValue={referralCode}
            />
          </Form.Item>
          <Form.Item>
            {resendState && (
              <p className="text-center">Retry after: {resendTime}</p>
            )}
            <Button
              type="primary"
              htmlType="submit"
              disabled={resendState}
              loading={loading}
              className="mx-auto block"
            >
              Get verification code
            </Button>
          </Form.Item>
        </Form>
        <p className="mb-[.5rem] text-center">Already have an account?</p>
        <Button
          className="w-[5rem] mx-auto block"
          type="primary"
          // onClick={() => navigate("/signin")}
          onClick={() => {
            setIsSigninOpen(true);
            setIsSignupOpen(false);
          }}
        >
          Sign in
        </Button>
      </Modal>
      {VerificationModal()}
      <Signin
        isSigninOpen={isSigninOpen}
        setIsSigninOpen={setIsSigninOpen}
        setIsSignupOpen={setIsSignupOpen}
      />
    </>
  );
}
export default Signup;
