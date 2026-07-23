"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { sliderItems } from "@/data/sliderItems";
import Icon from "../shared/Icon";
import Button from "../shared/buttons/Button";

const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const goToPrev = () => emblaApi?.scrollPrev();
  const goToNext = () => emblaApi?.scrollNext();

  return (
    <section className="lg:h-[80vh]">
      <div className="embla h-full relative">
        <div className="_embla-viewport h-full" ref={emblaRef}>
          <div className="_embla-container h-full">
            {sliderItems.map(({ component, src, alt }, idx) => {
              return (
                <div className="_embla-slide lg:flex h-full" key={idx}>
                  <div className="lg:w-1/2">
                    <div className="_container-half ml-auto flex items-center bg-bg-dark p-8 sm:p-20 h-full">
                      {component}
                    </div>
                  </div>

                  <div className="relative lg:w-1/2 lg:h-full h-[40rem]">
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="absolute bottom-0 right-0 flex justify center bg-bg-light lg:h-[13%] min-h-[3rem] ">
          <Button
            icon={
              <Icon
                icon={"arrow"}
                size={20}
                className={"bg-font-dark rotate-90 h-full px-20"}
              />
            }
            onClickAction={goToPrev}
            variant="ghost"
          />

          <Button
            icon={
              <Icon
                icon={"arrow"}
                size={20}
                className={"bg-font-dark -rotate-90 h-full px-20"}
              />
            }
            onClickAction={goToNext}
            variant="ghost"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
