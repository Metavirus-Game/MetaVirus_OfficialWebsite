import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import "./sign.scss";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Signin = () => {
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const onFinish = ({ username, password }) => {
    console.log("Received values of form: ", username, password);
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
          console.log(response.data.retObject);
          const userData = response.data.retObject;
          localStorage.setItem("accoountId", userData.accountId);
          localStorage.setItem("loginKey", userData.msg);
          return userData;
        } else {
          alert(response.data.msg);
          throw Error(response.data.msg);
          // <Alert
          //   message="Error"
          //   description={response.data["msg"]}
          //   type="warning"
          //   showIcon
          //   closable
          // />;
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
              console.log("re");
              //   <Navigate to="/userInfo" />;
              //   return redirect("/userInfo");
              navigate("/userInfo", { state: { userData: userData } });
            } else {
              alert("Failed to retrieve user information");
              throw Error("Failed to retrieve user information");
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
    <Form
      name="normal_login"
      className="login-form"
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
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        {/* <a className="login-form-forgot" href="">
          Forgot password
        </a> */}
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="/signup">register now!</a>
      </Form.Item>
    </Form>
  );
};

export default Signin;
