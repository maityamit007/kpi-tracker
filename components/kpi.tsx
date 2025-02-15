import { KpiProps } from "@/constants/constant";
import React from "react";
import Chart from "./chart";

type StatBoxProps = {
  value: number | string;
  title: string;
};

const StatBox: React.FC<StatBoxProps> = ({ value, title }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 border-r border-gray-300 last:border-r-0">
      <span className="text-lg font-bold">{value}</span>
      <span className="text-sm text-gray-700">{title}</span>
    </div>
  );
};

const Kpi: React.FC<KpiProps> = ({ data = [], story, chartData }) => {
  return (
    <div className="text-center">
      <p>Those options are already baked in with this model shoot me an email clear blue water but we need distributors to evangelize the new line to local markets.</p>
      <div className="flex flex-row justify-center gap-2 p-4">
        {
          data.filter((ele) => ele.title == "hashtags").map((ele) => (
            ele.value.map((e: string) => (<>
              <div className="border-2 max-w-32 text-xs border-gray-300 rounded-md p-2 bg-gray-200 whitespace-normal break-words">{e}</div>
            </>))
          ))}
      </div>
      {story && <Chart data={chartData}/>}
      <div className="flex justify-center gap-3 overflow-hidden mt-10 mb-4">
        {data.filter((ele) => ele.title != "hashtags").map((stat, index) => (
          <StatBox key={index} value={stat.value} title={stat.title} />
        ))}
      </div>
      <div className="w-full flex flex-col items-start justify-start">
        <h2 className="text-lg font-semibold mb-5 text-gray-800">Bussiness Questions</h2>
        <div className="flex flex-wrap w-full gap-2">
          {[{ name: 'Question One', description: 'Short Description Goes Here' },
          { name: 'Question Two', description: 'Short Description Goes Here' },
          { name: 'Question Three', description: 'Short Description Goes Here' },
          { name: 'Question Four', description: 'Short Description Goes Here' },
          ].map((asset) => (
            <div className='flex flex-col cursor-pointer hover:bg-gray-200 w-[18.75rem] items-start gap-1 p-4 bg-card border rounded-lg shadow-sm'>
              <h2 className="text-sm font-semibold text-gray-800">{asset.name}</h2>
              <p className="text-sm text-gray-900 mt-1">{asset.description}</p>
            </div>))}
        </div>
      </div>
    </div>
  );
};

export default Kpi;
