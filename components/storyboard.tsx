import { StoryProps } from "@/constants/constant";
import React from "react";
import Kpi from "./kpi";

const Storyboard: React.FC<StoryProps> = ({ modalData, chartData }) => {
  return (
    <div>
      <Kpi data={modalData} chartData={chartData} story={true}/>
    </div>
  );
};

export default Storyboard;
