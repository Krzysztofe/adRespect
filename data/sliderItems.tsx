import { ReactNode } from "react";
import HeroDescription from "../components/hero/HeroDescription";
import React from "react";

export const sliderItems: {
  src: string;
  component: ReactNode;
}[] = [
  {
    src: "/Photo-hero.png",
    component: <HeroDescription />,
  },
  {
    src: "/Photo-hero.png",
    component: <HeroDescription />,
  },
  {
    src: "/Photo-hero.png",
    component: <HeroDescription />,
  },
];
