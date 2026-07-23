"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { sliderItems } from "@/data/sliderItems";
import Icon from "../shared/Icon";
import Button from "../shared/buttons/Button";
import { useCallback } from "react";

const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const goToPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const goToNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section className="lg:h-[80vh]">
      <div className="embla relative h-full">
        <div className="_embla-viewport h-full" ref={emblaRef}>
          <div className="_embla-container h-full">
            {sliderItems.map(({ component, src, alt }, idx) => {
              return (
                <div className="_embla-slide h-full lg:flex" key={idx}>
                  <div className="lg:w-1/2">
                    <div className="_container-half bg-bg-dark ml-auto flex h-full items-center p-8 sm:p-20">
                      {component}
                    </div>
                  </div>

                  <div className="relative h-[40rem] lg:h-full lg:w-1/2">
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      className="object-cover"
                      priority={idx === 0}
                      loading={idx === 0 ? undefined : "lazy"}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-bg-light absolute right-0 bottom-0 flex min-h-[3rem] justify-center lg:h-[13%]">
          <Button
            icon={
              <Icon
                icon={"arrow"}
                size={20}
                className={"bg-font-dark h-full rotate-90 px-20"}
              />
            }
            onClickAction={goToPrev}
            variant="ghost"
            ariaLabel="Poprzedni slajd"
          />

          <Button
            icon={
              <Icon
                icon={"arrow"}
                size={20}
                className={"bg-font-dark h-full -rotate-90 px-20"}
              />
            }
            onClickAction={goToNext}
            variant="ghost"
            ariaLabel="Następny slajd"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
