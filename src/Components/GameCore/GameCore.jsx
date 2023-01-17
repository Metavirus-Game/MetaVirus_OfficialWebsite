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
              <p>
                F2P（Free to Play）free games P2E（Play to Earn）Earn money
                while playing Incentivize Crypto and asset trading behavior
                among players.
              </p>
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
              <p>
                Faction fight and union war. Infinite growth Fusion
                Reincarnation system.Players acquire resources and currency
                through in-game labor Game teams and investors get game tax
                dividends by holding governance tokens Decentralized smart
                contracts realize automatic distribution of income.
              </p>
            </div>
          </div>
          <div className={"animate__animated animate__bounceInRight gameCore"}>
            <div className="gameCoreContext">
              <h3>Crypto Circulation</h3>
              <p>
                Players will never be able to recharge in-game All demand
                currency comes from game output or exchange purchasePlay to earn
                game currency and NFT (scarce resource non-fungible
                token)In-game wallet, exchange, NFT auction house.
              </p>
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
