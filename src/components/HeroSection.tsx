import { lazy, useState } from "react";
import LandingImage from "../assets/Landing.webp";
import { heroSectionCardData } from "../lib/heroSectionData";

const Card = lazy(() => import("./cards/Card.tsx"));
const ModalCard = lazy(() => import("./modals/ModalCard.tsx"));

const HeroSection: React.FC = () => {
    const [openModal,setOpenModal]=useState(false);
    const [cardDetails,setCardDetails]=useState({title:"",key:""})
    return (
       <>
       {openModal&&<ModalCard cardDetails={cardDetails} onClose={()=>setOpenModal(false) }/>} 
       <div className="w-full lg:min-h-screen lg:h-[750px] bg-bgHero">
            <div className="w-full h-full flex flex-col lg:flex-row item center">
                <div className="w-full lg:w-[55%] h-[300px] sm:h-[400px] lg:h-full">
                    <img
                        src={LandingImage}
                        alt="Makeover Banner"
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>

                <div className="w-full lg:w-[45%] p-4 lg:px-[35px]">
                    <h2 className="w-full text-primary lg:pt-15 font-semibold text-sm lg:text-4xl">
                        Professional Makeup & <span className="hidden lg:inline"><br /></span> Grooming at your Doorstep!
                    </h2>

                    <p className="font-normal text-textBlack100 text-xs lg:text-lg lg:leading-7 pt-2">We bring professional makeup and grooming essential services to you at a very friendly price</p>

                    <div className="w-full mt-4 lg:mt-9 flex flex-wrap justify-center lg:justify-normal gap-4 sm:gap-6 md:gap-8 lg:gap-9">
                        {
                            heroSectionCardData?.map((item) => (
                                <div
                                    key={item?.id}
                                    className="flex"
                                >
                                    <Card pic={item?.image} text={item?.title} className="px-0 cursor-pointer" onClick={()=>{
                                        setOpenModal(true)
                                        setCardDetails({title:item?.title,key:item?.accessorKey})}}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div></>
    )
}

export default HeroSection;