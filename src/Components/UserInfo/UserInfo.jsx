import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "antd";
import "./userInfo.scss";
export default function UserInfo() {
  const location = useLocation();
  const navigate = useNavigate();
  const { username, phone, referralCode } = location.state.userData;
  function logout() {
    localStorage.removeItem("accountId");
    localStorage.removeItem("loginKey");
    navigate("/signin");
  }
  return (
    <div className="userInfo">
      <div>Username: {username}</div>
      <div>phone: {phone}</div>
      <div>
        <strong>Referral Code: {referralCode}</strong>
      </div>
      <Button style={{ width: "100px" }} type="primary" onClick={logout}>
        Log Out
      </Button>
    </div>
  );
}
