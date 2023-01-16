import ReactECharts from "echarts-for-react";
function TokenChart() {
  const option = {
    title: {
      text: "Token Distribution",
      left: "center",
      top: 20,
      textStyle: {
        color: "#fff",
        fontSize: "1.5em",
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
          { value: 3, name: "Cornerstone round financing (Done)" },
          { value: 7, name: "Seed round financing (In progress)" },
          { value: 4, name: "First pre sale" },
          { value: 6, name: "Second batch of pre sale" },
          { value: 10, name: "ICO/IDO" },
          { value: 18, name: "Founder & Team" },
          { value: 6, name: "Founder & Team" },
          { value: 20, name: "Consultant" },
          { value: 6, name: "Marketing cooperation" },
          { value: 3, name: "Community airdrop" },
          { value: 7, name: "User creation reward" },
          { value: 10, name: "Company reserve" },
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
      <ReactECharts option={option} style={{ height: "600px" }} />
    </div>
  );
}

export default TokenChart;
