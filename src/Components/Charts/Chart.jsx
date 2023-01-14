import TokenChart from "./TokenChart";
import LiquidityChart from "./LiquChart";
import "./chart.scss";
function Chart() {
  return (
    <div className="chart">
      <TokenChart />
      <LiquidityChart />
    </div>
  );
}

export default Chart;
