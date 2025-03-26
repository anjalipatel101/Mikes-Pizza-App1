import { StaticImageData } from "next/image";

export interface MenuItem {
  id: number;
  name: string;
  price: string;
  image: StaticImageData;
} 