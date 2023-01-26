import { useLocation } from "react-router-dom";
export default function UserInfo() {
  const location = useLocation();
  const { username, phone, referralCode } = location.state.userData;
  return (
    <div style={{ color: "black" }}>
      <span>Username: {username}</span>
      <span>phone: {phone}</span>
      <span>Referral Code: {referralCode}</span>
    </div>
  );
}
