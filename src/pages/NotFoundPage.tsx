import { lazy } from "react";
import PageNotFoundImage from "../assets/gif/page-not-found.gif";

const Button = lazy(() => import("../components/dynamicComponents/Button.tsx"));

const PageNotFound = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <div>
                <img src={PageNotFoundImage} alt="page not found" className="w-full sm:w-96 h-60 sm:h-96"  loading="lazy"/>
            </div>

            <p className="px-4 sm:px-0 py-6 text-base sm:text-2xl font-normal text-lightText">Page Not Found! It's Not You It's Us.</p>
            <Button name="Back to Homepage" className="bg-transparent !text-primary text-lg sm:text-2xl font-bold hover:opacity-80" link="/" />
        </div>
    )
}

export default PageNotFound;