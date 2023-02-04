import "./gameCore.scss";
export default function GameCore() {
  return (
    <div className="gameCoreContainer">
      <div>
        <div
          className="gameCoreImg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/img/3.jpg"})`,
          }}
        ></div>
        <div className="gameCoreContext">
          <h3>GameFi Thinking</h3>
          <ul>
            <li>F2P (Free to Play) free game forever.</li>
            <li>P2E (Play to Earn) Earn money while playing.</li>
            <li>
              Incentivize Crypto and asset trading behavior among players.
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div
          className="gameCoreImg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/img/19.jpg"})`,
          }}
        ></div>
        <div className="gameCoreContext">
          <h3>Income Distribution</h3>
          <ul>
            <li>Players acquire currency through game playing.</li>
            <li>
              Developers and investors get game tax dividends by holding
              governance tokens.
            </li>
            <li>
              Decentralized smart contracts realize automatic distribution of
              income.
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div
          className="gameCoreImg"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/img/15.jpg"})`,
          }}
        ></div>
        <div className="gameCoreContext">
          <h3>Crypto Circulation</h3>
          <ul>
            <li>Players will never be able to recharge in game.</li>
            <li>All ingame currency only comes from game world.</li>
            <li>Play to earn game currency and NFT (scarce resource).</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
