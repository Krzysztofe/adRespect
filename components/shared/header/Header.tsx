import Link from "next/link";
import Image from "next/image";
import NavMenu from "./NavMenu";
import MobileMenu from "./MobileMenu";
import SearchInput from "./SearchInput";

const Header = () => {
  return (
    <header className="sticky top-0 z-20 bg-white py-6 shadow-[0_1px_0_rgba(0,0,0,0.06)]">
      <div className="_container flex justify-between items-center">
        <Link href="/">
          <div className="relative h-12 w-52">
            <Image
              src="/giarddesign.png"
              alt="Giard Design"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>
        <div className="hidden lg:block ml-auto">
          <NavMenu />
        </div>
        <div className="relative ml-auto lg:ml-16 mr-2">
          <SearchInput />
        </div>

        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
