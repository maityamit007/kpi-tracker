import { useState } from "react";
import AssetCard from "./assetCard";
import { Asset } from "@/constants/constant";



const assets: Asset[] = [
  { id: 1, type: "KPI", name: "Revenue Growth", description: "Tracks revenue increase over time." },
  { id: 2, type: "Layout", name: "Sales Dashboard", description: "Displays KPIs for sales performance." },
  { id: 3, type: "Storyboard", name: "Quarterly Review", description: "Presentation of quarterly performance." }
];

let Search = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <svg width="33" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="path-1-inside-1_4751_6299" fill="">
          <path d="M0 0H42C45.3137 0 48 2.68629 48 6V42C48 45.3137 45.3137 48 42 48H0V0Z" />
        </mask>
        <path d="M0 0H42C45.3137 0 48 2.68629 48 6V42C48 45.3137 45.3137 48 42 48H0V0Z" fill="#F9F9F9" />
        <path d="M0 0H48H0ZM48 48H0H48ZM-1 48V0H1V48H-1ZM48 0V48V0Z" fill="#E1E3EA" mask="url(#path-1-inside-1_4751_6299)" />
        <path d="M33 33L29.5104 29.5104M29.5104 29.5104C31.0486 27.9722 32 25.8472 32 23.5C32 18.8056 28.1944 15 23.5 15C18.8056 15 15 18.8056 15 23.5C15 28.1944 18.8056 32 23.5 32C25.8472 32 27.9722 31.0486 29.5104 29.5104Z" stroke="#7E8299" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  )
}

export default function Library() {
  const [search, setSearch] = useState<string>("");
  const [filteredAssets, setFilteredAssets] = useState<Asset[]>(assets);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setFilteredAssets(
      assets.filter((asset) =>
        asset.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <main className="flex-grow p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center">Library</h1>
      <p className=" mb-8 text-center">Browse for assests needed to report and present analysis.</p>
      <div className="relative w-full mb-8">
      <input
        type="text"
        placeholder="Type to search..."
        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Search className="absolute left-2 top-[5px] transform -translate-y-1/2 w-2 h-2 text-gray-500" />
    </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredAssets.map((asset) => (
          <AssetCard key={asset.id} asset={asset} />
        ))}
      </div>
    </main>
  );
}
