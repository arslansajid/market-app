import { FilterTypes } from "../types/filters.types";
import Mugs from "../assets/images/mugs.jpeg";
import Mugs2 from "../assets/images/mugs2.jpeg";
import Mugs3 from "../assets/images/mugs3.jpeg";
import { ProductType } from "../types/product.types";
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

function detectMob() {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
}

export enum EAppMode {
  Mobile = "mobile",
  Tablet = "tablet",
  Desktop = "desktop",
}

export const getAppMode = (): EAppMode => {
  const isMobile = detectMob();
  if (isMobile) {
    return EAppMode.Mobile;
  }
  return EAppMode.Desktop;
};

export const applyCustomSortFilter = (
  filterVal: number,
  products: ProductType[]
) => {
  switch (filterVal) {
    case 1:
      return products.sort(
        (a: any, b: any) => parseFloat(a.price) - parseFloat(b.price)
      );
    case 2:
      return products.sort(
        (a: any, b: any) => parseFloat(b.price) - parseFloat(a.price)
      );
    case 3:
      return products.sort((a: any, b: any) => a.added - b.added);
    case 4:
      return products.sort((a: any, b: any) => b.added - a.added);
    default:
      return [];
  }
};
