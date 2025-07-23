import  HorizontalCard   from "../Components/cards/HorizontalCard";
import  VerticalCard  from "../Components/cards/VerticalCard";
import { facialServices } from "./facialServicesData";
import { profmakeupServices } from "./profMakeUp";
import { professionalMehendiCardData } from "./mehendiData";
import { waxingCardData } from "./waxingData";
import { manicureAndPedicureCardData } from "./manicAndPadiData";
import { bleachAndDetanCardData } from "./bleachData";

interface ModalCardItem {
  title: string;
  Component: React.FC<any>;
  data: any[];
  type:string
}

export const modalCardMap: Record<string, ModalCardItem> = {
  professional_makeup: {
    title: "Professional MakeUp",
    Component: VerticalCard,
    type:"vertical",
    data: profmakeupServices,
  },
  cleanup_and_facial: {
    title: "Clean Up & Facial",
    Component: HorizontalCard,
    data: facialServices,
    type:"horizontal"
  },
  professional_mehendi: {
    title: "Professional Mehendi",
    Component: VerticalCard,
    data: professionalMehendiCardData,
    type:"vertical"
  },
  waxing: {
    title: "Waxing",
    Component: HorizontalCard,
    data: waxingCardData,
    type:"horizontal"
  },
  manicure_pedicure: {
    title: "Manicure & Pedicure",
    Component: HorizontalCard,
    data: manicureAndPedicureCardData,
    type:"horizontal"
  },
  bleach_detan: {
    title: "Bleach & De-Tan",
    Component: HorizontalCard,
    data: bleachAndDetanCardData,
    type:"horizontal"
  },
};
