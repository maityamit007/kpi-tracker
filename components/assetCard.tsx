import { Asset } from '@/constants/constant'
import Image from 'next/image'
import React from 'react'

function AssetCard({ asset, isTrending = false, handleClick }: { asset: Asset, isTrending?: boolean, handleClick: (event?: React.MouseEvent<HTMLButtonElement>) => void }) {
  return (
    <div onClick={() => handleClick(asset.chartData)} className={`flex gap-7 p-4 ${!isTrending ? 'bg-card border rounded-lg shadow-sm' : ''} w-full max-w-sm`}>
      <div className='flex-[30%] flex items-center justify-center'>
          <Image src="/chart.jpg" alt= "" width={100} height={100}/>
      </div>
      <div className=''>
        <h2 className="text-lg font-semibold text-gray-800">{asset.name}</h2>
        <p className="text-sm text-gray-900 mt-1">{asset.description}</p>
        <p className="text-sm text-gray-600 mt-1">{asset.date}</p>
      </div>
    </div>
  )
}

export default AssetCard