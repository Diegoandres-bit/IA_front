import React, { useState } from "react";

type Tab = {
  label: string;
  onClick?: () => void;
};

interface TabsBarProps {
  tabs: Tab[];
  defaultActive?: number;
}

const TabsBar: React.FC<TabsBarProps> = ({ tabs, defaultActive = 0 }) => {
  const [active, setActive] = useState(defaultActive);

  return (
    <div className="w-full border-b border-gray-200 bg-white">
      <div className="flex justify-start space-x-8 px-6">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            onClick={() => {
              setActive(index);
              tab.onClick?.();
            }}
            className={`relative py-3 text-sm font-medium transition-colors duration-200 ${
              active === index
                ? "text-blue-600"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            {tab.label}
            {active === index && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 rounded-full" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabsBar;
