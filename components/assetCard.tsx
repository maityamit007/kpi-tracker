import { Asset } from '@/constants/constant'
import Image from 'next/image'
import React from 'react'

function AssetCard({ asset, isTrending = false }: { asset: Asset, isTrending?: boolean }) {
  return (
    <div className={`flex p-4 ${!isTrending ? 'bg-card border rounded-lg shadow-md' : ''} w-full max-w-sm`}>
      <div className='flex-[30%] flex items-center justify-center'>
          <Image src="/link.png" alt= "" width={50} height={50}/>
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