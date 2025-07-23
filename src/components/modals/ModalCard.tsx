import { useEffect } from "react";
import UnderlineTabs from "./Tabs.tsx";
import type { ModalCardProps } from "../../types/modal.ts";
import { modalCardMap } from "../../lib/modalCardMap.ts";

export default function ModalCard({ cardDetails, onClose }: ModalCardProps) {
  const modalConfig = modalCardMap[cardDetails.key];

  const { data = [], Component, type } = modalConfig || {};

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleTabChange = (tabId: string | number) => {
    console.log("Tab changed to:", tabId);
  };

  const hasTabs = data?.some((item: { tabName?: string }) => Boolean(item.tabName));

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center md:p-4">
      <div className="bg-[#FAF2F4] rounded-xl sm-w-full w-auto max-h-[612px] overflow-y-auto relative p-2 md:p-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-black hover:text-primary text-xl"
        >
          ×
        </button>

        {/* Title */}
        <h2 className="text-[16px] md:text-2xl font-semibold text-center mb-4 text-primary">
          {cardDetails.title}
        </h2>

        {/* Tabs or Default Grid */}
        {hasTabs ? (
          <UnderlineTabs
            data={data}
            className="w-full"
            Component={Component}
            onTabChange={handleTabChange}
          />
        ) : (
          <div
            className={`${
              type === "vertical" ? "md:flex gap-9" : "grid grid-cols-1 md:grid-cols-2"
            } mt-6 bg-[#FAF2F4]`}
          >
            {data.map((item: Record<string, unknown>, index: number) => (
              <div key={index}>
                <Component {...item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
