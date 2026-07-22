import Image from "next/image";
import ButtonLink from "./shared/buttons/ButtonLink";
import Icon from "./shared/Icon";

const Passion = () => {
  return (
    <section>
      <div className="lg:flex lg:flex-row-reverse items-stretch">
        <div className="lg:w-1/2">
          <div className="_container-half mr-auto flex items-center bg-accent p-20 sm:p-36 h-full text-white">
            <div>
              {" "}
              <p className="text-xs">O firmie</p>
              <h2 className="text-xl">
                Towrzymy <br /> z <span className="italic">pasją</span>
              </h2>
              <p className="mt-14">
                Każdy projekt to nowe wyzwanie. Dlatego nasz zespół tworzą
                wykwalifikowani projektanci oraz architekci, których zadaniem
                jest rozpoznanie i realizacja potrzeb każdego Klienta. Nasza
                specjalizacja to przestrzenie nowoczesne, które charakteryzuje
                minimalizm, geometria i elegancka prostota. Tworzymy ogrody
                małoobsługowe, dostosowane do współczesnego trybu życia.
              </p>
              <div className="flex flex-col sm:flex-row gap-10 mt-20">
                <ButtonLink
                  icon={
                    <Icon
                      icon={"arrow"}
                      size={15}
                      className="text-current -rotate-90"
                    />
                  }
                  variant="primary-empty"
                  message="Poznaj nas bliżej"
                  link={"/realizacje"}
                  className="!border-white !text-white hover:!bg-white hover:!text-accent"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative lg:w-1/2 self-stretch min-h-[40rem]">
          <Image
            src="/photo-passion.png"
            alt="Zdjęcie domu"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Passion;
