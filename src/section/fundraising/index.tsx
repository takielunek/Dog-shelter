import { SelectedPage } from "@/shared/types";
import img5 from "@/assets/dogs/img_5.jpg";
import img15 from "@/assets/dogs/img_15.jpg";
import img8 from "@/assets/dogs/img_8.jpg";
import img2 from "@/assets/dogs/img_2.jpg";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import "./index.css";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Fundraising = ({ setSelectedPage }: Props) => {
  return (
    <section id="fundraising" className="bg-white py-6 xs:py-10">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Fundraising)}
      >
        <p className=" text-center font-titan text-2xl text-green-1 xxs:text-4xl">
          Zbiórki pieniędzy:
        </p>
        <p className="fundraisingText py-4 font-quicksand">
          Wesprzyj nasze zwierzaki !
        </p>

        <motion.div
          className="flexClass mx-auto w-11/12 xs:w-3/4 flex-wrap justify-center"
          initial={{ opacity: 0, y: 700 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="borderOrange borderStyle m-4 border-4">
            <img src={img5} alt="Dog" className="xl:w-[350px] xxl:w-[450px]" />
            <p className="fundraisingText font-quicksand">
              Zbiórka świąteczna
              <ArrowUpRightIcon className="fundraisingArrowIndigo arrow" />
            </p>
          </div>

          <div className="borderIndigo borderStyle m-4 border-4">
            <img src={img15} alt="Dog" className="xl:w-[350px] xxl:w-[450px]" />
            <p className="fundraisingText font-quicksand">
              Zbiórka na leczenie
              <ArrowUpRightIcon className="fundraisingArrowRed arrow" />
            </p>
          </div>

          <div className="borderOrange borderStyle m-4 border-4">
            <img src={img8} alt="Dog" className="xl:w-[350px] xxl:w-[450px]" />
            <p className="fundraisingText font-quicksand">
              Zbiórka na karmy
              <ArrowUpRightIcon className="fundraisingArrowIndigo arrow" />
            </p>
          </div>

          <div className="borderIndigo borderStyle m-4 border-4">
            <img src={img2} alt="Dog" className="xl:w-[350px] xxl:w-[450px]" />
            <p className="fundraisingText font-quicksand">
              Zbiórka na akcesoria (koce)
              <ArrowUpRightIcon className="fundraisingArrowRed arrow" />
            </p>
          </div>
        </motion.div>
        <p className="fundraisingText mx-auto w-3/4 text-center font-quicksand">
          Przeznaczone pieniądze w 100% przekazywane są zwierzakom !
        </p>
      </motion.div>
    </section>
  );
};

export default Fundraising;
