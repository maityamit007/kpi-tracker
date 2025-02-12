import { useState } from "react";

type Tab = {
  id: string;
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
};

export default function Tabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flex flex-col mw-0 w-full ">
      <div className="flex w-full bg-gray-300 justify-between rounded-lg p-[5px] h-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`w-[170px] py-2 px-4 text-gray-400 font-medium flex items-center justify-center transition ${activeTab === tab.id
              ? "text-gray-950 bg-white rounded-md"
              : "hover:text-gray-800"
              }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs.map((tab) =>
          activeTab === tab.id ? <div key={tab.id}>{tab.content}</div> : null
        )}
      </div>
    </div>
  );
}
