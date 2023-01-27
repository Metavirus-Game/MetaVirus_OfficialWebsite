import { BrowserRouter, Routes, Route } from "react-router-dom";
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
    <AuthContext.Provider value={{ auth, setAuth }}>
      <BrowserRouter>
        <Routes>
          <Route path={process.env.REACT_APP_HOMEPAGE_URL} element={<Main />} />
          ;
          <Route
            path={process.env.REACT_APP_HOMEPAGE_URL + "/signup"}
            element={<Signup />}
          />
          <Route
            path={process.env.REACT_APP_HOMEPAGE_URL + "/signin"}
            element={<Signin />}
          />
          <Route
            path={process.env.REACT_APP_HOMEPAGE_URL + "/userInfo"}
            element={<UserInfo />}
          />
          <Route path={"*"} element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
