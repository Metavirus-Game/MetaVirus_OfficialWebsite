import { useState, useEffect } from "react";
import { fetchTokens, fetchRefreshToken, fetchUserInfo } from "../auth/handler";
import JSEvent from "./JSEvent";
import { Events } from "./Events";
import { Buffer } from "buffer";

export default function useFetchUserData() {
  const [userData, setUserData] = useState(null);
  const [loadingUser, setloadingUser] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      //   setloadingUser(true);
      //   JSEvent.emit(Events.Auth.Auth_Login_Status, true);

      const accessToken = localStorage.getItem("nexgAccessToken");
      const refreshToken = localStorage.getItem("nexgRefreshToken");

      try {
        if (accessToken && refreshToken) {
          const decryptedAccessToken = Buffer.from(
            accessToken,
            "base64"
          ).toString("utf-8");
          const decryptedRefreshToken = Buffer.from(
            refreshToken,
            "base64"
          ).toString("utf-8");

          const userData = await fetchUserInfo(decryptedAccessToken);
          console.log("userData:", userData);
          setUserData(userData);
          if (userData.error) {
            if (userData.reason == "expired access token") {
              try {
                const { access_token, refresh_token } = await fetchRefreshToken(
                  refreshToken
                );
                const encryptedAccessToken =
                  Buffer.from(access_token).toString("base64");
                const encryptedRefreshToken =
                  Buffer.from(refresh_token).toString("base64");
                localStorage.setItem("nexgAccessToken", encryptedAccessToken);
                localStorage.setItem("nexgRefreshToken", encryptedRefreshToken);

                const userInfo = await fetchUserInfo(access_token);
                console.log("userInfo: ", userInfo);
                setUserData(userInfo);
                //   JSEvent.emit(Events.Auth.Auth_Update_User, userInfo);

                //   window.location.href = "/";
              } catch (error) {
                console.log(error);
                resetUser();
              }
            } else if (userData.reason == "expired refresh token") {
              resetUser();
            }
          }
        } else {
          resetUser();
        }
      } catch (error) {
        console.log(error);
        resetUser();
      } finally {
        setloadingUser(false);
        // JSEvent.emit(Events.Auth.Auth_Login_Status, false);
      }
    };
    fetchData();
  }, []);

  const signOut = async () => {
    resetUser();
    window.location.reload();
  };

  const resetUser = async () => {
    localStorage.removeItem("nexgAccessToken");
    localStorage.removeItem("nexgRefreshToken");

    setUserData(null);
    // JSEvent.emit(Events.Auth.Auth_Update_User, null);
  };

  return {
    userData,
    setUserData,
    signOut,
    loadingUser,
    setloadingUser,
  };
}
