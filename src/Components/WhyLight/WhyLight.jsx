import "./whyLight.scss";
import { Player } from "@lottiefiles/react-lottie-player";
export default function WhyLight() {
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
        <h2>Why Light</h2>
        <h3>Fulfill Both Sides’ Needs</h3>
        <div className="whyLightContent">
          The hottest esports games are LoL , CS:GO, Fortnite, but they all
          require high levels of player pro ficiency. Web3 users are not able to
          adapt to this deep gameplay, they are willing to study the strategy of
          P2E but not expert gamers.
        </div>
        <div className="whyLightContent">
          Competitiveness and no control difficulty resulting in "light
          esports".
        </div>
        <div className="whyLightList">
          <div style={{ paddingBottom: "3rem" }}>
            <img
              src={process.env.PUBLIC_URL + "img/why_ls_1.png"}
              alt="why_ls_1"
            />
            <div>
              There are various ways to obtain NFTs which will be produced in
              our multiple games. The types of esports games will also be
              diverse, such as automatic turn based team battle, automatic tower
              defense, automatic turn based strategy and so on.
            </div>
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + "img/why_ls_2.png"}
              alt="why_ls_2"
            />
            <div>
              Through the performance form of light e-sports, the upstream
              output end and the downstream competition end are perfectly
              combined. Our “Light eSports" is not a game, nor is it a platform,
              but a "game cluster" connected by a Token economy.
            </div>
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + "img/why_ls_3.png"}
              alt="why_ls_3"
            />
            <div>
              The "Light eSports" will releas its first generation product
              MMORPG "MetaVirus" during the same period. Players collect and
              train pets in the immersive gaming world, and compete against
              other players on the platform.
            </div>
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + "img/why_ls_4.png"}
              alt="why_ls_4"
            />
            <div>
              "Collect in the game, compete on the platform" - this is our
              "LES".
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
