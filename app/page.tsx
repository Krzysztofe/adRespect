import type { Metadata } from "next";
import Hero from "@/components/hero/Hero";
import Gallery from "@/components/gallery/Gallery";
import Instagram from "@/components/Instagram";
import About from "@/components/About";
import Offer from "@/components/Offer";
import Reveal from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "Giard Design - strona główna",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Reveal delay={0.1}>
        <Offer />
      </Reveal>
      <Reveal delay={0.15}>
        <About />
      </Reveal>
      <Gallery />
      <Instagram />
    </>
  );
}
