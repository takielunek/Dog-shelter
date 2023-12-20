import { SelectedPage } from "@/shared/types";
import img20 from "@/assets/dogs/img_20.png";
import AdoptionButton from "@/shared/AdoptionButton";
import { motion } from "framer-motion";
import "./index.css";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="home"
      className="bg-gradient-to-t from-indigo pt-[80px] md:pt-[120px]"
    >
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
        <div className="flexClass mx-auto w-3/4 md:justify-center xl:w-3/5 xxl:w-1/2">
          <div className="mx-auto w-11/12 md:w-3/4 xl:w-1/3">
            <div className="flex w-11/12 flex-col pt-4 font-titan drop-shadow-xl xs:pt-16 md:w-full">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -80 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <p className=" text-6xl text-orange xxs:text-7xl md:text-6xl xl:text-8xl">
                  DAD!
                </p>
                <p className="text-6xl text-orange xxs:text-7xl md:text-6xl xl:text-8xl">
                  MOM!
                </p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
                variants={{
                  hidden: { opacity: 0, x: -80 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <p className="text-4xl text-peach xxs:text-5xl md:text-4xl xl:text-6xl ">
                  Take me HOME!
                </p>
              </motion.div>
            </div>
            <motion.div
              className="mt-8 mb-0 drop-shadow-xl md:mb-14"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: -80 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <AdoptionButton setSelectedPage={setSelectedPage}>
                Adoptuj mnie !
              </AdoptionButton>
            </motion.div>
          </div>
          <div className="flex w-full justify-center md:w-2/3">
            <img src={img20} alt="Human with a dog" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
