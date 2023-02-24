import "./whatLs.scss";
export default function WhatJs() {
  return (
    <div className="whatLsSection">
      <div className="whatLsTitle">
        <h2>What is Light eSport?</h2>
        <span>Automatic Battle E-sports</span>
      </div>
      <div className="whatLsContainer">
        <div className="pointContainer" style={{ marginBottom: "5rem" }}>
          <img
            src={process.env.PUBLIC_URL + "/img/ls_6.png"}
            alt="ls_6"
            style={
              window.innerWidth < 500 ? { width: "40px" } : { width: "65px" }
            }
          />
          <span>Asynchronous combat</span>
        </div>
        <div className="pointContainer" style={{ marginBottom: "5rem" }}>
          <img src={process.env.PUBLIC_URL + "/img/ls_1.png"} alt="ls_1" />

          <span>Automatic combat</span>
        </div>
        <div className="pointContainer" style={{ marginBottom: "5rem" }}>
          <img
            src={process.env.PUBLIC_URL + "/img/ls_3.png"}
            alt="ls_3"
            style={
              window.innerWidth < 500 ? { width: "60px" } : { width: "85px" }
            }
          />
          <span>
            No real time operation, no skill required, easy to get started
          </span>
        </div>
        <div className="pointContainer">
          <img
            src={process.env.PUBLIC_URL + "/img/ls_4.png"}
            alt="ls_4"
            style={
              window.innerWidth < 500 ? { width: "80px" } : { width: "110px" }
            }
          />
          <span>
            The entire battle video is concise and clear, making it easy to
            spread
          </span>
        </div>
        <div className="pointContainer">
          <img
            src={process.env.PUBLIC_URL + "/img/ls_5.png"}
            alt="ls_5"
            style={
              window.innerWidth < 500 ? { width: "70px" } : { width: "110px" }
            }
          />
          <span>Emphasizing strategy, difficult to master, high ceiling</span>
        </div>
        <div className="pointContainer">
          <img src={process.env.PUBLIC_URL + "/img/ls_2.png"} alt="ls_2" />
          <span>
            Light entry, no need to register to play, only register if
            interested, only import wallet if needed
          </span>
        </div>
      </div>
    </div>
  );
}
