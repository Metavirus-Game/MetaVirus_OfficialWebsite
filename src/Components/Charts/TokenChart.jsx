import ReactECharts from "echarts-for-react";
function TokenChart() {
  const option = {
    title: {
      text: "Token Distribution",
      left: "center",
      top: 20,
      textStyle: {
        color: "#fff",
        fontSize: "1.4rem",
        lineHeight: "20",
      },
    },
    tooltip: {
      trigger: "item",
    },
    visualMap: {
      show: false,
      min: 0,
      max: 30,
      inRange: {
        colorLightness: [0, 1],
      },
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "55%",
        center: ["50%", "50%"],
        data: [
          { value: 3, name: "Private Sale (Completed)" },
          { value: 12, name: "Seed Round (In Progress)" },
          { value: 4, name: "First Presale" },
          { value: 6, name: "Second Presale" },
          { value: 5, name: "IDO" },
          { value: 18, name: "Founders & Team" },
          { value: 6, name: "Advisors" },
          { value: 20, name: "Game Output" },
          { value: 6, name: "Marketing Partnership" },
          { value: 3, name: "Community Airdrop" },
          { value: 7, name: "User Creation Reward" },
          { value: 10, name: "Company Reserve" },
        ].sort(function (a, b) {
          return a.value - b.value;
        }),
        roseType: "radius",
        label: {
          color: "rgba(255, 255, 255, 0.7)",
        },
        labelLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, 0.7)",
          },
          smooth: 0.2,
          length: 10,
          length2: 20,
        },
        itemStyle: {
          color: "#5ab7bb",
        },
        animationType: "scale",
        animationEasing: "elasticOut",
        animationDelay: function (idx) {
          return Math.random() * 600;
        },
      },
    ],
  };
  return (
    <div className="tokenChart">
      <ReactECharts
        option={option}
        style={{ height: "600px" }}
        className="mobileChart"
      />
    </div>
  );
}

export default TokenChart;
