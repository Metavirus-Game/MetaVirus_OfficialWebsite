import useFetchUserData from "../modules/useFetchUserData";
import { requestAuthorization } from "../auth/handler";
import { useEffect, useState } from "react";
import { Buffer } from "buffer";
import { Button, Popover } from "@mui/material";
import { shortenString } from "../utils/utils";
import CircularProgress from "@mui/material/CircularProgress";

export default function NavigationV2() {
  const { userData, setUserData, signOut, loadingUser, setloadingUser } =
    useFetchUserData();

  const [anchorEl, setAnchorEl] = useState(null);

  //   console.log(userData);

  const signinHandler = () => {
    requestAuthorization();
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  useEffect(() => {
    const bc = new BroadcastChannel("c_social_auth");
    bc.onmessage = (event) => {
      const { access_token, refresh_token, userInfo, error } = event.data;
      console.log("access_token:", access_token, event);
      if (error) {
        console.error("OAuth error:", error);
      } else {
        // localStorage.setItem("auth_token", combinedToken);
        const encryptedAccessToken =
          Buffer.from(access_token).toString("base64");
        const encryptedRefreshToken =
          Buffer.from(refresh_token).toString("base64");
        localStorage.setItem("nexgAccessToken", encryptedAccessToken);
        localStorage.setItem("nexgRefreshToken", encryptedRefreshToken);
        setUserData(userInfo);
      }

      setloadingUser(false);
    };

    return () => {
      bc.close();
    };
  }, []);

  return (
    <div className="absolute z-10 top-2 right-2">
      {userData ? (
        <>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <div className="flex flex-col items-center p-3 gap-2">
              <p>Email: {userData.email}</p>
              <Button variant="contained" onClick={signOut}>
                Sign Out
              </Button>
            </div>
          </Popover>
          <button onClick={handleClick} className="signupButton">
            {shortenString(userData.username, 6, 0, true)}
          </button>
        </>
      ) : (
        <button
          onClick={signinHandler}
          className="signupButton"
          disabled={loadingUser}
        >
          {loadingUser && (
            <CircularProgress
              size={15}
              color="inherit"
              sx={{ marginRight: 1 }}
            />
          )}
          Sign In
        </button>
      )}
    </div>
  );
}
