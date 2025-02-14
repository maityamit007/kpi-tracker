import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { SeriesOptionsType } from "highcharts";
import { LayoutChartProps } from "@/constants/constant";

const LayoutChart: React.FC<LayoutChartProps> = ({ data, options }) => {
  const chartOptions: Highcharts.Options = {
    chart: {
      type: "line",
    },
    title: {
      text: "Chart Title",
    },
    xAxis: {
      type: "linear",
    },
    yAxis: {
      title: {
        text: "Values",
      },
    },
    series: data.map(series => ({
      name: series.name,
      type: "line",
      data: series.data.map(point => [point.x, point.y]),
    })) as SeriesOptionsType[], // Ensure proper type casting
    ...options,
  };

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export default LayoutChart;

