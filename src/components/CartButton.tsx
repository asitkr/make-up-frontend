import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const CartButton: React.FC = () => {
  return (
    <div className="relative w-32 h-32 flex items-center justify-center bg-[#ffbccd] rounded-full overflow-hidden">
      {/* Ripple Effects */}
      <span className="absolute w-full max-w-28 h-full max-h-28 rounded-full bg-[#CC2B52] animate-ripple delay-[0ms]" />
      <span className="absolute w-full max-w-24 max-h-24 rounded-full bg-[#e86e8d] animate-ripple delay-[400ms]" />
      <span className="absolute w-20 h-20 rounded-full bg-[#bb7486] animate-ripple delay-[800ms]" />

      {/* Center Cart Icon */}
      <div className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center">
        <ShoppingCartIcon className="text-white w-7 h-7" />
      </div>
    </div>
  );
};

export default CartButton;
