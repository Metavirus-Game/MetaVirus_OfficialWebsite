import ReactECharts from "echarts-for-react"; // or var ReactECharts = require('echarts-for-react');
import { liquData } from "./LiquData";
function LiquidityChart() {
  const timeData = [];
  const gameOutputData = [];
  const IEOData = [];
  const marketingData = [];
  const preSaleData = [];
  const teamData = [];
  const investorData = [];
  const userCreationData = [];
  for (let data of liquData) {
    timeData.push(data.TIME);
    gameOutputData.push(data["Game Output"]);
    IEOData.push(data["IEO"]);
    marketingData.push(data.Marketing);
    preSaleData.push(data["Pre-sale"]);
    teamData.push(data["Team&Consultant"]);
    investorData.push(data.Investor);
    userCreationData.push(data["User Creation"]);
  }

  const option = {
    // title: {
    //   text: "Liquidity Chart",
    //   left: "center",
    //   top: -20,
    //   textStyle: {
    //     color: "#fff",
    //   },
    // },
    // color: ["#a36650", "#eabe5b", "#5ab7bb", "#24e7f8", "#365254"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    legend: {
      data: [
        "Game Output",
        "IDO",
        "Marketing",
        "Pre-sale",
        "Team&Consultant",
        "Investor",
        "User Creation",
      ],
      itemStyle: {
        color: "#ddd",
      },
      textStyle: {
        color: "#fff",
      },
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: timeData,
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "Game Output",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: gameOutputData,
        showSymbol: false,
      },
      {
        name: "IDO",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: IEOData,
        showSymbol: false,
      },
      {
        name: "Marketing",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: marketingData,
        showSymbol: false,
      },
      {
        name: "Pre-sale",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: preSaleData,
        showSymbol: false,
      },
      {
        name: "Team&Consultant",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: teamData,
        showSymbol: false,
      },
      {
        name: "Investor",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: investorData,
        showSymbol: false,
      },
      {
        name: "User Creation",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: userCreationData,
        showSymbol: false,
      },
    ],
    animationDuration: 1000,
  };
  return (
    <>
      <div className="liqChart">
        <h2 style={{ marginBottom: "6rem" }}>Liquidity Distribution</h2>
        <ReactECharts
          option={option}
          style={{ height: "300px" }}
          className="mobileChart"
        />
      </div>
    </>
  );
}

export default LiquidityChart;
