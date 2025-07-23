import { useEffect, useMemo, useState } from 'react';
import type { UnderlineTabsProps } from '../../types/tabs.ts';

const UnderlineTabs = <T extends object>({
  data,
  defaultActiveTab = null,
  onTabChange,
  className = 'w-full max-w-md mx-auto p-6 bg-[#FAF2F4]',
  Component,
}: UnderlineTabsProps<T>) => {
  const tabs = useMemo(
    () =>
      data.map((item, index) => ({
        label: item.tabName,
        id: index + 1,
      })),
    [data]
  );

  const [activeTab, setActiveTab] = useState<number | string | null>(
    defaultActiveTab || (tabs.length > 0 ? tabs[0].id : null)
  );
  const [activeTabData, setActiveTabData] = useState<T[]>([]);

  useEffect(() => {
    if (activeTab !== null) {
      const currentLabel = tabs.find((tab) => tab.id === activeTab)?.label;
      const tabData = data.find((item) => item.tabName === currentLabel);
      setActiveTabData(tabData?.cardData || []);
    }
  }, [activeTab, data, tabs]);

  const handleTabClick = (tabId: number | string) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  return (
    <div className={className}>
      <div className="w-full">
        <div className="flex w-full border-b border-gray-100 justify-end">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`cursor-pointer text-sm md:text-lg hover:text-primary border-b-2 border-transparent 
                pb-3 px-4 font-medium transition-all duration-200
                ${activeTab === tab.id ? 'text-primary' : 'text-red-300'}
              `}
            >
              {tab.label}
              <hr
                className={`w-full h-[2px] mt-1 rounded border-none transition-all duration-300 hover:bg-primary ${
                  activeTab === tab.id ? 'bg-primary' : 'bg-red-300'
                }`}
              />
            </div>
          ))}
        </div>

        {activeTabData && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2">
            {activeTabData.map((item, index) => (
              <div key={index}>
                <Component {...item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UnderlineTabs;
