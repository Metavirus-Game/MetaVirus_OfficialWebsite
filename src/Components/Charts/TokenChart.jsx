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
        // lineHeight: "20",
      },
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)",
    },
    visualMap: {
      show: false,
      min: 0,
      max: 50000000,
      inRange: {
        colorLightness: [0, 1],
      },
    },
    series: [
      {
        name: "Token Distribution",
        type: "pie",
        radius: "55%",
        center: ["50%", "50%"],
        data: [
          { value: 3000000, name: "Private Sale (Completed)" },
          { value: 12000000, name: "Seed Round (In Progress)" },
          { value: 4000000, name: "First Presale" },
          { value: 6000000, name: "Second Presale" },
          { value: 10000000, name: "IDO" },
          { value: 18000000, name: "Founders & Team" },
          { value: 6000000, name: "Advisors" },
          { value: 30000000, name: "Game Output" },
          { value: 6000000, name: "Marketing Partnership" },
          { value: 3000000, name: "Community Airdrop" },
          { value: 7000000, name: "User Creation Reward" },
          { value: 10000000, name: "Company Reserve" },
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
        style={{ height: "550px" }}
        className="mobileChart"
      />
    </div>
  );
}

export default TokenChart;
