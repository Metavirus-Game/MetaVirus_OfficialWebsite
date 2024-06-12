import ReactECharts from "echarts-for-react";
function TokenChart() {
  const option = {
    // title: {
    //   text: "Token Distribution",
    //   left: "center",
    //   top: -20,
    //   textStyle: {
    //     color: "#fff",
    //     fontSize: 30,
    //   },
    // },
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "0%",
      left: "center",
      textStyle: {
        color: "#fff",
      },
    },
    series: [
      {
        top: "10%",
        name: "Access From",
        type: "pie",
        radius: ["40%", "60%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 5,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },

        // visualMap: {
        //   show: false,
        //   // min: 1000000,
        //   // max: 1000000000,
        //   inRange: {
        //     colorLightness: [0, 1],
        //   },
        // },
        data: [
          { value: 20000000, name: "Cornerstone Round" },
          { value: 30000000, name: "Seed Round" },
          { value: 200000000, name: "IDO" },
          { value: 150000000, name: "Team" },
          { value: 18000000, name: "Founders & Team" },
          { value: 500000000, name: "Game Mining" },
          { value: 30000000, name: "Air drop" },
          { value: 40000000, name: "Marketing" },
          { value: 30000000, name: "Liquidity" },
        ],
        // .sort(function (a, b) {
        //   return a.value - b.value;
        // }),
      },
    ],
    // itemStyle: {
    //   color: "#c23531",
    //   shadowBlur: 200,
    //   shadowColor: "rgba(0, 0, 0, 0.5)",
    // },
  };
  return (
    <div className="tokenChart">
      <h1>Token Distribution</h1>
      <ReactECharts
        option={option}
        style={{ height: "550px" }}
        className="mobileChart"
      />
    </div>
  );
}

export default TokenChart;
