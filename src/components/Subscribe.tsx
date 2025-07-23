import { lazy } from 'react';

const Button = lazy(() => import("../components/dynamicComponents/Button.tsx"));

const Subscribe: React.FC = () => {
  return (
    <div className='w-full px-4 lg:px-20 py-4 lg:py-20'>
      <p className='text-sm sm:text-[28px] font-semibold text-primary py-6 sm:pb-16'>Subscribe For Newsletters</p>
      <div className='bg-primary flex flex-col lg:flex-row items-center justify-between rounded-lg px-3 py-3 lg:py-12'>
        <div className='w-full text-white'>
          <h3 className="text-sm lg:text-[28px] font-medium">Stay in the loop</h3>
          <p className='my-5 text-xs lg:text-lg font-normal'>Subscribe to receive the latest news and updates about<span className="hidden lg:inline"><br /></span> Makeover. We promise not to spam you! </p>
        </div>
        <div className="relative w-full lg:max-w-sm flex lg:pr-6 pt-6 sm:pt-0">
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full rounded-lg border border-gray-300 py-3 pl-4 pr-28 text-xs sm:text-sm focus:outline-none font-normal"
          />

          <Button
            name="Subscribe"
            className="absolute right-1 lg:right-8 top-11 sm:top-1/2 -translate-y-1/2 rounded-lg px-5 py-2 text-xs font-medium text-white active:scale-95 transition"
          />
        </div>
      </div>
    </div>
  )
}

export default Subscribe;