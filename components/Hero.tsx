import Image from "next/image";

const Hero = () => {
  return (
    <section className="h-[80vh]">
      <div className="flex h-full">
        <div className="w-1/2">
          <div className="_container-half ml-auto">
            <div className="flex items-center bg-bg-dark p-12">
              <h1 className="text-5xl">Nowoczesna aranżacja Twojego ogrodu</h1>
            </div>
          </div>
        </div>

        <div className="relative w-1/2 h-full">
          <Image
            src="/Photo-hero.png"
            alt="Giard Design"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
