import { clientInfoData } from "../lib/heroSectionData.ts";

const ClientsInfo: React.FC = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center bg-bgClientHero px-4 sm:px-0">
            <p className="font-medium text-xs sm:text-xl leading-8 text-primary pt-6 sm:pt-20">Makeover Professionals Use</p>

            <div className="py-7 sm:pt-14 sm:pb-20 w-full flex items-center justify-center gap-3 sm:gap-8">
                {
                    clientInfoData && clientInfoData?.map(item => (
                        <div key={item?.id}>
                            <img src={item?.image} alt={item?.image} className="w-12 lg:w-28"  loading="lazy" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ClientsInfo;