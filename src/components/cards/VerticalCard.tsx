import type { ServiceCardProps } from "../../types/card.ts";

const VerticalCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  description,
  price,
  areas,
  onBook,
  id
}) => {
  return (
    <div
      className="p-2 flex md:flex-col gap-2 md:gap-6 md:w-[304px] md:h-[392px] bg-[#F8F8F8]
        rounded-xl shadow-[0_0_8px_0_rgba(0,0,0,0.05)] hover:shadow-[0_0_12px_0_rgba(0,0,0,0.08)]
        transition-shadow duration-300 items-center justify-center md:p-6 mt-3"
      key={id}
    >
      {/* left column – image */}
      <div className=" w-[80px] h-[80px] md:w-[256px] md:h-[173px] ">
        <img
          src={image}
          alt={title}
          className="object-cover  w-full h-full rounded-xl"
          loading="lazy"
        />
      </div>

      {/* right column – content */}
      <div className="flex flex-col justify-between gap-1 md:gap-2 grow">
        <div>
          <h3 className="text-[14px] font-semibold md:text-lg text-gray-900">{title}</h3>
          <p className="text-[10px] md:text-sm text-gray-600 leading-snug line-clamp-3">
            {description}
          </p>
          <div className="md:mt-1 flex justify-between items-center">
            <p className="text-[12px] md:text-sm text-gray-800 font-semibold">
              Price Estimate: {price}
            </p>
            <p className="text-[10px] font-semibold">{areas}</p>
          </div>
        </div>

        <button
          onClick={onBook}
          className="w-full px-2 py-1 md:px-4 md:py-1.5 bg-primary hover:bg-rose-700 
            text-white text-sm font-semibold rounded-md transition-colors duration-200 focus:outline-none focus:ring-2"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default VerticalCard;
