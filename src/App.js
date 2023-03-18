import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Signup from "./Components/Signup&Signin/Signup";
import Signin from "./Components/Signup&Signin/Signin";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import UserInfo from "./Components/UserInfo/UserInfo";
import Main from "./Main";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
export const AuthContext = createContext();
export default function App() {
  const [auth, setAuth] = useState(false);
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    if (localStorage.getItem("accountId") && localStorage.getItem("loginKey")) {
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
          console.log(response);
          const errorCode = response.data.code;
          if (errorCode === 0) {
            setAuth(true);
          }
        })
        .catch((error) => {
          console.log(error);
          setAuth(false);
        });
    } else {
      setAuth(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, userInfo, setUserInfo }}>
      {/* BrowserRouter not working when hoisting via github pages */}
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        {/* <HashRouter basename={process.env.PUBLIC_URL}> */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/userInfo" element={<UserInfo />} />
          {/* <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/userInfo" element={<UserInfo />} /> */}
          {/* <Route path={"*"} element={<ErrorPage />} /> */}
        </Routes>
        {/* </HashRouter> */}
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
