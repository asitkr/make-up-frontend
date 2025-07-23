import { forwardRef, lazy, useEffect, useState, } from "react";
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";
import { AnimatePresence, motion, type Variants } from "framer-motion";

import galleryimg1 from '../assets/gallery/image 122.svg';
import galleryimg2 from "../assets/gallery/galleryimg2.webp";
import galleryimg3 from '../assets/gallery/galleryimg3.jpg'

import type { GalleryProps } from "../types/gallery.ts";

const Button = lazy(() => import("./dynamicComponents/Button.tsx"));

const Gallery = forwardRef<HTMLDivElement, GalleryProps>((props, ref) => {
  const { aboutRef, getStartedRef } = props;
  const [progress, setProgress] = useState<number[]>([0, 0, 0]);
  const [step, setStep] = useState(0);
  const [stopStepMovement, setStopStepMovement] = useState(false);

  const getImage = () => {
    if (step === 0) return galleryimg3;
    if (step === 1) return galleryimg1;
    return galleryimg2;
  };

  useEffect(() => {
    if (!stopStepMovement) {
      if (step < 3) {
        // Immediately set only the current bar to 100%, others to 0
        setProgress([0, 0, 0].map((_, i) => (i === step ? 100 : 0)));

        const timer = setTimeout(() => {
          setStep((prev) => prev + 1); // Move to next bar
        }, 4000); // Duration of each bar's animation

        return () => clearTimeout(timer);
      } else {
        // Immediately restart without delay
        setProgress([0, 0, 0]);
        setStep(0);
      }
    }
  }, [step, stopStepMovement]);

  const handleScrollToForm = () => {
    if (getStartedRef?.current && aboutRef.current) {
      const yOffset = 1000; // Adjust offset if needed (to prevent hiding behind navbar)
      const y =
        aboutRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const variants: Variants = {
    initial: { y: "100%" },        // Comes in from bottom
    animate: {
      y: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    exit: {
      y: "-100%",                  // Exits up
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <>
      <div ref={ref} id="gallery" className="w-full bg-white scroll-mt-20">
        <div className="w-full">
          <div className="w-full bg-gradient-to-b from-white to-[#fdf2f6] lg:bg-none">
            <div className="w-full py-6 lg:py-20 px-2 lg:px-20">
              <p className="font-semibold text-sm lg:text-xl text-primary lg:leading-8">Makeover Gallery</p>
              <p className="text-lg lg:text-[44px] lg:leading-[62px] whitespace-wrap xl:whitespace-nowrap">We have created amazing stories for our customers!</p>
              <p className="my-1 text-xs md:text-lg lg:text-lg lg:leading-7">100% Satisfaction Rate, We always want you to look fabulous and we always thrive to be the best~</p>

              {/* === Mobile Tabs === */}
              <div className="w-full flex items-center justify-between lg:hidden pt-4">
                {["Party Makeup", "Bridal Makeup", "Engagement & Reception"].map((label, index) => (
                  <div
                    key={label}
                    onClick={() => {
                      setStopStepMovement(true);
                      setStep(index);
                    }}
                    className="flex flex-col items-center cursor-pointer"
                  >
                    <div className="flex flex-col items-center">
                      <span
                        className={`text-xs font-normal transition-colors duration-300 
                            ${step === index ? "text-[#CC2B52]" : "text-[#e3b8c3]"}`}
                      >
                        {label}
                      </span>
                      <div
                        className={`h-[1px] bg-[#CC2B52] mt-1 transition-transform duration-300 origin-left 
                            ${step === index ? "scale-x-100" : "scale-x-0"} w-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          <div className="w-full px-4 lg:px-20 pb-6 lg:pb-20">
            <div className="w-full flex flex-col-reverse lg:flex-row lg:gap-6">
              <div className="w-full lg:w-[40%]">
                <div className="w-full hidden lg:block">
                  <hr className="mb-4 border border-[#F7EBEE]" />
                  <span
                    className={`my-4 font-normal md:text-[28px] cursor-pointer ${step == 0 ? "text-[#CC2B52]" : "text-[#e3b8c3]"}`}
                    onClick={() => {
                      setStopStepMovement(true);
                      setStep(0);
                    }}
                  >
                    Party Makeup
                  </span>
                  <div
                    className="relative"
                  >
                    {/* Background Line */}
                    <hr className="my-4 border border-[#F7EBEE]" />
                    {/* Animated Progress Line */}
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: `${stopStepMovement ? 0 : progress[0]}%`,
                        height: "1px",
                        background: "#cc2e58",
                        transition: progress[0] > 0 || stopStepMovement == true ? "width 4s linear" : "none",
                      }}
                    />
                  </div>

                  <span
                    className={`font-normal md:text-[28px] cursor-pointer ${step == 1 ? "text-[#CC2B52]" : "text-[#e3b8c3]"}`}
                    onClick={() => {
                      setStopStepMovement(true);
                      setStep(1);
                    }}
                  >
                    Bridal Makeup
                  </span>
                  <div
                    className="relative"
                  >
                    {/* Background Line */}
                    <hr className="my-4 border border-[#F7EBEE]" />
                    {/* Animated Progress Line */}
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: `${stopStepMovement ? 0 : progress[1]}%`,
                        height: "1px",
                        background: "#cc2e58", // Change color if needed
                        transition: progress[1] > 0 || stopStepMovement == true ? "width 4s linear" : "none",
                        cursor: "pointer",
                      }}
                    />
                  </div>

                  <span
                    className={`py-4 font-normal md:text-[28px] cursor-pointer ${step == 2 ? "text-[#CC2B52]" : "text-[#e3b8c3]"}`}
                    onClick={() => {
                      setStopStepMovement(true);
                      setStep(2);
                    }}
                  >
                    Engagement & Reception
                  </span>
                  <div className="relative"
                  >
                    {/* Background Line */}
                    <hr className="mt-4 border border-[#F7EBEE]" />
                    {/* Animated Progress Line */}
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: `${stopStepMovement ? 0 : progress[2]}%`,
                        height: "1px",
                        background: "#cc2e58", // Change color if needed
                        transition: progress[2] > 0 || stopStepMovement == true ? "width 4s linear" : "none",
                      }}
                    />
                  </div>
                </div>

                <p className="pt-6 lg:pt-60 text-lg text-textBlack300 font-medium">Transform your look and boost your confidence with our premium at-home makeover and makeup services. Whether it’s a glam evening look, bridal makeup, or a flawless everyday glow — our professional artists bring the salon experience to your doorstep, using top-quality products and personalized techniques. Ready to feel your best without stepping out? Tap the button below to enquire now <strong>— your perfect makeover is just a click away!</strong></p>

                <div className="mt-9">
                  <Button
                    className="w-full md:w-[343px] bg-primary px-6 py-3 flex items-center justify-center whitespace-nowrap "
                    onClick={handleScrollToForm}
                    name="Get In Touch For Personal Assistance"
                    icon={< ArrowLongRightIcon className="w-6 h-6 text-white" />}
                  />
                </div>
              </div>

              <div className="w-full lg:w-[60%]">
                <div className="w-full py-3 my-6 lg:my-0 lg:bg-[#F7EBEE]">
                  <div
                    className="w-full flex justify-center items-center h-[380px] lg:h-[800px] py-20 relative overflow-hidden bg-white lg:bg-[#F7EBEE]"
                  >
                    <AnimatePresence mode="sync">
                      <motion.img
                        key={step}
                        className="my-[80px] w-full h-full lg:w-[640px] lg:h-[640px] object-cover absolute"
                        src={getImage()}
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                      />
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
)

export default Gallery;