import Link from "next/link";
import Image from "next/image";
import NavMenu from "./NavMenu";
import MobileMenu from "./MobileMenu";
import SearchInput from "./SearchInput";

const Header = () => {
  return (
    <header className="sticky top-0 z-20 bg-white py-6">
      <div className="_container flex items-center justify-between">
        <Link href="/">
          <div className="relative h-[1.9rem] w-[11.4rem]">
            <Image
              src="/photos/logoBlack.webp"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>
        <div className="ml-auto hidden lg:block">
          <NavMenu />
        </div>
        <div className="relative mr-2 ml-auto lg:ml-16">
          <SearchInput />
        </div>

        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
