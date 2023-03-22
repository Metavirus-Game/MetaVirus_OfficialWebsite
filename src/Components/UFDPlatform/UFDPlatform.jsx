import "./UFDPlatform.scss";

export default function UFDPlatform() {
  return (
    <div className="UFDPlatformSection">
      <h2>User-Firendly & Decentralized Platform</h2>
      <div className="UFDPlatformContainer">
        <img
          src={process.env.PUBLIC_URL + "/img/verticalArrow.png"}
          className="verArrow"
          alt="arrow"
        />
        <img
          src={process.env.PUBLIC_URL + "/img/horizontalArrow.png"}
          className="horArrow"
          alt="arrow"
        />
        <div className="absolute translate-y-[-40vh] text-[1.5rem] text-[#F7FFA0] font-bold max-[600px]:text-[1rem]">
          Immutability
        </div>
        <div className="absolute translate-y-[40vh] text-[1.5rem] text-[#F7FFA0] font-bold max-[600px]:text-[1rem]">
          Usability
        </div>
        <div className="absolute translate-x-[35vw] text-[1.5rem] text-[#F7FFA0] font-bold max-[600px]:translate-y-[-2rem] max-[600px]:text-[1rem]">
          Virality
        </div>
        <div className="absolute translate-x-[-35vw] text-[1.5rem] text-[#F7FFA0] font-bold max-[600px]:translate-y-[-2rem] max-[600px]:text-[1rem]">
          Decentralized
        </div>
        <div className="UFDBlockchainBlock">
          <img
            src={process.env.PUBLIC_URL + "/img/plat_blockchain.png"}
            alt="icon"
            width={"35%"}
          />
          <div className="max-sm:basis:100%">
            Blockchain network battle
            <br />
            No battle operation
          </div>
        </div>
        <div className="UFDVideoBlock">
          <img
            src={process.env.PUBLIC_URL + "/img/plat_video.png"}
            alt="icon"
            width={"30%"}
          />
          <div>
            Concise battle video
            <br /> Any time to retrace the battle
          </div>
        </div>
        <div className="UFDCombatBlock">
          <img
            src={process.env.PUBLIC_URL + "/img/plat_combat.png"}
            alt="icon"
            width={"35%"}
          />
          <div>
            Asynchronous combat
            <br />
            Automatic combat
          </div>
        </div>
        <div className="UFDWalletBlock">
          <img
            src={process.env.PUBLIC_URL + "/img/plat_wallet.png"}
            alt="icon"
            width={"35%"}
          />
          <div>
            Only register if interested
            <br />
            Only import wallet if needed
          </div>
        </div>
      </div>
    </div>
  );
}
