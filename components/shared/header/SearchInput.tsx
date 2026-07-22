// "use client";
// import { useState } from "react";
// import Button from "../buttons/Button";
// import Icon from "../Icon";

// const SearchInput = () => {
//   const [isOpen, setOpen] = useState(false);

//   return (
//     <>
//       <Button
//         className=""
//         icon={<Icon icon={"glass"} size={30} className={"bg-font-dark"} />}
//         onClickAction={() => setOpen((prev) => !prev)}
//         variant="ghost"
//         ariaLabel={isOpen ? "Zamknij menu" : "Otwórz menu"}
//         aria-expanded={isOpen}
//       />
//     </>
//   );
// };

// export default SearchInput;

// "use client";

// import { useRef, useState } from "react";
// import Button from "../buttons/Button";
// import Icon from "../Icon";

// const SearchInput = () => {
//   const [isOpen, setOpen] = useState(false);
//   const inputRef = useRef<HTMLInputElement>(null);

//   const toggleSearch = () => {
//     setOpen((prev) => !prev);

//     setTimeout(() => {
//       inputRef.current?.focus();
//     }, 0);
//   };

//   return (
//     <div className="relative flex items-center">
//       <Button
//         icon={<Icon icon="glass" size={24} className="bg-font-dark" />}
//         onClickAction={toggleSearch}
//         variant="ghost"
//         ariaLabel={isOpen ? "Zamknij wyszukiwarkę" : "Otwórz wyszukiwarkę"}
//         aria-expanded={isOpen}
//       />

//       <div
//         className={`
//           absolute right-0 top-1/2 -translate-y-1/2
//           overflow-hidden
//           transition-all duration-300
//           ${isOpen ? "w-64 opacity-100" : "w-0 opacity-0"}
//         `}
//       >
//         <input
//           ref={inputRef}
//           type="text"
//           placeholder="Szukaj..."
//           className="h-10 w-64 rounded border border-gray-300 bg-white px-3 outline-none"
//         />
//       </div>
//     </div>
//   );
// };

// export default SearchInput;

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
