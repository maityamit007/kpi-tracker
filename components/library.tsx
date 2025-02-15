import { useState } from "react";
import AssetCard from "./assetCard";
import { Asset, Series } from "@/constants/constant";
import SearchBar from "./searchBar";
import Tabs from "./tab";
import Modal from "./modal";
import Chart from "./chart";
import Kpi from "./kpi";
import List from "./list";
const sampleData: Series[] = [
  {
    name: "Series 1",
    data: [
      { x: 1, y: 10 },
      { x: 2, y: 15 },
      { x: 3, y: 7 },
    ],
  },
];



export default function Library({
  isModalOpen,
  setIsModalOpen
}: {
  isModalOpen: boolean,
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const assets: Asset[] = [
    { id: 1, name: "Revenue Growth", description: "Tracks revenue increase over time." },
    { id: 2, name: "Sales Dashboard", description: "Displays KPIs for sales performance." },
    { id: 3, name: "Quarterly Review", description: "Presentation of quarterly performance." }
  ];

  const handleKpiClick = (data: any, type: string) => {
    setIsModalOpen(true);
    setModalData(data);
    setCurrentModal(type)
  }

  const tabs = [
    { id: "featured", label: "Featured", content: <List title="Featured" desc="Curated picks from the week" handleClick={(data) => handleKpiClick(data, 'featured')} /> },
    { id: "kpi", label: "KPI", content: <List handleClick={(data) => handleKpiClick(data, 'kpi')} /> },
    { id: "charts", label: "Layouts", content: <List id="layout" handleClick={(data) => handleKpiClick(data, 'charts')} /> },
    { id: "storyboards", label: "Storyboards", content: <List handleClick={(data) => handleKpiClick(data, 'storyboards')} /> },
  ];

  const [search, setSearch] = useState<string>("");
  const [filteredAssets, setFilteredAssets] = useState<Asset[]>(assets);
  const [currentModal, setCurrentModal] = useState('featured');
  const [modalData, setModalData] = useState<any>([]);

  const renderModal = () => {
    switch (currentModal) {
      case 'kpi':
      case 'featured':
      case 'trending':
        return <Kpi data={modalData} />
      case 'charts':
        return <Chart data={modalData} />
      default: return <Kpi data={modalData || []} />
    }
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      <SearchBar handleSearch={handleSearch} />
      <div className="flex flex-col flex-1 gap-4">
        <Tabs tabs={tabs} setCurrentModal={setCurrentModal} />
      </div>
      <List title="Trending" desc="Popular By Community" handleClick={(data) => { handleKpiClick(data, 'trending') }} />
      <Modal isOpen={isModalOpen} buttonName={'Favourite Item'} onClose={() => setIsModalOpen(false)} title="Request Access">
        {renderModal()}
      </Modal>
    </main>
  );
}
