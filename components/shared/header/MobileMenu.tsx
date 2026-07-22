"use client";

import { useState } from "react";
import Button from "../buttons/Button";
import Icon from "../Icon";
import MenuLink from "./MenuLink";
import { navLinks } from "@/data/navLinks";
import DropdownMenu from "./DropdownMenu";

const MobileMenu = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleClass = isOpen ? "translate-x-0" : "translate-x-full";

  return (
    <div className="relative lg:hidden">
      {isOpen && (
        <div className="fixed inset-0 z-10 " onClick={() => setOpen(false)} />
      )}
      <Button
        className=""
        icon={<Icon icon={"hamburger"} size={30} className={"bg-font-dark"} />}
        onClickAction={() => setOpen((prev) => !prev)}
        variant="ghost"
        ariaLabel={isOpen ? "Zamknij menu" : "Otwórz menu"}
        aria-expanded={isOpen}
      />

      <nav
        className={`
                 fixed top-0 right-0 z-40
                   h-screen w-80
                  bg-white shadow-xl
                  transform transition-transform duration-300 ease-in-out
                  ${toggleClass}
                  lg:hidden
                   z-20
                 `}
      >
        {" "}
        <Button
          className="top-6 -right-60"
          icon={<Icon icon={"xmark"} size={30} className={"bg-font-dark"} />}
          onClickAction={() => setOpen((prev) => !prev)}
          variant="ghost"
          ariaLabel={isOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={isOpen}
        />
        <ul className="mt-24 flex flex-col gap-20 px-6">
          <DropdownMenu variant="mobile" />
          {navLinks.map(({ text, link }) => (
            <MenuLink key={link} text={text} link={link} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
