import { foundersSection } from "../lib/foundersData.ts";
import founder1 from "../assets/founder/founder1.svg";
import founder2 from "../assets/founder/founder2.svg";

const founders = [founder1, founder2]

export default function FoundersComponent() {
  return (
    <div className="w-full pt-3 lg:pt-6 sm:pt-20 px-4 lg:px-20 bg-[#F3F3F3]">
      <h2 className="text-primary font-semibold text-sm sm:text-[28px]">{foundersSection?.heading}</h2>
      <p className="pt-9 font-normal text-xs sm:text-xl text-black">{foundersSection?.description}</p>
      <div className="w-full py-3 lg:py-20">
        {foundersSection?.founders?.map((founder, idx) => {
          return <div
            className='w-full flex flex-col lg:flex-row items-center pb-3 lg:pb-20 last:pb-0'
            key={idx} >
            <div className="w-full h-[230px] relative lg:h-auto overflow-hidden rounded-2xl bg-white">
              <img
                src={founders[idx]}
                alt={founder?.imageAlt}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className='lg:ml-5 py-3 lg:py-0'>
              <p className='text-sm lg:text-[22px] font-semibold'>
                {founder?.name}-{founder?.role}
              </p>
              <p className="pt-2 lg:pt-12 text-xs lg:text-[22px] font-medium leading-5 lg:leading-8">{founder?.bio}</p>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}