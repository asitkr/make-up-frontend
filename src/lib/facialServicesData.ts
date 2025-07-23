import img1 from '../assets/cardImg/ProfMakeUpImg/facialRegImg/image (1).png'
import img2 from '../assets/cardImg/ProfMakeUpImg/facialRegImg/image (2).png'
import img3 from '../assets/cardImg/ProfMakeUpImg/facialRegImg/image (3).png'
import img4 from '../assets/cardImg/ProfMakeUpImg/facialRegImg/image (4).png'
import img5 from '../assets/cardImg/ProfMakeUpImg/facialRegImg/image (5).png'
import imgpre1 from '../assets/cardImg/facialPremImg/image (1).png'
import imgpre2 from '../assets/cardImg/facialPremImg/image (2).png'
import imgpre3 from '../assets/cardImg/facialPremImg/image (3).png'
import imgbri1 from '../assets/cardImg/facialBriImg/image (4).png'
import imgbri2 from '../assets/cardImg/facialBriImg/image (5).png'


export const facialServices = [
  {
  tabName:"Regular",
  cardData:[
  {
    id:0,
    title: "Vitamin C Brightening Facial",
    description: "Restores luminosity and evens skin tone with the power of Vitamin C",
    price: "₹ 1600 Including Taxes",
    duration: "60mins",
    image: img1, // Replace with actual path
    buttonText: "Add +",
    
  },
  {
    id:1,
    title: "Anti-Ageing For 30+",
    description: "Combat early signs of ageing with a deeply nourishing facial experience",
    price: "₹ 1600 Including Taxes",
    duration: "60mins",
    image:img2,
    buttonText: "Add +"
  },
  {
    id:2,
    title: "Fruit Facial",
    description: "Indulge in a fruity rejuvenation for instantly fresh skin",
    price: "₹ 1600 Including Taxes",
    duration: "60mins",
    image: img3,
    buttonText: "Add +"
  },
  {
    id:3,
    title: "De-Tan Facial",
    description: "Combat early signs of ageing with a deeply nourishing facial experience",
    price: "₹ 1600 Including Taxes",
    duration: "60mins",
    image: img4,
    buttonText: "Add +"
  },
  {
    id:4,
    title: "Cleanup",
    description: "Indulge in a fruity rejuvenation for instantly fresh skin",
    price: "₹ 1600 Including Taxes",
    duration: "60mins",
    image:img5,
    buttonText: "Add +"
  }
]
},
{
  tabName:"Premium",
  cardData: [
  {
    id:0,
    title: "Raaga Rejuvenating Facial",
    description: "Experience a serene skincare journey with Raaga’s signature rejuvenating facial.",
    price: 399,
    unit: "Including Taxes",
    duration: "1 hr 10 mins",
    buttonText: "Add +",
    image:imgpre1
  },
  {
    id:1,
    title: "Mama Earth Uptan Facial",
    description: "Inspired by Ayurveda, this facial purifies and revives dull skin from deep within.",
    price: 399,
    unit: "Including Taxes",
    duration: "1 hr 10 mins",
    buttonText: "Add +",
    image:imgpre2
  },
  {
    id:2,
    title: "O3+ Stay Young Facial",
    description: "Stay radiant, stay youthful—discover the magic of O3+ Stay Young Facial.",
    price: 2999,
    unit: "Including Taxes",
    duration: "1 hr 10 mins",
    buttonText: "Add +",
    image:imgpre3
  }
]
},
{
  tabName:"Bridal",
  cardData: [
  {
    id:0,
    title: "O3+ Bridal Facial",
    description: "Get wedding-ready with the O3+ Bridal Facial—crafted for an instant bridal glow.",
    price: 6999,
    unit: "Including Taxes",
    duration: "1 hr 40 mins",
    buttonText: "Add +",
    image:imgbri1
  },
  {
    id:1,
    title: "Aroma Magic Bridal Facial",
    description: "Combat early signs of ageing with a deeply nourishing bridal experience.",
    price: 3999,
    unit: "Including Taxes",
    duration: "1 hr 40 mins",
    buttonText: "Add +",
    image:imgbri2
  }
]
}
]