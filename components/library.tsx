import { useCallback, useState } from "react";
import { Asset } from "@/constants/constant";
import SearchBar from "./searchBar";
import Tabs from "./tab";
import Modal from "./modal";
import Chart from "./chart";
import Kpi from "./kpi";
import List from "./list";
import Storyboard from "./storyboard";
import { kpiData, storyBoardData } from "@/constants/asset";

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
  const [filteredAssets, setFilteredAssets] = useState<Asset[]>([]);
  const [modalData, setModalData] = useState<any>([]);

  const renderModal = useCallback(() => {
    switch (currentModal) {
      case 'kpi':
      case 'featured':
      case 'trending':
        return <Kpi data={modalData} />
      case 'charts':
        return <Chart data={modalData} />
      case 'storyboards':
        return <Storyboard modalData={modalData[0]?.modalData} chartData={modalData[0]?.chartData} />
      case 'request':
        return <Storyboard modalData={storyBoardData[0]?.modalData} chartData={storyBoardData[0]?.chartData} />
      default: return <>Request Access</>
    }
  }, [modalData, currentModal]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm);

    if (searchTerm === "") {
      setFilteredAssets([]);
      return;
    }

    const filtered = kpiData.filter(asset =>
      asset.name.toLowerCase().includes(searchTerm)
    );

    setFilteredAssets(filtered);
  };

  console.log('filteredAssets', filteredAssets);

  const clearSearch = () => {
    setSearch("");
    handleSearch({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <main className="flex-grow p-6 mt-4 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center">Library</h1>
      <p className="mb-8 text-center">Browse for assets needed to report and present analysis.</p>
      <SearchBar handleSearch={handleSearch} searchedTerm={search} clearSearch={clearSearch}/>

      {search ? (
        <div>
          {filteredAssets.length > 0 ? (
            <List title="Search Results" id="search" desc="Matching assets" data={filteredAssets} handleClick={(data) => handleKpiClick(data, 'kpi')} />
          ) : (
            <p className="text-center text-gray-500">Not seeing what you're looking for? Try searching again.</p>
          )}
        </div>
      ) : (
        <>
          <div className="flex flex-col flex-1 gap-4">
            <Tabs tabs={tabs} setCurrentModal={setCurrentModal} />
          </div>
          <List title="Trending" desc="Popular By Community" handleClick={(data) => { handleKpiClick(data, 'trending') }} />
        </>
      )}

      <Modal isOpen={isModalOpen} currentModal={currentModal} buttonName={['storyboards', 'request'].includes(currentModal) ? 'Request Access' : 'Favourite Item'} onClose={() => setIsModalOpen(false)} title="Assets">
        {renderModal()}
      </Modal>
    </main>
  );
}
