import React from 'react'
import AssetCard from './assetCard'

function TrendingContent() {

    let trendingContent = [{
        id: 1, type: 'asset', name: 'Item Name', description: 'Short Description to be added.', date: '09/12/2025',
    }, {
        id: 2, type: 'asset', name: 'Asset Example', description: 'Short Description to be added.', date: '09/12/2025',
    }, {
        id: 3, type: 'asset', name: 'Item Name', description: 'Short Description to be added.', date: '09/12/2025',
    }, {
        id: 4, type: 'asset', name: 'Item Name', description: 'Short Description to be added.', date: '09/12/2025',
    }]

    return (
        <div>
            <h1 className='text-3xl font-bold mt-10'>Trending</h1>
            <p className='mt-2 mb-10 text-gray-600'>Most popular by community</p>
            <div className='flex flex-wrap border-2  gap-5'>
                {trendingContent.map((ele) => (
                    <div className='border-2 w-[345px] gap-5'>
                        <AssetCard asset={ele} isTrending={true}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TrendingContent