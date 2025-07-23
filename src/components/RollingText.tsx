import { useEffect, useState } from "react";
import { contactUsPhrases } from "../lib/heroSectionData.ts";

const RollingText = () => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMidOpacity, setIsMidOpacity] = useState(false);

  useEffect(() => {
    if (contactUsPhrases.length <= 1) return;

    const interval = setInterval(() => {
      setIsMidOpacity(true);

      setTimeout(() => {
        setIsVisible(false);

        setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % contactUsPhrases.length);
          setIsVisible(true);
          setIsMidOpacity(false);
        }, 400);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getAnimationClass = () => {
    if (index === 0) {
      return isVisible ? "fade-in-down" : "fade-out-down";
    } else {
      return isVisible ? "fade-in-up" : "fade-out-up";
    }
  };

  return (
    <span
      className={`text-primary inline-block transition-all duration-300 
        text-base lg:text-[54px] lg:leading-[72px]
        ${getAnimationClass()} 
        ${isMidOpacity ? "opacity-50" : "opacity-100"}`}
    >
      {contactUsPhrases[index]}
    </span>
  );
};

export default RollingText;
