import "./navigation.scss";
export default function Navigation() {
  return (
    <nav id="nav">
      <a href={process.env.REACT_APP_HOMEPAGE_URL + "/signup"}>Sign Up</a>
    </nav>
  );
}
