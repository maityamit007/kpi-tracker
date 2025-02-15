import { KpiProps } from "@/constants/constant";
import React from "react";

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

const Kpi: React.FC<KpiProps> = ({ data }) => {
  console.log('data', data);
  return (
    <div className="text-center">
      <p>Those options are already baked in with this model shoot me an email clear blue water but we need distributors to evangelize the new line to local markets.</p>
      <div className="flex flex-row justify-center gap-2 p-4">
        {
          data.filter((ele) => ele.title == "hashtags").map((ele) => (
            ele.value.map((e: string) => (<>
              <div className="border-2 max-w-32 text-xs border-gray-300 rounded-md p-2 bg-gray-200">{e}</div>
            </>))          
          ))}
      </div>

      <div className="flex justify-center gap-3 overflow-hidden mt-10 mb-4">
        {data.filter((ele) => ele.title != "hashtags").map((stat, index) => (
          <StatBox key={index} value={stat.value} title={stat.title} />
        ))}
      </div>
    </div>
  );
};

export default Kpi;
