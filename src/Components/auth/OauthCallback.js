import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchTokens, fetchUserInfo } from "./handler";

const OauthCallback = () => {
  const [params] = useSearchParams();
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const code = params.get("code");
    const error = params.get("error");

    if (error) {
      console.error("OAuth error:", error);
      const bc = new BroadcastChannel("c_social_auth");
      bc.postMessage({ error: "Failed to get access token" });
      bc.close();
      window.close();
      return;
    }

    const sendToParentAndClose = (userInfo, access_token, refresh_token) => {
      const bc = new BroadcastChannel("c_social_auth");
      bc.postMessage({ userInfo, access_token, refresh_token });
      bc.close();
      window.close();
    };

    const loginHandler = async () => {
      if (code) {
        try {
          const { access_token, refresh_token } = await fetchTokens(code);
          localStorage.setItem("nexgAccessToken", access_token);
          localStorage.setItem("nexgRefreshToken", refresh_token);
          const userInfo = await fetchUserInfo(access_token);
          console.log("userInfo: ", userInfo);
          sendToParentAndClose(userInfo, access_token, refresh_token);
        } catch (error) {
          console.error("Error fetching tokens: ", error);
          const bc = new BroadcastChannel("c_social_auth");
          bc.postMessage({ error: "Failed to get access token" });
          bc.close();
          window.close();
        } finally {
          const bc = new BroadcastChannel("c_social_auth");
          bc.postMessage({ error: "Failed to get access token" });
          bc.close();
          window.close();
        }
      }
    };

    loginHandler();
  }, []);

  return <></>;
};

export default OauthCallback;
