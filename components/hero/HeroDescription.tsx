import ButtonLink from "../shared/buttons/ButtonLink";
import Icon from "../shared/Icon";

const HeroDescription = () => {
  return (
    <div>
      {" "}
      <h1 className="text-xl">
        Nowoczesna aranżacja <br /> Twojego ogrodu
      </h1>
      <p className="mt-14 w-3/4">
        Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka
        realizacji. Oferujemy kompleksowy zakres usług z indywidualnym
        podejściem do każdego projektu.
      </p>
      <div className="flex flex-col sm:flex-row gap-10 mt-20">
        <ButtonLink
          variant="primary"
          link={"/kontakt"}
          message="Skontaktuj się z nami"
        />
        <ButtonLink
          icon={<Icon icon={"arrow"} size={15} className="text-current" />}
          variant="primary-empty"
          message="Zobacz nasze realizacje"
          link={"#gallery"}
        />
      </div>
    </div>
  );
};

export default HeroDescription;
