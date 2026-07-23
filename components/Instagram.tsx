"use client";

import ButtonLink from "./shared/buttons/ButtonLink";
import { motion } from "framer-motion";

const Instagram = () => {
  return (
    <section className="py-16">
      <div className="_container-sm bg-accent text-font-light flex flex-col gap-20 !p-20 sm:justify-between sm:!p-40 lg:flex-row">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-xl"
        >
          <p className="leading-[1.2]">
            Zostańmy w kontakcie! <br />
            Znajdziesz nas na{" "}
            <span className="font-semiBold italic">Instagramie</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <p className="mb-8">
            Sledź nasze <br /> najnowsze realizacje!
          </p>
          <ButtonLink
            variant="primary-empty"
            message="Instagram"
            link={"/instagram"}
            className="hover:!bg-accent !bg-white hover:!border-white"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Instagram;
