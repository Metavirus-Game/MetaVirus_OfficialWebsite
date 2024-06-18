import { CLIENT, URL } from "./OauthConstants";
import { Buffer } from "buffer";
// make a request for oath2 authorization
// e.g. https://auth.nexgami.com/oauth2/authorize?redirect_uri=http%3A%2F%2Flocalhost%3A9000%2Fcode-to-user-info.html&response_type=code&client_id={your_client_id}&scope=read_user_info

export const requestAuthorization = () => {
  const authorizationUrl = `${
    URL.REQUEST_AUTHORIZATION
  }?redirect_uri=${encodeURIComponent(
    URL.REDIRECT_URI
  )}&response_type=code&client_id=${CLIENT.CLIENT_ID}&scope=read_user_info`;

  window.open(authorizationUrl, "authWindow", "width=500,height=600");
};

export const fetchTokens = async (code) => {
  const basicAuth =
    "Basic " +
    Buffer.from(`${CLIENT.CLIENT_ID}:${CLIENT.CLIENT_SECRET}`).toString(
      "base64"
    );

  const url = `https://auth.nexgami.com/oauth2/token?code=${code}&grant_type=authorization_code&redirect_uri=${encodeURIComponent(
    URL.REDIRECT_URI
  )}&client_id=${CLIENT.CLIENT_ID}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `${basicAuth}`,
      },
    });

    const data = await response.json();
    if (data.access_token) {
      return data;
    } else {
      console.error("Token fetching failed:", data);
    }
  } catch (error) {
    console.error("Error fetching tokens", error);
  }
};

export const fetchUserInfo = async (accessToken) => {
  try {
    const response = await fetch(URL.REQUEST_USERINFO, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const userInfo = await response.json();
    console.log("userInfo: ", userInfo);
    if (userInfo.error) {
      throw new Error("Error fetching user information", userInfo.reason);
    } else {
      return userInfo;
    }
  } catch (error) {
    throw new Error("Error fetching user information", error);
  }
};

export const fetchRefreshToken = async (refreshToken) => {
  const basicAuth =
    "Basic " +
    Buffer.from(`${CLIENT.CLIENT_ID}:${CLIENT.CLIENT_SECRET}`).toString(
      "base64"
    );
  const url = `https://auth.nexgami.com/oauth2/token?refresh_token=${refreshToken}&grant_type=${refreshToken}&client_id=${CLIENT.CLIENT_ID}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `${basicAuth}`,
      },
    });
    const data = await response.json();
    if (data.access_token) {
      return data;
    } else {
      console.error("Token fetching failed:", data);
    }
  } catch (error) {
    console.error("Error fetching tokens", error);
  }
};
