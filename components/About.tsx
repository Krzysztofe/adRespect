import Image from "next/image";
import ButtonLink from "./shared/buttons/ButtonLink";
import Icon from "./shared/Icon";

const About = () => {
  return (
    <section>
      <div className="items-stretch lg:flex lg:flex-row-reverse">
        <div className="lg:w-1/2">
          <div className="_container-half bg-accent mr-auto flex h-full items-center p-20 text-white sm:p-36">
            <div>
              {" "}
              <p className="text-xs">O firmie</p>
              <h2 className="text-2xl">
                Tworzymy <br /> z <span className="italic">pasją</span>
              </h2>
              <p className="mt-14">
                Każdy projekt to nowe wyzwanie. Dlatego nasz zespół tworzą
                wykwalifikowani projektanci oraz architekci, których zadaniem
                jest rozpoznanie i realizacja potrzeb każdego Klienta. Nasza
                specjalizacja to przestrzenie nowoczesne, które charakteryzuje
                minimalizm, geometria i elegancka prostota. Tworzymy ogrody
                małoobsługowe, dostosowane do współczesnego trybu życia.
              </p>
              <div className="mt-20 flex flex-col gap-10 sm:flex-row">
                <ButtonLink
                  icon={
                    <Icon
                      icon={"arrow"}
                      size={15}
                      className="-rotate-90 text-current"
                    />
                  }
                  variant="primary-empty"
                  message="Poznaj nas bliżej"
                  link={"/realizacje"}
                  className="hover:!text-accent !border-white !text-white hover:!bg-white"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative min-h-[40rem] self-stretch lg:w-1/2">
          <Image
            src="/photos/photoAbout.webp"
            alt="Zdjęcie domu"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
