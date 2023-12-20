import { SelectedPage } from "@/shared/types";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import img21 from "@/assets/dogs/img_21.png";
import { motion } from "framer-motion";
import "./index.css";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const AboutAdoption = ({ setSelectedPage }: Props) => {
  return (
    <section id="aboutAdoption" className="bg-indigo py-10">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.AboutAdoption)}
      >
        <p className="text-center font-titan text-2xl text-peach drop-shadow-xl xxs:text-4xl">
          Jak adoptować psa ?
        </p>
        <p className="text mx-auto w-4/5 pt-4 pb-10 font-quicksand">
          Należy przejść następujące kroki:
        </p>

        <div className="flexClass mx-auto w-11/12 md:w-3/4 xxl:w-1/2">
          <div className="text-md mx-auto grid w-4/5 gap-y-8 text-white drop-shadow-xl sm:text-xl md:w-1/2">
            <motion.div
              className="flex"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, x: -80 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <ChevronRightIcon className="chevron" />
              Przejrzyj ogłoszenia na stronie www
            </motion.div>
            <motion.div
              className="flex"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9 }}
              variants={{
                hidden: { opacity: 0, x: -80 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <ChevronRightIcon className="chevron" />
              Umów się z wolontariuszem psa na spotkanie
            </motion.div>
            <motion.div
              className="flex"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.2 }}
              variants={{
                hidden: { opacity: 0, x: -80 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <ChevronRightIcon className="chevron" />
              Wypełnij ankietę
            </motion.div>
            <motion.div
              className="flex"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.5 }}
              variants={{
                hidden: { opacity: 0, x: -80 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <ChevronRightIcon className="chevron" />
              Poznaj psa lepiej na spacerach
            </motion.div>
            <motion.div
              className="flex"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.8 }}
              variants={{
                hidden: { opacity: 0, x: -80 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <ChevronRightIcon className="chevron" />
              Podpisz umowę i odbierz przyjaciela :)
            </motion.div>
          </div>
          <div className="mx-auto mt-10 md:mt-0 ">
            <img src={img21} alt="Dog" className="h-[280px] xs:h-[380px]" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutAdoption;
