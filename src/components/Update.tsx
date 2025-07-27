import { updateData } from "../lib/updateData.ts"
import UpdateImage from "../assets/update.png";

const Update = () => {
    return (
        <div className="w-full flex flex-col lg:flex-row px-4 lg:px-20 py-6 lg:py-20 gap-6 lg:gap-20 items-center">
            <div className='w-full lg:w-2/3'>
                <p className='text-sm lg:text-xl text-primary font-medium leading-7'>{updateData.title}</p>
                <p className='pt-3 text-xl lg:text-[40px] text-textBlack200 font-normal leading-tight xl:leading-[72px]'>
                    {updateData.subTitle}
                </p>
                <p className='pt-3 lg:pt-6 text-xs lg:text-base md:text-lg lg:leading-7 text-black font-normal'>
                    {updateData.description}
                </p>
            </div>

            <div className='w-full lg:w-1/3 flex justify-center relative max-h-[400px] md:max-h-[500px]'>
                <img src={UpdateImage} alt="update" className="w-[350px] lg:w-[500px] h-full" />
            </div>
        </div>
    )
}

export default Update;
