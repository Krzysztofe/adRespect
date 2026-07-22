import ButtonLink from "./shared/buttons/ButtonLink";

const Instagram = () => {
  return (
    <section className="py-16">
      <div className="_container-sm bg-accent !p-20 sm:!p-40 flex flex-col gap-20 lg:flex-row sm:justify-between text-white">
        <div className="text-lg">
          <p className="leading-[1.2]">
            Zostańmy w kontakcje! <br />
            Znajdziesz nas na{" "}
            <span className="italic font-semiBold">Instagramie</span>.
          </p>
        </div>
        <div>
          <p className="mb-8">
            Sledź nasze <br /> najnowsze relacje
          </p>
          <ButtonLink
            variant="primary-empty"
            message="Instagram"
            link={"/instagram"}
            className="!bg-white hover:!bg-accent hover:!border-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Instagram;
