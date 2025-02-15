import React from 'react'
import AssetCard from './assetCard'
import { chartData, kpiData, storyBoardData } from '@/constants/asset'
import { Asset } from '@/constants/constant'

function List({
    id,
    title,
    desc,
    data = [],
    handleClick
}: {
    id?: string,
    title?: string,
    desc?: string,
    data?: Asset[],
    handleClick: (event?: React.MouseEvent<HTMLButtonElement>) => void
}) {

    return (
        <div className='cursor-pointer'>
            {title && <h1 className='text-3xl font-bold mt-10'>{title}</h1>}
            {desc && <p className='mt-2 mb-10 text-gray-600'>{desc}</p>}
            <div className='flex flex-wrap border-2  gap-5'>
                {id == 'layout' ? chartData.map((ele, index) => (
                    <div className='border-2 w-[345px] gap-5' key={index}>
                        <AssetCard asset={ele} isTrending={title == "Trending" ? true : false} handleClick={handleClick} />
                    </div>
                )) : (id == 'story') ? storyBoardData.map((ele, index) => (
                    <div className='border-2 w-[345px] gap-5' key={index}>
                        <AssetCard asset={ele} isTrending={title == "Trending" ? true : false} handleClick={handleClick} />
                    </div>
                )) : (id == "search") ? data.map((ele, index) => (
                    <div className='border-2 w-[345px] gap-5' key={index}>
                        <AssetCard asset={ele} isTrending={title == "Trending" ? true : false} handleClick={handleClick} />
                    </div>
                )) : kpiData.filter((ele) => ele.type == title).map((ele, index) => (
                    <div className='border-2 w-[345px] gap-5' key={index}>
                        <AssetCard asset={ele} isTrending={title == "Trending" ? true : false} handleClick={handleClick} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default List