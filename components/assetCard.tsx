import { Asset } from '@/constants/constant'
import React from 'react'

function AssetCard({ asset }: { asset: Asset }) {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white w-full max-w-sm">
      <h2 className="text-lg font-semibold text-gray-800">{asset.name} ({asset.type})</h2>
      <p className="text-sm text-gray-600 mt-1">{asset.description}</p>
      <div className="mt-3 flex justify-between items-center">
        <button className="text-blue-600 hover:underline">View Details</button>
        <button className="text-gray-500 hover:text-gray-700">⭐ Favorite</button>
      </div>
    </div>
  )
}

export default AssetCard