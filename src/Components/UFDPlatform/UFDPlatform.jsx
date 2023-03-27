import "./UFDPlatform.scss";

export default function UFDPlatform({ isLoaded }) {
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
        <div className="absolute translate-y-[37vh] text-[1.5rem] text-[#F7FFA0] font-bold max-[600px]:text-[1rem] max-[600px]:translate-y-[39vh]">
          Usability
        </div>
        <div className="absolute translate-x-[35vw] text-[1.5rem] text-[#F7FFA0] font-bold max-[600px]:translate-y-[-2rem] max-[600px]:text-[1rem]">
          Virality
        </div>
        <div className="absolute translate-x-[-37vw] text-[1.5rem] text-[#F7FFA0] font-bold max-[600px]:translate-y-[-2rem] max-[600px]:text-[1rem] max-[600px]:translate-x-[-35vw]">
          Decentralized
        </div>
        {isLoaded && (
          <>
            <div className="UFDBlockchainBlock animate__animated animate__fadeIn">
              <img
                src={process.env.PUBLIC_URL + "/img/platform_blockchain.png"}
                alt="icon"
              />
              <div className="max-sm:basis:100%">
                Blockchain network battle
                <br />
                No battle operation
              </div>
            </div>
            <div className="UFDVideoBlock animate__animated animate__fadeIn animate__delay-1s">
              <img
                src={process.env.PUBLIC_URL + "/img/platform_video.png"}
                alt="icon"
              />
              <div>
                Concise battle video
                <br /> Any time to retrace the battle
              </div>
            </div>
            <div className="UFDCombatBlock animate__animated animate__fadeIn animate__delay-2s">
              <img
                src={process.env.PUBLIC_URL + "/img/platform_combat.png"}
                alt="icon"
              />
              <div>
                Asynchronous combat
                <br />
                Automatic combat
              </div>
            </div>
            <div className="UFDWalletBlock animate__animated animate__fadeIn animate__delay-3s">
              <img
                src={process.env.PUBLIC_URL + "/img/platform_wallet.png"}
                alt="icon"
              />
              <div>
                Only register if interested
                <br />
                Only import wallet if needed
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
