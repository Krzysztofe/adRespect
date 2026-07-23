"use client";

import { useEffect, useRef, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { galleryImages } from "@/data/galleryImages";
import Button from "../shared/buttons/Button";
import Icon from "../shared/Icon";
import Lightbox from "./LightBox";

const Gallery = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [galleryHeight, setGalleryHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const masonryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!masonryRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const height = entries[0].contentRect.height;
      setGalleryHeight(height);
    });

    observer.observe(masonryRef.current);

    return () => observer.disconnect();
  }, []);

  const visibleImages = isExpanded ? galleryImages : galleryImages.slice(0, 15);

  return (
    <section id="gallery">
      <div className="_container relative bg-bg-dark pb-8">
        <div className="p-30">
          <p className="text-xs text-accent">Realizacje</p>
          <h2 className="text-2xl">
            Nasze <span className="italic">projekty</span>
          </h2>
        </div>

        <div
          className="overflow-hidden transition-[height] duration-700 ease-in-out"
          style={{
            height: isExpanded
              ? `${galleryHeight}px`
              : `${galleryHeight / 1.8}px`,
          }}
        >
          <div ref={masonryRef}>
            <ResponsiveMasonry
              columnsCountBreakPoints={{
                350: 1,
                750: 2,
                900: 3,
              }}
              gutterBreakPoints={{
                350: 12,
                750: 16,
                900: 24,
              }}
            >
              <Masonry>
                {visibleImages.map(({ src, alt }, index) => (
                  <button
                    key={alt}
                    onClick={() => setActiveIndex(index)}
                    className="block w-full cursor-pointer"
                  >
                    <img
                      key={alt}
                      src={src}
                      alt={alt}
                      loading="lazy"
                      decoding="async"
                      className="block w-full"
                    />
                  </button>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
        {!isExpanded && (
          <div
            className="
                pointer-events-none absolute bottom-0 left-0 w-full bg-gradient-to-t from-bg-dark to-transparent
    "
            style={{
              height: `${galleryHeight / 2.5}px`,
            }}
          />
        )}

        <div className="absolute bottom-26 left-1/2 -translate-x-1/2 flex justify-center py-10">
          <Button
            icon={
              <Icon
                icon={"arrow"}
                size={15}
                className={`${isExpanded ? "rotate-180" : ""} text-current transition-transform duration-200`}
              />
            }
            message={isExpanded ? "Zwiń" : "Rozwiń"}
            onClickAction={() => setIsExpanded((prev) => !prev)}
            variant="primary-empty-dark"
          />
        </div>
      </div>
      <Lightbox
        images={visibleImages}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onChange={(index) => setActiveIndex(index)}
      />
    </section>
  );
};

export default Gallery;
