import { useState } from "react";
import AssetCard from "./assetCard";
import { Asset } from "@/constants/constant";
import SearchBar from "./searchBar";
import Tabs from "./tab";
import Modal from "./modal";
import FeaturedContent from "./featuredContent";
import TrendingContent from "./trendingContent";



const assets: Asset[] = [
  { id: 1, type: "KPI", name: "Revenue Growth", description: "Tracks revenue increase over time." },
  { id: 2, type: "Layout", name: "Sales Dashboard", description: "Displays KPIs for sales performance." },
  { id: 3, type: "Storyboard", name: "Quarterly Review", description: "Presentation of quarterly performance." }
];

const tabs = [
  { id: "featured", label: "Featured", content: <FeaturedContent/> },
  { id: "kpi", label: "KPI", content: <div>All KPI metrics here...</div> },
  { id: "charts", label: "Layouts", content: <div>Select chart types...</div> },
  { id: "storyboards", label: "Storyboards", content: <div>Request access...</div> },
];

export default function Library({
  isModalOpen,
  setIsModalOpen
}:{
  isModalOpen: boolean,
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [search, setSearch] = useState<string>("");
  const [filteredAssets, setFilteredAssets] = useState<Asset[]>(assets);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>)=> {
    setSearch(e.target.value);
    setFilteredAssets(
      assets.filter((asset) =>
        asset.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <main className="flex-grow p-6 mt-4 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center">Library</h1>
      <p className=" mb-8 text-center">Browse for assests needed to report and present analysis.</p>
      <SearchBar handleSearch={handleSearch}/>
      <div className="flex flex-col flex-1 gap-4">
        <Tabs tabs={tabs}/>
      </div>
      <TrendingContent/>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Example Modal">
        This is some modal content. You can copy this!
      </Modal>
    </main>
  );
}
