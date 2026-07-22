import type { Metadata } from "next";

import Hero from "@/components/hero/Hero";
import Gallery from "@/components/Gallery";
export const metadata: Metadata = {
  title: "Giard Design - strona główna",
};

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Gallery />
    </main>
  );
}
