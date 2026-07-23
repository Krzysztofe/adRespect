"use client";

import ButtonLink from "./shared/buttons/ButtonLink";
import { motion } from "framer-motion";

const Instagram = () => {
  return (
    <section className="py-16">
      <div className="_container-sm bg-accent !p-20 sm:!p-40 flex flex-col gap-20 lg:flex-row sm:justify-between text-font-light">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xl"
        >
          <p className="leading-[1.2]">
            Zostańmy w kontakcie! <br />
            Znajdziesz nas na{" "}
            <span className="italic font-semiBold">Instagramie</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p className="mb-8">
            Sledź nasze <br /> najnowsze realizacje!
          </p>
          <ButtonLink
            variant="primary-empty"
            message="Instagram"
            link={"/instagram"}
            className="!bg-white hover:!bg-accent hover:!border-white"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Instagram;
