import { useCallback, useState } from "react";
import { Asset } from "@/constants/constant";
import SearchBar from "./searchBar";
import Tabs from "./tab";
import Modal from "./modal";
import Chart from "./chart";
import Kpi from "./kpi";
import List from "./list";
import Storyboard from "./storyboard";

export default function Library({
  isModalOpen,
  setIsModalOpen,
  currentModal,
  setCurrentModal
}: {
  isModalOpen: boolean,
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
  currentModal: string,
  setCurrentModal: React.Dispatch<React.SetStateAction<string>>
}) {

  const handleKpiClick = (data: any, type: string) => {
    console.log('data', data);
    setIsModalOpen(true);
    setModalData(data);
    setCurrentModal(type)
  }

  const tabs = [
    { id: "featured", label: "Featured", content: <List title="Featured" desc="Curated picks from the week" handleClick={(data) => handleKpiClick(data, 'featured')} /> },
    { id: "kpi", label: "KPI", content: <List handleClick={(data) => handleKpiClick(data, 'kpi')} /> },
    { id: "charts", label: "Layouts", content: <List id="layout" handleClick={(data) => handleKpiClick(data, 'charts')} /> },
    { id: "storyboards", label: "Storyboards", content: <List id="story" handleClick={(data) => handleKpiClick(data, 'storyboards')} /> },
  ];

  const [search, setSearch] = useState<string>("");
  const [filteredAssets, setFilteredAssets] = useState<Asset[]>();
  const [modalData, setModalData] = useState<any>([]);

  const renderModal = useCallback(() => {
    console.log(modalData)
    switch (currentModal) {
      case 'kpi':
      case 'featured':
      case 'trending':
        return <Kpi data={modalData} />
      case 'charts':
        return <Chart data={modalData} />
      case 'storyboards':
        return <Storyboard modalData={modalData[0]?.modalData} chartData={modalData[0]?.chartData}/> 
        default: return <>Request Access</>
    }
  }, [modalData, currentModal])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    // setFilteredAssets(
    //   assets.filter((asset) =>
    //     asset.name.toLowerCase().includes(e.target.value.toLowerCase())
    //   )
    // );
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
      <Modal isOpen={isModalOpen} buttonName={'Favourite Item'} onClose={() => setIsModalOpen(false)} title="Assets">
        {renderModal()}
      </Modal>
    </main>
  );
}
