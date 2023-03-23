import "./whyLight.scss";
import { Player } from "@lottiefiles/react-lottie-player";
export default function WhyLight({ isLoaded }) {
  return (
    <div className="whyLightSection">
      <Player
        autoplay
        loop
        src="https://assets6.lottiefiles.com/packages/lf20_2omr5gpu.json"
        style={{ height: "400px", width: "400px" }}
        id="whySvg"
      />
      <div className="whyLightContext">
        <h2>SOLID BARRIER</h2>
        {/* <h3>Fulfill Both Sides’ Needs</h3> */}
        <div className="whyLightContent">
          No longer just a traffic channel or competition organizer, but
          creators and providers of web3 eSports rules.
        </div>
        {/* <div className="whyLightContent">
          Competitiveness and no control difficulty resulting in "light
          esports".
        </div> */}
        <div className="whyLightList">
          <div
            className={
              isLoaded ? "animate__animated animate__fadeIn" : "unloaded"
            }
            style={{ paddingBottom: "3rem" }}
          >
            <img
              src={process.env.PUBLIC_URL + "img/why_ls_1.png"}
              alt="why_ls_1"
            />
            <div>
              {/* There are various ways to obtain NFTs which will be produced in
              our multiple games. The types of esports games will also be
              diverse, such as automatic turn based team battle, automatic tower
              defense, automatic turn based strategy and so on. */}
              An open and transactional tokenomics suitable for Web3
            </div>
          </div>
          <div
            className={
              isLoaded
                ? "animate__animated animate__fadeIn animate__delay-1s"
                : "unloaded"
            }
          >
            <img
              src={process.env.PUBLIC_URL + "img/why_ls_2.png"}
              alt="why_ls_2"
            />
            <div>
              {/* Through the performance form of light e-sports, the upstream
              output end and the downstream competition end are perfectly
              combined. Our “Light eSports" is not a game, nor is it a platform,
              but a "game cluster" connected by a Token economy. */}
              Independent game mechanics and competition rules
            </div>
          </div>
          <div
            className={
              isLoaded
                ? "animate__animated animate__fadeIn animate__delay-2s"
                : "unloaded"
            }
          >
            <img
              src={process.env.PUBLIC_URL + "img/why_ls_3.png"}
              alt="why_ls_3"
            />
            <div>
              {/* The "Light eSports" will releas its first generation product
              MMORPG "MetaVirus" during the same period. Players collect and
              train pets in the immersive gaming world, and compete against
              other players on the platform. */}
              Develop and API integration based on product adaptability
            </div>
          </div>
          <div
            className={
              isLoaded
                ? "animate__animated animate__fadeIn animate__delay-3s"
                : "unloaded"
            }
          >
            <img
              src={process.env.PUBLIC_URL + "img/why_ls_4.png"}
              alt="why_ls_4"
            />
            <div>
              {/* "Collect in the game, compete on the platform" - this is our
              "LES". */}
              Perfectly fitting transaction tax for token economy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
