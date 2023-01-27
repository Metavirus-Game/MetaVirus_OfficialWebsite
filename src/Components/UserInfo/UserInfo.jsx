import { useLocation, useNavigate } from "react-router-dom";
import { HomeFilled } from "@ant-design/icons";
import { Button } from "antd";
import "./userInfo.scss";
export default function UserInfo() {
  const location = useLocation();
  const navigate = useNavigate();
  const { username, phone, referralCode } = location.state.userData;
  function logout() {
    localStorage.removeItem("accountId");
    localStorage.removeItem("loginKey");
    navigate(process.env.REACT_APP_HOMEPAGE_URL + "/signin");
  }
  return (
    <div className="userInfo">
      <HomeFilled
        style={{ fontSize: "2.5rem", marginTop: "2rem" }}
        onClick={() => navigate(process.env.REACT_APP_HOMEPAGE_URL)}
      />
      <div style={{ marginTop: "2rem" }}>
        <div>Username: {username}</div>
        <div>phone: {phone}</div>
        <div>
          <strong>Referral Code: {referralCode}</strong>
        </div>
        <Button
          style={{ width: "100px", marginTop: "2rem" }}
          type="primary"
          onClick={logout}
        >
          Log Out
        </Button>
      </div>
    </div>
  );
}
