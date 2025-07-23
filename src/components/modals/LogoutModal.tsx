import { lazy } from "react";
import LogoutGifImage from "../../assets/gif/logout.gif";

const Button = lazy(() => import("../dynamicComponents/Button"));

interface LogoutModalProps {
    onClick: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({ onClick }) => {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-52 h-52">
                <img src={LogoutGifImage} alt="logout gif" className="w-full h-full object-cover" />
            </div>

            <p className="text-primary text-base leading-6 font-normal">Are you sure, you want to log out?</p>

            <div className="w-full pt-9 flex items-center gap-4">
                <Button name="Log Out" className="w-[165px] py-[6px] !bg-transparent border border-primary !text-primary rounded" />
                <Button name="Cancel" className="w-[165px] py-[6px] rounded" onClick={onClick} />
            </div>
        </div>
    )
}

export default LogoutModal;