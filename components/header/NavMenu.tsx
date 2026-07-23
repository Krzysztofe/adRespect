import { navLinks } from "@/data/navLinks";
import MenuLink from "./MenuLink";
import DropdownMenu from "./DropdownMenu";

const NavMenu = () => {
  return (
    <nav>
      <ul className="flex items-center gap-6 sm:gap-16">
        <DropdownMenu variant="desktop" />
        {navLinks.map(({ text, link }) => (
          <MenuLink key={link} {...{ text, link }} />
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
