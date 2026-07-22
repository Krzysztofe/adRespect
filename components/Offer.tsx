import ButtonLink from "./shared/buttons/ButtonLink";
import Icon from "./shared/Icon";
import Link from "next/link";

const cartsData = [
  {
    icon: "pen",
    title: "Projekty",
    subtitle:
      "Zaprojektujemy Twój ogród w nowoczesnym stylu i z najlepszym wykorzystaniem istniejącej przestrzeni.",
    linkMsg: "Dowiedz się więcej",
  },
  {
    icon: "eye",
    title: "Wizualizacje",
    subtitle:
      "Przedstawimy Ci projekty koncepcyjne w postaci wirtualnego spaceru animowanego w technologii 3D.",
    linkMsg: "Dowiedz się więcej",
  },
  {
    icon: "stars",
    title: "Realizacje",
    subtitle:
      "Zrealizujemy Twoje marzenie przy użyciu najnowszych rozwiązań i zaawansowanych technologii.",
    linkMsg: "Zobacz nasze realizacje",
  },
];

const Offer = () => {
  return (
    <section>
      <div className="_container bg-bg-light px-20 py-30">
        <div className="_container-sm mb-30">
          <p className="text-xs text-accent">Oferta</p>

          <h2 className="text-xl">
            Działamy <span className="italic">kompleksowo</span>
          </h2>

          <p className="mt-10 w-2/3">
            Oferujemy kompletną obsługę inwestycji terenów zielonych.
            Projektujemy nowoczesne ogrody przydomowe oraz rezydencjonalne.
            Stworzymy dla Ciebie projekt, zwizualizujemy go i wcielimy w życie,
            a na każdym etapie posłużymy radą i wieloletnim doświadczeniem.
          </p>
        </div>

        <div className="flex flex-col items-center gap-24 sm:flex-row sm:flex-wrap sm:justify-center">
          {cartsData.map(({ icon, title, subtitle, linkMsg }) => (
            <Link
              href={`/${title.toLocaleLowerCase()}`}
              key={title}
              className=" group max-w-[37rem] rounded-md bg-white p-14 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:scale-[1.02]"
            >
              <Icon
                icon={icon}
                size={35}
                className=" mb-10
    text-current
    transition-all
    duration-300
    group-hover:text-accent
    group-hover:rotate-12
    group-hover:scale-110"
              />

              <h3 className="transition-colors duration-300 group-hover:text-accent">
                {title}
              </h3>

              <p className="mb-30">{subtitle}</p>

              <div
                className=" !text-accent
    border
    border-transparent
    border-b-accent
    w-fit
    transition-all
    duration-300
    group-hover:translate-x-2
    flex gap-2 items-center"
              >
                {linkMsg}
                <Icon
                  icon="arrow"
                  size={15}
                  className=" text-current
        -rotate-90
        transition-transform
        duration-300
        group-hover:translate-x-2"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
