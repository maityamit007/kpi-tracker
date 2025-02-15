import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { SeriesOptionsType } from "highcharts";
import { LayoutChartProps } from "@/constants/constant";
import { chartData, kpiData } from "@/constants/asset";
import AssetCard from "./assetCard";

const KpiList: React.FC<LayoutChartProps> = ({ data, options }) => {
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
    })) as SeriesOptionsType[],
    ...options,
  };

  return (
    <div style={{ width: "100%", height: "400px", marginTop: '50px' }}>
        <div className="cursor-pointer">
            <div className='flex flex-wrap border-2  gap-5'>
                {kpiData.map((ele) => (
                    <div className='border-2 w-[345px] gap-5'>
                        <AssetCard asset={ele} />
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default KpiList;

