import "./partner.scss";
export default function Partner() {
  return (
    <div className="partnerSection">
      <h2>Strategic Partnership</h2>
      <div className="partnerContainer">
        {/* <div>Strategic Partnership</div> */}
        <div>
          <img
            src={process.env.PUBLIC_URL + "/img/byteDance.png"}
            alt="logo"
            width={150}
            height={"auto"}
          />
          <img
            src={process.env.PUBLIC_URL + "/img/deGame.png"}
            alt="logo"
            width={200}
            height={"auto"}
          />
        </div>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/img/tencentGame.png"}
            alt="logo"
            width={100}
            height={"auto"}
          />

          <img
            src={process.env.PUBLIC_URL + "/img/aliGame.png"}
            alt="logo"
            width={200}
            height={"auto"}
          />
          <img
            src={process.env.PUBLIC_URL + "/img/perfectGame.png"}
            alt="logo"
            width={200}
            height={"auto"}
          />
        </div>
      </div>
    </div>
  );
}
