"use client";

import Image from "next/image";
import Icon from "../shared/Icon";
import Button from "../shared/buttons/Button";

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

      <Button
        className="absolute left-2 z-10"
        onClickAction={(e) => {
          e.stopPropagation();
          prevImage();
        }}
        icon={<Icon icon="chevron" size={40} className="bg-white rotate-90" />}
        variant="ghost"
      />

      <div
        className="relative h-full w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-contain"
        />
      </div>

      <Button
        className="absolute right-2"
        onClickAction={(e) => {
          e.stopPropagation();
          nextImage();
        }}
        icon={<Icon icon="chevron" size={40} className="bg-white -rotate-90" />}
        variant="ghost"
      />

      <div className="absolute bottom-2 text-white">
        {activeIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default Lightbox;
