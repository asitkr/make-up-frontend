import  HorizontalCard   from "../components/cards/HorizontalCard.tsx";
import  VerticalCard  from "../components/cards/VerticalCard.tsx";
import { facialServices } from "./facialServicesData.ts";
import { profmakeupServices } from "./profMakeUp.ts";
import { professionalMehendiCardData } from "./mehendiData.ts";
import { waxingCardData } from "./waxingData.ts";
import { manicureAndPedicureCardData } from "./manicAndPadiData.ts";
import { bleachAndDetanCardData } from "./bleachData.ts";

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
