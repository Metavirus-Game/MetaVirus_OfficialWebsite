import { Player } from "@lottiefiles/react-lottie-player";
import "./finTarget.scss";
export default function FinTarget() {
  return (
    <div className="financeContainer">
      <Player
        id="targetSvg"
        autoplay
        loop
        src="https://assets9.lottiefiles.com/packages/lf20_2omr5gpu.json"
      />
      <div className="financeContext">
        <h2>Finance Target</h2>
        <h3>The current funding is in the seed round</h3>
        <ul>
          <li>
            The cornerstone round of 300,000 US dollars, accounting for 3% of
            the total issued tokens, has been completed.
          </li>
          <li>
            The seed round target of 1.4 million US dollars accounts for 7% of
            the total issued tokens.
          </li>
          <li>
            At p+resent, USD 100,000 has been in place (cornerstone investors
            participated in advance).
          </li>
          <li>Minimum investment of $200,000.</li>
        </ul>
      </div>
    </div>
  );
}
