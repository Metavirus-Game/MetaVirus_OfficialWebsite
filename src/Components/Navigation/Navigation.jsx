import { useContext } from "react";
import "./navigation.scss";
import { AuthContext } from "../../App";
import Signup from "../Signup&Signin/Signup";
import UserInfo from "../UserInfo/UserInfo";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Navigation() {
  const { auth, setAuth, userInfo, setUserInfo } = useContext(AuthContext);
  console.log(auth, userInfo);
  // console.log(auth);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isUserInfoOpen, setIsUserInfoOpen] = useState(false);

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
                console.log(userData);
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

  return (
    <>
      <nav id="nav">
        {auth ? (
          <a
            onClick={() => setIsUserInfoOpen(true)}
            className="hover:cursor-pointer"
          >
            {/* {localStorage.getItem("username")} */}
            {userInfo && userInfo.username}
          </a>
        ) : (
          <a
            className="hover:cursor-pointer"
            onClick={() => setIsSignupOpen(true)}
          >
            Sign Up
          </a>
        )}
      </nav>
      <Signup isSignupOpen={isSignupOpen} setIsSignupOpen={setIsSignupOpen} />
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
