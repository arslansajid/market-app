import { FilterTypes } from "../components/Filters/filters.types";
import Mugs from "../assets/images/mugs.jpeg";
import Mugs2 from "../assets/images/mugs2.jpeg";
import Mugs3 from "../assets/images/mugs3.jpeg";
import Shirt from "../assets/images/shirt1.jpg";
import Shirt2 from "../assets/images/shirt2.jpeg";
import Shirt3 from "../assets/images/shirt3.jpeg";

const mugsImgArray = [Mugs, Mugs2, Mugs3];
const shirtsImgArray = [Shirt, Shirt2, Shirt3];

export const getImage = (filter: FilterTypes) => {
  if (filter === FilterTypes.mug) {
    return mugsImgArray[Math.floor(Math.random() * mugsImgArray.length)];
  } else {
    return shirtsImgArray[Math.floor(Math.random() * shirtsImgArray.length)];
  }
};

export const roundtoDigits = (number: number, digits: number) => {
  return Number(number).toFixed(digits);
};
