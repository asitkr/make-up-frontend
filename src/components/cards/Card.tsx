import type { CardProps } from "../../types/card.ts";

const Card: React.FC<CardProps> = ({ pic, text, className, onClick }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-white rounded-lg shadow-md px-4 py-3 w-[160px] text-center hover:shadow-lg transition ${className}`}
      onClick={onClick}
    >
      <img
        src={pic}
        alt={text}
        className="w-9 h-9 lg:w-20 lg:h-20 object-contain"
        loading="lazy"
      />
      <p className="w-full text-center text-sm lg:text-lg text-black font-semibold px-0 lg:px-3 pt-[10px]">
        {text}
      </p>
    </div>
  );
};

export default Card;