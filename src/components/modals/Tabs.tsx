// import { useEffect, useState } from 'react';
// import type { UnderlineTabsProps } from '../../types/tabs.ts';

// const UnderlineTabs: React.FC<UnderlineTabsProps> = ({
//   data,
//   defaultActiveTab = null,
//   onTabChange,
//   className = "w-full max-w-md mx-auto p-6 bg-[#FAF2F4]",
//   Component
// }) => {
//   const tabs = data.map((item: any, index = 0) => ({ label: item.tabName, id: index + 1 }));
//   console.log({ tabs })
//   const [activeTab, setActiveTab] = useState(defaultActiveTab || (tabs.length > 0 ? tabs[0].id : null));
//   const [activeTabData, setActiveTabData] = useState([])
//   console.log({ activeTab })
//   useEffect(() => {
//     if (activeTab) {
//       const currTabName = tabs.find((tab: any) => tab.id == activeTab).label
//       const tabData = data.find((item: any) => item.tabName === currTabName);
//       console.log({ tabData })
//       setActiveTabData(tabData.cardData)
//     }
//   }, [activeTab])


//   const handleTabClick = (tabId: any) => {
//     setActiveTab(tabId);
//     if (onTabChange) {
//       onTabChange(tabId);
//     }
//   };
//   console.log({ Component })


//   return (
//     <div className={className}>
//       <div className="w-full">
//         <div className="flex w-full border-b border-gray-100 justify-end">
//           {tabs.map((tab: any) => (
//             <div
//               key={tab.id}
//               onClick={() => handleTabClick(tab.id)}
//               className={`
//                 cursor-pointer
//                 text-[14px]
//                 md:text-[20px]
//                 hover:text-primary
//                 border-b-2 
//                 border-transparent 
//                 pb-3 
//                 px-4 
//                 font-medium 
//                 transition-all 
//                 duration-200
//                 ${tab.icon ? 'flex items-center gap-1' : ''}
//                 ${activeTab === tab.id ? 'text-primary' : 'text-red-300'}
//               `}
//             >
//               {tab.label}
//               <hr
//                 className={`w-full h-[2px] mt-1 rounded border-none transition-all duration-300 hover:bg-primary ${activeTab === tab.id ? 'bg-primary' : 'bg-red-300'
//                   }`}
//               />

//             </div>
//           ))}
//         </div>

//         {activeTabData && (
//           <div className="mt-6 grid grid-cols-1 md:grid-cols-2">
//             {activeTabData.map((item: any) => {
//               console.log(item)
//               return <div key={item.tabName}><Component  {...item} /></div>
//             })}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default UnderlineTabs;

import { useEffect, useState } from 'react';
import type { UnderlineTabsProps } from '../../types/tabs.ts';

const UnderlineTabs: React.FC<UnderlineTabsProps> = ({
  data,
  defaultActiveTab = null,
  onTabChange,
  className = "w-full max-w-md mx-auto p-6 bg-[#FAF2F4]",
  Component,
}) => {
  const tabs = data.map((item, index) => ({
    label: item.tabName,
    id: index + 1,
  }));

  const [activeTab, setActiveTab] = useState(
    defaultActiveTab || (tabs.length > 0 ? tabs[0].id : null)
  );
  const [activeTabData, setActiveTabData] = useState<any[]>([]);

  useEffect(() => {
    if (activeTab) {
      const currentTab = tabs.find(tab => tab.id === activeTab);
      const tabData = data.find(item => item.tabName === currentTab?.label);
      if (tabData) {
        setActiveTabData(tabData.cardData || []);
      }
    }
  }, [activeTab, data, tabs]);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  return (
    <div className={className}>
      <div className="w-full">
        <div className="flex w-full border-b border-gray-100 justify-end">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`
                cursor-pointer
                text-[14px]
                md:text-[20px]
                hover:text-primary
                border-b-2 
                border-transparent 
                pb-3 
                px-4 
                font-medium 
                transition-all 
                duration-200
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
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeTabData.map((item, idx) => (
              <div key={idx}>
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

