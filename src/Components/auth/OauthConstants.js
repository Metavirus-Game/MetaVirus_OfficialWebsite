import { red } from "@mui/material/colors";
import { redirect } from "react-router";

export const URL = {
  REQUEST_AUTHORIZATION: "https://auth.nexgami.com/oauth2/authorize",
  REQUEST_ACCESSTOKEN: "https://auth.nexgami.com/oauth2/token",
  REFRESH_ACCESSTOKEN: "https://auth.nexgami.com/oauth2/token",
  REQUEST_USERINFO: "https://auth.nexgami.com/oauth2/getUserInfo",
  REDIRECT_URI:
    process.env.NODE_ENV == "production"
      ? "https://www.metavirus.games/oauth/callback"
      : "http://localhost:3000/oauth/callback",
};

export const CLIENT = {
  CLIENT_ID: "109935b0c00000",
  CLIENT_SECRET: "MDC1ZTGWMGUTZJLHNY0ZYTBMLTHIYTKTYWZKODG5MGYYMTM5",
};
