import { updateData } from "../lib/updateData.ts"

const Update = () => {
    return (
        <div className="flex pt-[80px] gap-[80px] mb-[200px]">
            <div className='w-[738px]'>
                <p className='text-xl text-primary font-medium pt-[123px] leading-[48px]'>{updateData.title}</p>
                <p className='text-[40px] leading-[72px]'>{updateData.subTitle}</p>
                <p className='text-lg leading-7'>{updateData.description}</p>
            </div>
            <div className='w-[522px] flex relative'>
                {Object.values(updateData.images).map((img, index) => (
                    <img key={index} src={img} alt={`mobile-${index}`} className={`absolute w-[260px] md:w-[280px] transition-all
                        ${index === 1 ? "top-0 left-[10%] z-10" : "top-0 left-[35%] z-20"}`} loading="lazy" />
                ))}
            </div>
        </div>
    )
}

export default Update