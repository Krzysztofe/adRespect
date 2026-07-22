import Image from "next/image";
import ButtonLink from "./shared/buttons/ButtonLink";
import Link from "next/link";

const links = ["Kontakt", "Instagram", "Facebook", "LinkedIn"];

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="_container-sm py-26 text-white">
        <div className="flex flex-col sm:flex-row gap-20 justify-between items-center pb-20 border-b">
          <Link href="/">
            <Image
              src="/logo-white.png"
              alt="Giard Design"
              className="object-contain"
              priority
              width={114}
              height={19}
            />
          </Link>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <p>Daj znać, co możemy dla Ciebie zrobić!</p>
            <ButtonLink
              variant="primary"
              link={"/kontakt"}
              message="Skontaktuj się z nami"
            />
          </div>
        </div>
        <div className="py-20 flex flex-col lg:flex-row gap-20 justify-between items-center text-sm">
          <ul className="flex flex-col sm:flex-row gap-6 sm:gap-20">
            {links.map((link) => {
              return (
                <li className="flex justify-center">
                  <ButtonLink
                    message={link}
                    link={`/${link}`}
                    className="!text-sm"
                  />
                </li>
              );
            })}
          </ul>
          <div className="flex flex-col sm:flex-row  sm:gap-20">
            <p className="text-center">000-000-000</p>
            <p className="text-center">giarddesign@kontakt.pl</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center sm:pt-20">
          <p>Prawa zastrzeżone &copy; 2022</p>
          <div className="flex gap-8 items-center">
            <p>made by</p>
            <Image
              src="/group129.png"
              alt="Giard Design"
              className="object-contain"
              priority
              width={113}
              height={23}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
