import Image from "next/image";
import HeroSlider from "./HeroSlider";
import Gallery from "../gallery/Gallery";

const Hero = () => {
  return (
    <section className="h-[90vh]">
      <HeroSlider />
    </section>
  );
};

export default Hero;
