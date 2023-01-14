import ReactECharts from "echarts-for-react"; // or var ReactECharts = require('echarts-for-react');
function LiquidityChart() {
  const option = {
    // title: {
    //   text: "Liquidity Chart",
    //   left: "center",
    //   top: -20,
    //   textStyle: {
    //     color: "#fff",
    //   },
    // },
    color: ["#a36650", "#eabe5b", "#5ab7bb", "#24e7f8", "#365254"],
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
      data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
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
        // data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        data: [
          "2022/7/1",
          "2022/10/1",
          "2023/1/1",
          "2023/4/1",
          "2023/7/1",
          "2023/10/1",
          "2024/1/1",
          "2024/4/1",
          "2024/7/1",
          "2024/10/1",
          "2025/1/1",
          "2025/4/1",
          "2025/7/1",
          "2025/10/1",
          "2026/1/1",
          "2026/4/1",
          "2026/7/1",
          "2026/10/1",
          "2027/1/1",
          "2027/4/1",
          "2027/7/1",
          "2027/10/1",
        ],
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
        data: [
          0, 0, 0, 0, 1.5, 3, 4.5, 6, 7.5, 9, 10.5, 12, 13.5, 15, 16.5, 18,
          19.5, 20, 20, 20, 20, 20,
        ],
      },
      {
        name: "IDO",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [
          10, 10, 10, 10, 11.5, 13, 14.5, 16, 17.5, 19, 20.5, 22, 23.5, 25,
          26.5, 28, 29.5, 30, 30, 30, 30, 30,
        ],
      },
      {
        name: "Marketing",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        // data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: "Direct",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        // data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
        name: "Search Engine",
        type: "line",
        stack: "Total",
        label: {
          show: true,
          position: "top",
        },
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        // data: [820, 932, 901, 934, 1290, 1330, 1320],
      },
    ],
    animationDuration: 3000,
    animationDelay: 2000,
  };
  return (
    <>
      <div className="liqChart">
        <h2 style={{ marginBottom: "3rem" }}>Liquidity Distribution</h2>
        <ReactECharts option={option} style={{ height: "400px" }} />
      </div>
    </>
  );
}

export default LiquidityChart;
