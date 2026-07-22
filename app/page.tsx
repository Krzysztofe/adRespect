import type { Metadata } from "next";

import Hero from "@/components/hero/Hero";
import Gallery from "@/components/gallery/Gallery";
import Instagram from "@/components/Instagram";
import Passion from "@/components/Passion";
export const metadata: Metadata = {
  title: "Giard Design - strona główna",
};

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Passion />
      <Gallery />
      <Instagram />
    </main>
  );
}
