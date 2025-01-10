import React, { useState } from "react";
import {
  PieChart,
  LineChart,
  lineElementClasses,
  markElementClasses,
} from "@mui/x-charts";

const Index = () => {
  const [data, setData] = useState([]);
  const lineData = [
    [4000, 3000, 2000, 2780, 1890, 2390, 3490],
    [2400, 1398, 9800, 3908, 4800, 3800, 4300],
  ];
  const xLabels = [
    "Page A",
    "Page B",
    "Page C",
    "Page D",
    "Page E",
    "Page F",
    "Page G",
  ];
  const valueFormatter = (item) => `${item.value}%`;
  return (
    <div>
      <h1>DashBoard</h1>
      <PieChart
        series={[
          {
            data: data,
            highlightScope: { fade: "global", highlight: "item" },
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
            valueFormatter,
          },
        ]}
        height={200}
      />
      <LineChart
        width={500}
        height={300}
        series={[
          { data: lineData[0], label: "pv", id: "pv" },
          { data: lineData[1], label: "uv", id: "uv" },
        ]}
        onAxisClick={(a, b) => {
          let pieData = Object.values(b.seriesValues);
          let pieLabels = Object.keys(b.seriesValues);
          let totalSum = pieData.reduce((total, val) => total + val, 0);

          let pieChartData = pieData.map((value, index) => ({
            label: pieLabels[index],
            value: Math.round((value / totalSum) * 100),
          }));

          setData(pieChartData);
        }}
        xAxis={[{ scaleType: "point", data: xLabels }]}
        sx={{
          [`.${lineElementClasses.root}, .${markElementClasses.root}`]: {
            strokeWidth: 1,
          },
          ".MuiLineElement-series-pvId": {
            strokeDasharray: "5 5",
          },
          ".MuiLineElement-series-uvId": {
            strokeDasharray: "3 4 5 2",
          },
          [`.${markElementClasses.root}:not(.${markElementClasses.highlighted})`]:
            {
              fill: "#fff",
            },
          [`& .${markElementClasses.highlighted}`]: {
            stroke: "none",
          },
        }}
      />
    </div>
  );
};

export default Index;
