import { useContext } from "react";
import "./navigation.scss";
import { AuthContext } from "../../App";
import Signup from "../Signup&Signin/Signup";
import UserInfo from "../UserInfo/UserInfo";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
export default function Navigation({ fullpageApi }) {
  const { auth, setAuth, userInfo, setUserInfo } = useContext(AuthContext);
  // console.log(auth, userInfo);
  // console.log(auth);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isUserInfoOpen, setIsUserInfoOpen] = useState(false);
  const location = useLocation();
  const [referralCode, setReferralCode] = useState();
  const [isSigninOpen, setIsSigninOpen] = useState(false);

  useEffect(() => {
    // fullpageApi.setAllowScrolling(false);
    fullpageApi &&
      (isSignupOpen || isUserInfoOpen || isSigninOpen) &&
      fullpageApi.setAllowScrolling(false);
    fullpageApi &&
      !isSignupOpen &&
      !isUserInfoOpen &&
      !isSigninOpen &&
      fullpageApi.setAllowScrolling(true);
  }, [fullpageApi, isSignupOpen, isUserInfoOpen, isSigninOpen]);

  useEffect(() => {
    if (
      localStorage.getItem("accountId") &&
      localStorage.getItem("loginKey") &&
      !auth
    ) {
      const accountId = localStorage.getItem("accountId");
      const loginKey = localStorage.getItem("loginKey");
      axios
        .get("https://acc.metavirus.games/account/loginCheck", {
          params: {
            accountId: accountId,
            loginKey: loginKey,
            serviceId: "",
          },
        })
        .then((response) => {
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
                // console.log(userData);
                setUserInfo(userData);
                setAuth(true);
              } else {
                alert("Failed to retrieve user information");
                throw Error("Failed to retrieve user information");
              }
            })
            .catch((error) => {
              console.log(error);
            });
        });
    }
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const referralCode = queryParams.get("referralCode");
    if (referralCode) {
      setReferralCode(referralCode);
      // setVisible(true);
      console.log(referralCode);
      setIsSignupOpen(true);
    }
  }, [location.search]);

  return (
    <>
      <nav id="nav">
        {auth ? (
          <button
            onClick={() => setIsUserInfoOpen(true)}
            className="signupButton"
          >
            {/* {localStorage.getItem("username")} */}
            {userInfo && userInfo.username}
          </button>
        ) : (
          <button
            className="signupButton"
            onClick={() => {
              setIsSignupOpen(true);
            }}
          >
            Sign Up
          </button>
        )}
      </nav>
      <Signup
        isSignupOpen={isSignupOpen}
        setIsSignupOpen={setIsSignupOpen}
        isSigninOpen={isSigninOpen}
        setIsSigninOpen={setIsSigninOpen}
        referralCode={referralCode}
        fullpageApi={fullpageApi}
      />
      <UserInfo
        // userInfo={userInfo}
        isUserInfoOpen={isUserInfoOpen}
        setIsUserInfoOpen={setIsUserInfoOpen}
      />
    </>
  );
}
{
  /* <a href={process.env.PUBLIC_URL + "/signup"}>Sign Up</a> */
  // <a href={process.env.PUBLIC_URL + "/signin"}>My Account</a>
}
