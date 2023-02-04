import { Player } from "@lottiefiles/react-lottie-player";
import "./finTarget.scss";
export default function FinTarget() {
  return (
    <div className="targetContainer">
      <div className="targetContextContainer">
        <div>
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
            <li>At present, USD 1,000,000 has been in place.</li>
            <li>Minimum investment of $200,000.</li>
          </ul>
        </div>
      </div>
      <div className="targetImgContainer">
        <h2>Finance Target</h2>
      </div>
    </div>
  );
}
