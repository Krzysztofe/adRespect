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
          <p className="text-accent text-xs">Oferta</p>

          <h2 className="text-2xl">
            Działamy <span className="italic">kompleksowo</span>
          </h2>

          <p className="mt-10 sm:w-2/3">
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
              className="group hover:bg-accent/5 max-w-[37rem] rounded-4xl bg-white p-14 transition-all duration-300 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl"
            >
              <Icon
                icon={icon}
                size={35}
                className="group-hover:text-accent mb-10 text-current transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
              />

              <h3 className="group-hover:text-accent mb-2 text-lg transition-colors duration-300">
                {title}
              </h3>

              <p className="mb-30 text-sm">{subtitle}</p>

              <div className="!text-accent border-b-accent flex w-fit items-center gap-2 border border-transparent transition-all duration-300 group-hover:translate-x-2">
                {linkMsg}
                <Icon
                  icon="arrow"
                  size={15}
                  className="-rotate-90 text-current transition-transform duration-300 group-hover:translate-x-2"
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
