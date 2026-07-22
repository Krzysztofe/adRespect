"use client";

import { useState } from "react";
import { navLinksOffer } from "@/data/navLinks";
import Icon from "../Icon";
import MenuLink from "./MenuLink";

type Props = {
  variant: "mobile" | "desctop";
};

const DropdownMenu = ({ variant }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const classVariant =
    variant === "mobile" ? "" : "absolute left-1/2    -translate-x-1/2";

  return (
    <li className="relative">
      {variant === "desctop" && isOpen && (
        <div
          className="fixed inset-0 z-10 top-[60px]"
          onClick={() => setIsOpen(false)}
        />
      )}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 text-sm border border-transparent hover:border-b-font-dark w-full"
      >
        Oferta
        <Icon
          icon={"chevron"}
          size={15}
          className={`bg-font-dark transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <ul
        className={` ${classVariant}
             top-full mt-2
            z-20
            w-max
            grid
            overflow-hidden
            bg-white
            transition-[grid-template-rows] duration-300
            ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
          `}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="flex flex-col gap-10 px-10 py-5">
            {navLinksOffer.map(({ text, link }) => (
              <MenuLink key={link} text={text} link={link} />
            ))}
          </div>
        </div>
      </ul>
    </li>
  );
};

export default DropdownMenu;
