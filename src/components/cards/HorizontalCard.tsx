import type { HorizontalCardProps } from "../../types/card.ts";

const HorizontalCard: React.FC<HorizontalCardProps> = ({
  image,
  title,
  description,
  price,
  duration,
  buttonText,
  id
}) => {
  return (
    <div className="m-1 p-2 flex items-center gap-2 md:gap-4 md:p-4 rounded-xl shadow-md bg-white md:w-[492px] md:m-3" key={id}>
      <div className="w-20 h-20"> <img
        src={image}
        alt={title}
        className=" object-cover rounded-lg" loading="lazy"
      /></div>
      <div className="flex-1">
        <p className="text-[12px] font-semibold md:text-sm text-gray-800">{title}</p>
        <p className="text-[8px] md:text-xs text-gray-500 mb-2">{description}</p>
        <hr />
        <div className="flex items-center justify-between mt-2">
          <div className="text-xs text-gray-700">
            <span className="font-bold">{price}</span>{" "}
            {/* <span className="text-gray-500">Including Taxes</span> */}
          </div>
          <div className="text-[10px] md:text-xs text-gray-500">{duration}</div>
        </div>
      </div>
      <button className="text-[10px] bg-pink-600 text-white md:text-sm px-4 py-1 rounded-full hover:bg-pink-700 transition">
        {buttonText}
      </button>
    </div>
  );
}

export default HorizontalCard;
