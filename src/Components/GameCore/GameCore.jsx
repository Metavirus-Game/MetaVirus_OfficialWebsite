import "./gameCore.scss";
import { Player } from "@lottiefiles/react-lottie-player";
export default function GameCore({ isLoaded }) {
  return (
    <div className="gameCoreContainer">
      {isLoaded && (
        <>
          <div className={"animate__animated animate__bounceInRight gameCore"}>
            <div className="gameCoreContext">
              <h3>GameFi Thinking</h3>
              <ul>
                <li>F2P (Free to Play) free game forever</li>
                <li>P2E (Play to Earn) Earn money while playing</li>
                <li>
                  Incentivize Crypto and asset trading behavior among players
                </li>
              </ul>
            </div>
            <Player
              className="svg"
              autoplay
              loop
              src="https://assets6.lottiefiles.com/packages/lf20_YrdJ2K8cQY.json"
            />
          </div>
          <div className={"animate__animated animate__bounceInLeft gameCore"}>
            <Player
              className="svg"
              autoplay
              loop
              src="https://assets9.lottiefiles.com/packages/lf20_wbwoxby3.json"
            />
            <div className="gameCoreContext">
              <h3>Income Distribution</h3>
              <ul>
                <li>Players acquire currency through game playing</li>
                <li>
                  Developers and investors get game tax dividends by holding
                  governance tokens
                </li>
                <li>
                  Decentralized smart contracts realize automatic distribution
                  of income
                </li>
              </ul>
            </div>
          </div>
          <div className={"animate__animated animate__bounceInRight gameCore"}>
            <div className="gameCoreContext">
              <h3>Crypto Circulation</h3>
              <ul>
                <li>Players will never be able to recharge in game</li>
                <li>All ingame currency only comes from game world</li>
                <li>Play to earn game currency and NFT (scarce resource)</li>
              </ul>
            </div>
            <Player
              className="svg"
              autoplay
              loop
              src="https://assets6.lottiefiles.com/packages/lf20_ml0yft0o.json"
            />
          </div>
        </>
      )}
    </div>
  );
}
