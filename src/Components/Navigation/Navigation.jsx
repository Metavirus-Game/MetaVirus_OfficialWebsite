import { useContext } from "react";
import "./navigation.scss";
import { AuthContext } from "../../App";
export default function Navigation() {
  const { auth, setAuth } = useContext(AuthContext);
  console.log(auth);
  return (
    <nav id="nav">
      {auth ? (
        <a href={process.env.PUBLIC_URL + "/signin"}>My Account</a>
      ) : (
        <a href={process.env.PUBLIC_URL + "/signup"}>Sign Up</a>
      )}
    </nav>
  );
}
