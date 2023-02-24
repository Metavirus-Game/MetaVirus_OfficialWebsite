import { Player } from "@lottiefiles/react-lottie-player";
import "./finTarget.scss";
export default function FinTarget() {
  return (
    <div className="targetContainer">
      <div className="targetContextContainer">
        <div>
          <h3>Currently in seed round of financing:</h3>
          <ul>
            <li>
              Hard cap of $300,000 was reached and 3% of total token supply was
              sold in the private sale.
            </li>
            <li>
              Targeting a seed round of $2.4 million with 12% of total token
              supply to be sold.
            </li>
            <li>
              Quick unlocking of the presale portion for better token value
              management.
            </li>
            <li>$1 million already raised.</li>
            <li>
              Free to choose investment methods. For example, if you choose to
              directly purchase presale shares instead of participating in
              investment, the trading time allowed will be earlier but the price
              will be higher.
            </li>
          </ul>
        </div>
      </div>
      <div className="targetImgContainer">
        <div>
          <h2>Financing Target</h2>
          <h3>Last call before listing on the exchange</h3>
        </div>
      </div>
    </div>
  );
}
