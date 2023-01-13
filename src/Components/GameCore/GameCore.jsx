import "./gameCore.scss";

export function GameCore() {
  return (
    <div className="gameCoreContainer">
      <div className="gameCore">
        <div>
          <h3>GameFi Thinking</h3>
          <p>
            F2P（Free to Play）free games P2E（Play to Earn）Earn money while
            playing Incentivize Crypto and asset trading behavior among players.
          </p>
        </div>
        <img src="https://via.placeholder.com/200" alt="gamefi" />
      </div>
      <div className="gameCore">
        <img src="https://via.placeholder.com/200" alt="income" />
        <div>
          <h3>Income Distribution</h3>
          <p>
            Faction fight and union war. Infinite growth Fusion Reincarnation
            system.Players acquire resources and currency through in-game labor
            Game teams and investors get game tax dividends by holding
            governance tokens Decentralized smart contracts realize automatic
            distribution of income.
          </p>
        </div>
      </div>
      <div className="gameCore">
        <div>
          <h3>Crypto Circulation</h3>
          <p>
            Players will never be able to recharge in-game All demand currency
            comes from game output or exchange purchasePlay to earn game
            currency and NFT (scarce resource non-fungible token)In-game wallet,
            exchange, NFT auction house.
          </p>
        </div>
        <img src="https://via.placeholder.com/200" alt="crypto" />
      </div>
    </div>
  );
}
