import { Search } from '@/constants/search'
import React from 'react'

function SearchBar({ handleSearch }: { handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div className="relative mw-[127.04vh] mb-8">
      <input
        type="text"
        placeholder="Type to search..."
        onChange={handleSearch}
        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Search className="absolute left-2 top-[5px] transform -translate-y-1/2 w-2 h-2 text-gray-500" />
    </div>
  )
}

export default SearchBar