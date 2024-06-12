import TokenChart from "./TokenChart";
import LiquidityChart from "./LiquChart";
import "./chart.scss";
function Chart({ isLoaded }) {
  return (
    <div className="chart">
      {isLoaded && (
        <>
          <TokenChart />
          {/* <LiquidityChart /> */}
        </>
      )}
    </div>
  );
}

export default Chart;
