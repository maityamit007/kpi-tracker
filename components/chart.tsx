import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { ChartProps } from "@/constants/constant";

const Chart: React.FC<ChartProps> = ({ data }) => {
  if (data.length === 0) return <p>No data available</p>;

  const { title, chartType } = data[0];
  const isPieChart = chartType === "pie" || chartType === "donut";

  const chartOptions: Highcharts.Options = {
    chart: {
      type: chartType === "donut" ? "pie" : chartType,
    },
    title: {
      text: title,
    },
    xAxis: !isPieChart
      ? {
          categories: data.map((d) => d.category),
        }
      : undefined,
    yAxis: !isPieChart
      ? {
          title: {
            text: "Values",
          },
        }
      : undefined,
    plotOptions: {
      pie: {
        innerSize: chartType === "donut" ? "50%" : "0%",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.y}%",
        },
      },
    },
    series: [
      {
        name: title,
        data: isPieChart
          ? data.map((d) => ({ name: d.category, y: d.value }))
          : data.map((d) => d.value),
        type: isPieChart ? "pie" : chartType,
      } as Highcharts.SeriesOptionsType,
    ],
  };

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export default Chart;
