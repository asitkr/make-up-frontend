import { heroStatData } from "../lib/heroSectionData"

const HeroAbout: React.FC = () => {
  return (
    <div className="w-full bg-bgHero rounded-tl-[60px] ">
        <div className="bg-bgHeroAbout w-full pt-4 pb-6 lg:py-20 px-4 lg:px-20 bg-gradient-to-b from-white to-[#fdf2f6] rounded-xl lg:rounded-[60px]">
        <div className="w-full text-textBlack200">
            <p className="font-normal text-4xl hidden lg:block">
                <span className="italic text-primary font-bold">Free 10 mins face massage</span> on every booking for our loving customers on order above ₹1499. <span className="italic text-primary font-normal">Free Eyebrow threading on all facial bookings!</span>
            </p>
            <p className="block lg:hidden text-primary text-sm font-medium">Our Milestones</p>

            <div className="w-full pt-4 sm:pt-[60px] flex items-center">
                {
                    heroStatData && heroStatData?.map(item => (
                        <div key={item?.id} className="w-full flex flex-col border-l pl-1 lg:pl-5 h-full">
                            <p className="text-secondary font-medium text-xl lg:text-7xl lg:leading-[72px]">{item?.count}</p>
                            <p className="pt-1 lg:pt-4 text-sm lg:text-lg lg:leading-8 font-normal text-textBlack200">{item?.label}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
    </div>
  )
}

export default HeroAbout