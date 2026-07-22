"use client";

import { useEffect, useRef, useState } from "react";
import Button from "../buttons/Button";
import Icon from "../Icon";

const SearchInput = () => {
  const [isOpen, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleSearch = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative flex items-center">
      <div
        className={`
       
          overflow-hidden
          transition-all duration-300 ease-in-out
          ${isOpen ? "w-64 opacity-100" : "pointer-events-none w-0 opacity-0"}
        `}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Szukaj..."
          className="
            h-10 w-64
            border border-font-dark
            rounded-sm
            bg-white
            px-4
            outline-none
            focus:border-black
          "
        />
      </div>

      <Button
        icon={
          <Icon
            icon={isOpen ? "xmark" : "glass"}
            size={26}
            className="bg-font-dark"
          />
        }
        onClickAction={toggleSearch}
        variant="ghost"
        ariaLabel={isOpen ? "Zamknij wyszukiwarkę" : "Otwórz wyszukiwarkę"}
        aria-expanded={isOpen}
      />
    </div>
  );
};

export default SearchInput;
