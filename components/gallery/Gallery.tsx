"use client";

import { useEffect, useRef, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { galleryImages } from "@/data/galleryImages";
import Button from "../shared/buttons/Button";
import Icon from "../shared/Icon";
import Lightbox from "./LightBox";
import { motion } from "framer-motion";

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

  return (
    <section id="gallery">
      <div className="_container bg-bg-dark relative pb-8">
        <div className="p-30">
          <p className="text-accent text-xs">Realizacje</p>
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
                {galleryImages.map(({ src, alt }, index) => (
                  <motion.button
                    key={alt}
                    onClick={() => setActiveIndex(index)}
                    className="group block w-full cursor-pointer overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.06,
                      ease: "easeOut",
                    }}
                  >
                    <img
                      src={src}
                      alt={alt}
                      loading="lazy"
                      decoding="async"
                      className="block w-full transition duration-300 group-hover:scale-105"
                    />
                  </motion.button>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
        {!isExpanded && (
          <div
            className="from-bg-dark pointer-events-none absolute bottom-0 left-0 w-full bg-gradient-to-t to-transparent"
            style={{
              height: `${galleryHeight / 2.5}px`,
            }}
          />
        )}

        <div className="absolute bottom-26 left-1/2 flex -translate-x-1/2 justify-center py-10">
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
        images={galleryImages}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onChange={(index) => setActiveIndex(index)}
      />
    </section>
  );
};

export default Gallery;
