import { MinusIcon, PlusIcon } from "@heroicons/react/16/solid";

import type { OrderComponentProps } from "../../types/card";

const OrderComponent: React.FC<OrderComponentProps> = ({ cartItems }) => {
    const total = cartItems.reduce((acc, item) => acc + item.subTotal, 0);

    return (
        <div className="w-full flex flex-col">
            <div className="w-full flex items-center gap-5 border-b border-[#6C7275] text-xs lg:text-base font-semibold text-textBlack300 pb-4 shadow-[0_4px_4px_-2px_rgba(0,0,0,0.1)]">
                <p className="w-[40%] lg:w-[50%]">Service</p>
                <p className="w-[20%] lg:w-[15%] flex justify-center">Quantity</p>
                <p className="w-[20%] lg:w-[15%] flex justify-end">Price</p>
                <p className="w-[20%] lg:w-[20%] flex justify-end">Subtotal</p>
            </div>

            {cartItems && cartItems?.map((item, index) => (
                <div key={index} className="w-full py-3">
                    <div className="w-full flex items-center py-6 gap-6 lg:gap-5">
                        <div className="w-[40%] lg:w-[50%] p-2 lg:py-4 lg:px-6 bg-bgHero rounded-xl flex items-center shadow-[0px_1px_4px_rgba(12,12,13,0.05)] gap-3 lg:gap-[18px]">
                            <div className="w-20 h-14 hidden lg:block">
                                <img src={item?.image} alt="cartImage" className="w-full h-full rounded-xl object-cover" />
                            </div>
                            <div className="w-full flex flex-col justify-end">
                                <p className="mb-[6px] text-primary font-semibold text-[10px] lg:text-xs">{item?.category}</p>
                                <hr className="border-[0.5px] border-[rgba(220,220,220,1)]" />
                                <p className="mt-[6px] text-xs lg:text-sm font-semibold lg:w-40 text-wrap break-words">{item?.service}</p>
                            </div>
                        </div>

                        <div className="w-[20%] lg:w-[15%] flex justify-center items-center">
                            <div className="border flex items-center mx-auto border-[#6C7275] px-2 py-[6px] gap-1 lg:gap-4 rounded">
                                <MinusIcon className="w-4 h-4" />
                                <p className="text-xs leading-5 font-semibold">{item?.quantity}</p>
                                <PlusIcon className="w-4 h-4" />
                            </div>
                        </div>

                        <div className="w-[20%] lg:w-[15%] flex justify-end">
                            <p className="text-xs lg:text-lg leading-7 font-normal">&#8377; {item?.price}</p>
                        </div>

                        <div className="w-[20%] lg:w-[20%] flex justify-end">
                            <p className="text-xs lg:text-lg leading-7 font-bold">&#8377; {item?.subTotal}</p>
                        </div>
                    </div>

                    <hr className="border border-[rgba(232,236,239,1)]" />
                </div>
            ))}

            <div className="w-full flex justify-between items-center py-6 lg:pl-6 font-bold text-base lg:text-2xl text-black">
                <p>Total Amount:</p>
                <p>&#8377; {total.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default OrderComponent;
