"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
const TabbedNavigation = ({ tabs, defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="max-w-3xl mx-auto w-fit containerx">
      <div className="flex gap-4 border rounded-md justify-center">
        {tabs.map((tab) => (
          <Button
            key={tab}
            className={`py-2 px-4 text-gray-700 focus:outline-none my-1 bg-transparent hover:bg-transparent font-bold ${activeTab === tab ? "bg-main_blue hover:bg-main_blue text-white" : ""}`}
            onClick={() => handleTabChange(tab)}
          >
            {tab}
          </Button>
        ))}
      </div>
      {/* show related content here */}
      {/* <div className="mt-4">
        {activeTab === "popular" && <p>Show popular phones and PCs here.</p>}
        {activeTab === "new" && <p>Show new phones and PCs here.</p>}
        {activeTab === "old" && <p>Show old phones and PCs here.</p>}
      </div> */}
    </div>
  );
};

export default TabbedNavigation;
