import "./gameCore.scss";
export default function GameCore({ isLoaded }) {
  return (
    <div className="gameCoreContainer">
      <div
        className={isLoaded ? "animate__animated animate__fadeIn" : "unloaded"}
      >
        <div
          className="gameCoreImg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/img/3.jpg"})`,
          }}
        />
        <div className="gameCoreContext">
          <h3>GameFi Thinking</h3>
          <ul className="text-left">
            <li>F2P (Free to Play) free game forever.</li>
            <li>P2E (Play to Earn) Earn money while playing.</li>
            <li>
              Incentivize Crypto and asset trading behavior among players.
            </li>
          </ul>
        </div>
      </div>
      <div
        className={
          isLoaded
            ? "animate__animated animate__fadeIn animate__delay-1s"
            : "unloaded"
        }
      >
        <div
          className="gameCoreImg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/img/19.jpg"})`,
          }}
        ></div>
        <div className="gameCoreContext">
          <h3>Income Distribution</h3>
          <ul className="text-left">
            <li>
              Players acquire resources and currency through in-game labor.
            </li>
            <li>
              Game teams and investors get game tax dividends by holding
              governance tokens.
            </li>
            <li>
              Decentralized smart contracts realize automatic distribution of
              income.
            </li>
          </ul>
        </div>
      </div>
      <div
        className={
          isLoaded
            ? "animate__animated animate__fadeIn animate__delay-2s"
            : "unloaded"
        }
      >
        <div
          className="gameCoreImg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/img/15.jpg"})`,
          }}
        ></div>
        <div className="gameCoreContext">
          <h3>Crypto Circulation</h3>
          <ul className="text-left">
            <li>Players will never be able to recharge in game.</li>
            <li>
              All demand currency comes from game output or exchange
              purchasePlay to earn game currency and NFT (scarce resource
              non-fungible token)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
