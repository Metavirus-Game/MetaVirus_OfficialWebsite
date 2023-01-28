import { useLocation, useNavigate } from "react-router-dom";
import { HomeFilled } from "@ant-design/icons";
import { Button } from "antd";
import "./userInfo.scss";
import { AuthContext } from "../../App";
import { useContext } from "react";
export default function UserInfo() {
  const location = useLocation();
  const navigate = useNavigate();
  const { auth, setAuth } = useContext(AuthContext);
  const { username, phone, referralCode } = location.state.userData;
  function logout() {
    localStorage.removeItem("accountId");
    localStorage.removeItem("loginKey");
    navigate("/signin");
    setAuth(false);
  }
  return (
    <div className="userInfo">
      <HomeFilled
        style={{ fontSize: "2.5rem", marginTop: "2rem" }}
        onClick={() => navigate("/")}
      />
      {auth ? (
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
      ) : (
        <div>You have to sign in at first</div>
      )}
    </div>
  );
}
