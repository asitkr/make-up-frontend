import { lazy } from "react";
import { Link } from "react-router-dom";
import { currentYear } from "../utils.ts";
import SuccessLadyImage from "../assets/payments/success-lady.gif";

const Button = lazy(() => import("../components/dynamicComponents/Button.tsx"));

const SuccessPage = () => {
    return (
        <div className="w-full min-h-screen flex items-center justify-center">
            <div className="flex flex-col px-4 sm:px-0">
                <p className="text-center text-base sm:text-4xl text-black font-semibold">Thanks For Booking With Makeover <span className="text-lg sm:text-4xl">👋</span></p>
                <div className="w-full flex justify-center py-9 sm:py-10">
                    <img src={SuccessLadyImage} alt="success" className="w-20 h-20 sm:w-0 sm:h-0" />
                </div>

                <div className="w-full flex flex-col items-center justify-center text-xs sm:text-base text-black font-medium sm:font-semibold leading-6">
                    <p className="w-full sm:w-[90%] text-center">Your booking is successful placed for selected services on 18th July, 03:30 PM.</p>
                    <p className="w-full sm:w-[90%] text-center">You can pay ₹ 3996.00 now or after the service is complete</p>
                </div>

                <div className="w-full sm:w-[320px] mx-auto flex flex-col justify-center py-10 sm:py-12 gap-6 px-3 sm:px-0">
                    <Link to={"/"} className="bg-transparent !text-primary rounded-xl py-4 border border-primary text-center text-sm sm:text-xl">Continue Browsing</Link>
                    <Button name="Pay ₹ 3996 Now" className="py-4 text-center rounded-xl text-sm sm:text-xl font-normal" />
                </div>

                <p className="text-center font-normal text-base sm:text-lg">View booking details here<Link to={""} className="font-semibold text-primary">&nbsp;Booking Details</Link></p>

                <p className="pt-12 pb-6 w-full flex justify-center text-allRightsReserve text-[10px] sm:text-base font-normal">
                    &#169; MAKEOVER {currentYear} ALL RIGHTS RESERVED
                </p>
            </div>
        </div>
    )
}

export default SuccessPage;