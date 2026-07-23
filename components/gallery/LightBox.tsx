"use client";

import Image from "next/image";
import Icon from "../shared/Icon";
import Button from "../shared/buttons/Button";
import { motion, AnimatePresence } from "framer-motion";

type ImageType = {
  src: string;
  alt: string;
};

type Props = {
  images: ImageType[];
  activeIndex: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
};

const Lightbox = ({ images, activeIndex, onClose, onChange }: Props) => {
  if (activeIndex === null) return null;

  const image = images[activeIndex];

  const prevImage = () => {
    const newIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;

    onChange(newIndex);
  };

  const nextImage = () => {
    const newIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    onChange(newIndex);
  };

  return (
    <div
      className=" fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-10"
      onClick={onClose}
    >
      <Button
        className="!absolute right-8 top-8 z-10"
        onClickAction={(e) => {
          e.stopPropagation();
          onClose();
        }}
        icon={<Icon icon="xmark" size={30} className="bg-white" />}
        variant="ghost"
      />

      <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
        <Button
          className="absolute left-2 z-10"
          onClickAction={(e) => {
            e.stopPropagation();
            prevImage();
          }}
          icon={
            <Icon icon="chevron" size={40} className="bg-white rotate-90" />
          }
          variant="ghost"
        />
      </motion.div>

      <div
        className="relative h-5/6 w-5/6"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={image.src}
            className="relative h-full w-full"
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 1.05,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
        <Button
          className="absolute right-2"
          onClickAction={(e) => {
            e.stopPropagation();
            nextImage();
          }}
          icon={
            <Icon icon="chevron" size={40} className="bg-white -rotate-90" />
          }
          variant="ghost"
        />
      </motion.div>

      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        className="absolute bottom-2 text-white"
      >
        {activeIndex + 1} / {images.length}
      </motion.div>
    </div>
  );
};

export default Lightbox;
