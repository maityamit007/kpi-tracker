import React from "react";
import { chartData } from "@/constants/asset";
import AssetCard from "./assetCard";

const LayoutList = ({ handleClick }: { handleClick: (event?: React.MouseEvent<HTMLButtonElement>) => void }) => {
    return (
        <div style={{ width: "100%", height: "400px", marginTop: '50px' }}>
            <div className="cursor-pointer">
                <div className='flex flex-wrap border-2  gap-5'>
                    {chartData.map((ele) => (
                        <div className='border-2 w-[345px] gap-5'>
                            <AssetCard asset={ele} handleClick={handleClick}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LayoutList;

