import React from 'react'
import AssetCard from './assetCard'

function FeaturedContent() {

    let featuredContent = [{
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
            <h1 className='text-3xl font-bold mt-10'>Featured</h1>
            <p className='mt-2 mb-10 text-gray-600'>Curated picks from the week</p>
            <div className='flex flex-wrap border-2  gap-5'>
                {featuredContent.map((ele) => (
                    <div className='border-2 w-[345px] gap-5'>
                        <AssetCard asset={ele} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeaturedContent