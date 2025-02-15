import { useState } from "react";
import AssetCard from "./assetCard";
import { Asset, Series } from "@/constants/constant";
import SearchBar from "./searchBar";
import Tabs from "./tab";
import Modal from "./modal";
import FeaturedContent from "./featuredContent";
import TrendingContent from "./trendingContent";
import LayoutList from "./layoutList";
import KpiList from "./kpiList";
import Chart from "./chart";
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
}:{
  isModalOpen: boolean,
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const assets: Asset[] = [
    { id: 1,  name: "Revenue Growth", description: "Tracks revenue increase over time." },
    { id: 2,  name: "Sales Dashboard", description: "Displays KPIs for sales performance." },
    { id: 3,  name: "Quarterly Review", description: "Presentation of quarterly performance." }
  ];

  const handleKpiClick = (data:any) => {
    console.log('index', data);
    setIsModalOpen(true);
    setModalData(data);
  }
  
  const tabs = [
    { id: "featured", label: "Featured", content: <FeaturedContent /> },
    { id: "kpi", label: "KPI", content: <KpiList handleClick={(data) => handleKpiClick(data)} /> },
    { id: "charts", label: "Layouts", content: <LayoutList handleClick={(data) => handleKpiClick(data)}/> },
    { id: "storyboards", label: "Storyboards", content: <div>Request access...</div> },
  ];

  const [search, setSearch] = useState<string>("");
  const [filteredAssets, setFilteredAssets] = useState<Asset[]>(assets);
  const [currentModal, setCurrentModal] = useState('');
  const [modalData, setModalData] = useState<any>([]);  
  
  const renderModal = () => {
    switch (currentModal) {
      case 'kpi':
        return <></>
      case 'charts':
        return <Chart data={modalData}/>
      default:
        break;
    }
  }

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
        <Tabs tabs={tabs} setCurrentModal={setCurrentModal}/>
      </div>
      <TrendingContent/>
      <Modal isOpen={isModalOpen} buttonName={'Favourite Item'} onClose={() => setIsModalOpen(false)} title="Request Access">
        {renderModal()}
      </Modal>
    </main>
  );
}
