import "./solidBarrier.scss";
export default function SolidBarrier() {
  return (
    <div className="SBSection">
      <div className="SBContainer">
        <div className="SBContextContainer">
          <h2>Solid Barrier</h2>
          <div>
            No longer just a traffic channel or competition organizer, but
            creators and providers of web3eSports rules.
          </div>
        </div>
        <div className="SBListContainer">
          <div>
            <img
              src={process.env.PUBLIC_URL + "/img/why_ls_1.png"}
              alt="icon"
              width={"5%"}
            />
            <div>An open and transactional tokenomics suitable for Web3</div>
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/img/why_ls_1.png"}
              alt="icon"
              width={"5%"}
            />
            <div>Independent game mechanics and competition rules</div>
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/img/why_ls_1.png"}
              alt="icon"
              width={"5%"}
            />
            <div>Develop and API integration based on product adaptability</div>
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/img/why_ls_1.png"}
              alt="icon"
              width={"5%"}
            />
            <div>Perfectly fitting transaction tax for token economy</div>
          </div>
        </div>
      </div>
    </div>
  );
}
