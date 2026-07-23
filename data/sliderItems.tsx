import { ReactNode } from "react";
import HeroDescription from "../components/hero/HeroDescription";

export const sliderItems: {
  src: string;
  component: ReactNode;
  alt: string;
}[] = [
  {
    src: "/Photo-hero.png",
    component: <HeroDescription />,
    alt: "Photo hero",
  },
  {
    src: "/Photo-hero.png",
    component: <HeroDescription />,
    alt: "Photo hero",
  },
  {
    src: "/Photo-hero.png",
    component: <HeroDescription />,
    alt: "Photo hero",
  },
];
