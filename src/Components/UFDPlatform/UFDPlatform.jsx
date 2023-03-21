import "./UFDPlatform.scss";

export default function UFDPlatform() {
  return (
    <div className="UFDPlatformContainer">
      <svg
        width="1298"
        height="766"
        viewBox="0 0 1298 766"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="UFDSvg"
      >
        <path
          d="M0 383.025L50.0893 411.737L49.9102 354.002L0 383.025ZM1298 379L1247.91 350.288L1248.09 408.022L1298 379ZM45.0153 387.885L1253.02 384.139L1252.98 374.14L44.9843 377.885L45.0153 387.885Z"
          fill="#F7FFA0"
        />
        <path
          d="M649 0L620.132 50H677.868L649 0ZM649 766L677.868 716H620.132L649 766ZM644 45V721H654V45H644Z"
          fill="#F7FFA0"
        />
      </svg>
      <div className="absolute translate-y-[-40vh] text-[1.5rem] font-bold">
        Immutability
      </div>
      <div className="absolute translate-y-[40vh] text-[1.5rem] font-bold">
        Usability
      </div>
      <div className="absolute translate-x-[35vw] text-[1.5rem] font-bold">
        Virality
      </div>
      <div className="absolute translate-x-[-35vw] text-[1.5rem] font-bold">
        Decentralized
      </div>
      <div className="absolute w-[20vw] h-[25vh] bg-white translate-x-[-15vw] translate-y-[-20vh] rounded-lg flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div>
          Blockchain network battle
          <br />
          No battle operation
        </div>
        <img
          src={process.env.PUBLIC_URL + "/img/plat_blockchain.png"}
          alt="icon"
          width={"35%"}
        />
      </div>
      <div className="absolute w-[20vw] h-[25vh] bg-white translate-x-[15vw] translate-y-[-20vh] rounded-lg flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
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
      <div className="absolute w-[20vw] h-[25vh] bg-white translate-x-[-15vw] translate-y-[20vh] rounded-lg flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
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
      <div className="absolute w-[20vw] h-[25vh] bg-white translate-x-[15vw] translate-y-[20vh] rounded-lg flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div>
          Only register if interested
          <br />
          Only import wallet if needed
        </div>
        <img
          src={process.env.PUBLIC_URL + "/img/plat_wallet.png"}
          alt="icon"
          width={"35%"}
        />
      </div>
    </div>
  );
}
