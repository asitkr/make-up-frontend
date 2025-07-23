import { lazy, useEffect, useState } from 'react';
import aboutImg from '../assets/about/aboutus.webp';
import { aboutSection, whyChooseSection } from '../lib/aboutusData.ts';

const Layout = lazy(() => import("../components/Layout.tsx"));
const Subscribe = lazy(() => import('../components/Subscribe.tsx'));
const ContentCard = lazy(() => import("../components/cards/ContentCard.tsx"));
const FoundersComponent = lazy(() => import('../components/FoundersComponent.tsx'));

export default function AboutUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setActiveIndex((i) => (i + 1) % whyChooseSection?.cards?.length),
      1000
    );
    return () => clearInterval(t);
  }, []);

  return (
    <Layout>
      <div className='w-full bg-bgHero'>
        <div className='pt-20 gap-4 w-full px-4 lg:px-20'>
          <p className='text-primary text-sm sm:text-[32px] lg:pb-0 font-semibold '>{aboutSection?.heading}</p>
          <div className='w-full flex flex-col-reverse lg:flex-row'>
            <p className='lg:mt-8 text-xs sm:text-lg font-normal'>{aboutSection?.description}</p>
            <div className='border-4 sm:border-[12px] border-primary my-6 lg:my-0'>
              <img src={aboutImg} alt={aboutSection?.imageAlt} className='w-full h-[200px] sm:h-full object-cover' />
            </div>
          </div>
        </div>
        <div className='pt-6 sm:pt-20 px-4 lg:px-20'>
          <p className='text-primary text-sm sm:text-[32px] font-semibold'>{whyChooseSection?.heading}</p>
          <div className='w-full flex justify-center flex-col lg:flex-row my-6 sm:mt-8 sm:mb-20 gap-8'>
            {whyChooseSection?.cards?.map((card, idx) => {
              return <ContentCard 
                key={idx} 
                title={card?.title} 
                description={card?.description} 
                titleStyle={card?.titleStyle} 
                divStyle={idx == activeIndex ? "bg-white shadow-xl w-full lg:w-1/3 h-full lg:h-[254px] mr-0" : `${card?.borderClass} bg-bgHero border-2 w-full lg:w-1/3 h-full lg:h-[254px] mr-0`} 
                contentStyle={idx == activeIndex ? "font-medium mt-6 lg:mt-10 text-xs lg:text-sm" : "mt-6 lg:mt-10 font-medium text-xs lg:text-sm"}
                titleContentStyle="text-xs lg:text-sm"
              />
            })}
          </div>
        </div>
        <FoundersComponent />
        <Subscribe />
      </div>
    </Layout>
  )
}