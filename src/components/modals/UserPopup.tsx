import { lazy } from "react";
import { XMarkIcon, ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";

import type { UserPopupProps } from "../../types/user.ts";

const Button = lazy(() => import("../dynamicComponents/Button.tsx"));

const UserPopup: React.FC<UserPopupProps> = ({ username, onLogout, onClose }) => {
  return (
    <div className="absolute top-[70px] right-20 z-50 w-64 bg-white rounded-xl shadow-lg border border-pink-100 hidden lg:block">
      <div className="flex justify-between items-center px-4 py-6 border-b border-primary">
        <p className="text-primary font-bold text-base">{username}</p>
        <XMarkIcon className="w-6 h-6 !text-black cursor-pointer" onClick={onClose} />
      </div>

      <div className="w-full border-b border-primary py-6">
        <Button
          name="Log Out"
          className="!text-primary bg-transparent !text-sm !font-semibold leading-6 flex flex-row-reverse gap-2"
          icon={<ArrowLeftStartOnRectangleIcon className="w-6 h-6" />}
          onClick={onLogout}
        />
      </div>

      <div className="px-4 text-center text-sm text-primary font-semibold py-5">
        Crafted with 💖 in India
      </div>
    </div>
  )
}

export default UserPopup;