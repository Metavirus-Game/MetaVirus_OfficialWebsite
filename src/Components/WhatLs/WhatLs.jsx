import "./whatLs.scss";
export default function WhatJs() {
  return (
    <div className="whatLsSection">
      <div className="whatLsTitle">
        <h2>WE ARE THE FUTURE</h2>
        {/* <span>Automatic Battle E-sports</span> */}
      </div>
      <div className="whatLsContainer">
        <div className="pointContainer" style={{ marginBottom: "5rem" }}>
          <img
            src={process.env.PUBLIC_URL + "/img/ls_7.png"}
            alt="ls_7"
            style={
              window.innerWidth < 500
                ? { width: "70px" }
                : { width: "5vw", maxWidth: "95px" }
            }
          />
          <div>Ease of use</div>
          <span>No registration or wallet mandatory</span>
        </div>
        <div className="pointContainer" style={{ marginBottom: "5rem" }}>
          <img src={process.env.PUBLIC_URL + "/img/ls_1.png"} alt="ls_1" />
          <div>Gaming Nature</div>
          <span>ESports competition</span>
        </div>
        <div className="pointContainer" style={{ marginBottom: "5rem" }}>
          <img
            src={process.env.PUBLIC_URL + "/img/ls_8.png"}
            alt="ls_3"
            style={
              window.innerWidth < 500
                ? { width: "80px" }
                : { width: "6vw", maxWidth: "105px" }
            }
          />
          <div>Community</div>
          <span>ESports enhanced interaction</span>
        </div>
        <div className="pointContainer">
          <img
            src={process.env.PUBLIC_URL + "/img/ls_4.png"}
            alt="ls_4"
            style={
              window.innerWidth < 500
                ? { width: "80px" }
                : { width: "5vw", maxWidth: "110px" }
            }
          />
          <div>Liquidity</div>
          <span>Users' number determines output</span>
        </div>
        <div className="pointContainer">
          <img
            src={process.env.PUBLIC_URL + "/img/ls_5.png"}
            alt="ls_5"
            style={
              window.innerWidth < 500
                ? { width: "70px" }
                : { width: "5vw", maxWidth: "110px" }
            }
          />
          <div>Games</div>
          <span>Open cooperation</span>
        </div>
        <div className="pointContainer">
          <img src={process.env.PUBLIC_URL + "/img/ls_2.png"} alt="ls_2" />
          <div>Economic</div>
          <span>Individual fails won't affect global</span>
        </div>
      </div>
    </div>
  );
}
