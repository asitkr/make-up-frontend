import img1 from "../assets/customer-testimony/img1.webp";
import img2 from "../assets/customer-testimony/img2.webp";
import img3 from "../assets/customer-testimony/img3.webp";
import img4 from "../assets/customer-testimony/img4.webp";
import img5 from "../assets/customer-testimony/img5.webp";
import img6 from "../assets/customer-testimony/img6.webp";
import img7 from "../assets/customer-testimony/img7.webp";

const imagesarr = [img1, img2, img3, img4, img5, img6, img7];

const CustomerTestimony: React.FC = () => {
    return (
        <div className="w-full px-0 lg:px-20 py-0 lg:py-[60px] bg-gradient-to-t from-white to-[#fdf2f6]">
            <div className="w-full">
                <div className=" bg-[#3B486E] md:pt-[30px] pb-4 lg:pl-[60px] md:pb-[62.75px]  ">
                    <div className="grid grid-cols-1 md:grid md:grid-cols-12 md:gap-10 ">
                        <div className=" md:col-span-6">
                            <div className="p-4 flex flex-col md:px-5 md:py-0">
                                <span className="text-[#E2B6C1] text-sm sm:text-xl font-semibold">
                                    What Our Customers Say
                                </span>
                                <span className="pt-6 sm:pt-2 text-white text-xs sm:text-lg font-normal">
                                    "I loved how professional and well-prepared the beautician
                                    was—felt like a salon at home!" says one of our happy
                                    clients. Another shares, "Makeover is my go-to for last-
                                    minute grooming; always on time, clean, and super
                                    relaxing." Many customers rave about the convenience: "I
                                    booked a facial during my lunch break and came out
                                    glowing—without stepping out!" Whether it's bridal
                                    services, waxing, or a simple manicure, the feedback is
                                    unanimous: Makeover makes self-care seamless, luxurious,
                                    and dependable.
                                </span>
                            </div>
                        </div>
                        {/* right column */}
                        <div className="px-4 sm:px-0 sm:overflow-hidden md:col-span-6 flex items-center">
                            <div className="scroll-container md:mt-2">
                                <div className="scroll-wrapper divide-x divide-[#FFFFFF]/60">
                                    {[...imagesarr, ...imagesarr].map((image, index) => (
                                        <div className="scroll-item" key={index}>
                                            <img
                                                src={image}
                                                alt={`img-${index}`}
                                                className="mx-2 sm:h-[175px]" loading="lazy"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerTestimony;