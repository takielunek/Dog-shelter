import { SelectedPage } from "@/shared/types";
import img1 from "@/assets/dogs/img_1.jpg";
import img3 from "@/assets/dogs/img_3.jpg";
import img4 from "@/assets/dogs/img_4.jpg";
import img6 from "@/assets/dogs/img_6.jpg";
import img7 from "@/assets/dogs/img_7.jpg";
import img9 from "@/assets/dogs/img_9.jpg";
import img10 from "@/assets/dogs/img_10.jpg";
import img12 from "@/assets/dogs/img_12.jpg";
import img13 from "@/assets/dogs/img_13.jpg";
import img14 from "@/assets/dogs/img_14.jpg";
import img16 from "@/assets/dogs/img_16.jpg";
import img17 from "@/assets/dogs/img_17.jpg";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import "./index.css";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Adoption = ({ setSelectedPage }: Props) => {
  return (
    <section id="adoption" className="bg-white py-6 xs:py-10">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Adoption)}
      >
        <p className=" text-center font-titan text-2xl text-green-1 xxs:text-4xl ">
          Adoptuj MNIE:
        </p>
        <p className="fundraisingText mx-auto w-3/4 py-4 text-center font-quicksand">
          Wybierz zwierzaka i umów się z nami na spotkanie !
        </p>
        <div className="flexClass mx-auto w-11/12 flex-wrap justify-center xs:w-3/4">
          <div className="borderRed borderStyle m-4 border-4">
            <img src={img1} alt="Dog" className="xl:w-[350px] xxl:w-[450px]" />
            <div className="fundraisingText flex flex-col font-quicksand">
              <div className="flex gap-4">
                <p>imię:</p>
                <p>Abbie</p>
              </div>
              <div className="flex gap-4">
                <p>płeć:</p>
                <p>suczka</p>
              </div>
              <div className="flex gap-4">
                <p>wiek:</p>
                <p>12 miesięcy</p>
              </div>
              <div className="mt-6 flex cursor-pointer justify-end text-green-1">
                <p className="text-[12px] underline sm:text-[16px]">
                  Więcej informacji
                </p>
                <ArrowRightCircleIcon className="circleArrow" />
              </div>
            </div>
          </div>
          <div className="borderGreen borderStyle m-4 border-4">
            <img src={img3} alt="Dog" className="xl:w-[350px] xxl:w-[450px]" />
            <div className="fundraisingText flex flex-col font-quicksand">
              <div className="flex gap-4">
                <p>imię:</p>
                <p>Tobi</p>
              </div>
              <div className="flex gap-4">
                <p>płeć:</p>
                <p>pies</p>
              </div>
              <div className="flex gap-4">
                <p>wiek:</p>
                <p>15 miesięcy</p>
              </div>
              <div className="mt-6 flex cursor-pointer justify-end text-green-1">
                <p className="text-[12px] underline sm:text-[16px]">
                  Więcej informacji
                </p>
                <ArrowRightCircleIcon className="circleArrow" />
              </div>
            </div>
          </div>

          <div className="borderIndigo borderStyle m-4 border-4">
            <img src={img4} alt="Dog" className="xl:w-[350px] xxl:w-[450px]" />
            <div className="fundraisingText flex flex-col font-quicksand">
              <div className="flex gap-4">
                <p>imię:</p>
                <p>Gang</p>
              </div>
              <div className="flex gap-4">
                <p>płeć:</p>
                <p>pies</p>
              </div>
              <div className="flex gap-4">
                <p>wiek:</p>
                <p>9 miesięcy</p>
              </div>
              <div className="mt-6 flex cursor-pointer justify-end text-green-1">
                <p className="text-[12px] underline sm:text-[16px]">
                  Więcej informacji
                </p>
                <ArrowRightCircleIcon className="circleArrow" />
              </div>
            </div>
          </div>
          <div className="borderPeach borderStyle m-4 border-4">
            <img src={img7} alt="Dog" className="xl:w-[350px] xxl:w-[450px]" />
            <div className="fundraisingText flex flex-col font-quicksand">
              <div className="flex gap-4">
                <p>imię:</p>
                <p>Rose</p>
              </div>
              <div className="flex gap-4">
                <p>płeć:</p>
                <p>suczka</p>
              </div>
              <div className="flex gap-4">
                <p>wiek:</p>
                <p>10 miesięcy</p>
              </div>
              <div className="mt-6 flex cursor-pointer justify-end text-green-1">
                <p className="text-[12px] underline sm:text-[16px]">
                  Więcej informacji
                </p>
                <ArrowRightCircleIcon className="circleArrow" />
              </div>
            </div>
          </div>
          <div className="borderRed borderStyle m-4 border-4">
            <img src={img9} alt="Dog" className="xl:w-[350px] xxl:w-[450px]" />
            <div className="fundraisingText flex flex-col font-quicksand">
              <div className="flex gap-4">
                <p>imię:</p>
                <p>Todie</p>
              </div>
              <div className="flex gap-4">
                <p>płeć:</p>
                <p>pies</p>
              </div>
              <div className="flex gap-4">
                <p>wiek:</p>
                <p>25 miesięcy</p>
              </div>
              <div className="mt-6 flex cursor-pointer justify-end text-green-1">
                <p className="text-[12px] underline sm:text-[16px]">
                  Więcej informacji
                </p>
                <ArrowRightCircleIcon className="circleArrow" />
              </div>
            </div>
          </div>
          <div className="borderGreen borderStyle m-4 border-4">
            <img src={img6} alt="Dog" className="xl:w-[350px] xxl:w-[450px]" />
            <div className="fundraisingText flex flex-col font-quicksand">
              <div className="flex gap-4">
                <p>imię:</p>
                <p>Rubi</p>
              </div>
              <div className="flex gap-4">
                <p>płeć:</p>
                <p>suczka</p>
              </div>
              <div className="flex gap-4">
                <p>wiek:</p>
                <p>17 miesięcy</p>
              </div>
              <div className="mt-6 flex cursor-pointer justify-end text-green-1">
                <p className="text-[12px] underline sm:text-[16px]">
                  Więcej informacji
                </p>
                <ArrowRightCircleIcon className="circleArrow" />
              </div>
            </div>
          </div>

          <div className="borderIndigo borderStyle m-4 border-4">
            <img src={img10} alt="Dog" className="xl:w-[350px] xxl:w-[450px]" />
            <div className="fundraisingText flex flex-col font-quicksand">
              <div className="flex gap-4">
                <p>imię:</p>
                <p>Aura</p>
              </div>
              <div className="flex gap-4">
                <p>płeć:</p>
                <p>suczka</p>
              </div>
              <div className="flex gap-4">
                <p>wiek:</p>
                <p>30 miesięcy</p>
              </div>
              <div className="mt-6 flex cursor-pointer justify-end text-green-1">
                <p className="text-[12px] underline sm:text-[16px]">
                  Więcej informacji
                </p>
                <ArrowRightCircleIcon className="circleArrow" />
              </div>
            </div>
          </div>
          <div className="borderPeach borderStyle m-4 border-4">
            <img src={img12} alt="Dog" className="xl:w-[350px] xxl:w-[450px]" />
            <div className="fundraisingText flex flex-col font-quicksand">
              <div className="flex gap-4">
                <p>imię:</p>
                <p>Rose</p>
              </div>
              <div className="flex gap-4">
                <p>płeć:</p>
                <p>suczka</p>
              </div>
              <div className="flex gap-4">
                <p>wiek:</p>
                <p>10 miesięcy</p>
              </div>
              <div className="mt-6 flex cursor-pointer justify-end text-green-1">
                <p className="text-[12px] underline sm:text-[16px]">
                  Więcej informacji
                </p>
                <ArrowRightCircleIcon className="circleArrow" />
              </div>
            </div>
          </div>
          <div className="borderRed borderStyle m-4 border-4">
            <img src={img13} alt="Dog" className="xl:w-[350px] xxl:w-[450px]" />
            <div className="fundraisingText flex flex-col font-quicksand">
              <div className="flex gap-4">
                <p>imię:</p>
                <p>Black</p>
              </div>
              <div className="flex gap-4">
                <p>płeć:</p>
                <p>pies</p>
              </div>
              <div className="flex gap-4">
                <p>wiek:</p>
                <p>25 miesięcy</p>
              </div>
              <div className="mt-6 flex cursor-pointer justify-end text-green-1">
                <p className="text-[12px] underline sm:text-[16px]">
                  Więcej informacji
                </p>
                <ArrowRightCircleIcon className="circleArrow" />
              </div>
            </div>
          </div>
          <div className="borderGreen borderStyle m-4 border-4">
            <img src={img14} alt="Dog" className="xl:w-[350px] xxl:w-[450px]" />
            <div className="fundraisingText flex flex-col font-quicksand">
              <div className="flex gap-4">
                <p>imię:</p>
                <p>Buni</p>
              </div>
              <div className="flex gap-4">
                <p>płeć:</p>
                <p>suczka</p>
              </div>
              <div className="flex gap-4">
                <p>wiek:</p>
                <p>17 miesięcy</p>
              </div>
              <div className="mt-6 flex cursor-pointer justify-end text-green-1">
                <p className="text-[12px] underline sm:text-[16px]">
                  Więcej informacji
                </p>
                <ArrowRightCircleIcon className="circleArrow" />
              </div>
            </div>
          </div>

          <div className="borderIndigo borderStyle m-4 border-4">
            <img src={img16} alt="Dog" className="xl:w-[350px] xxl:w-[450px]" />
            <div className="fundraisingText flex flex-col font-quicksand">
              <div className="flex gap-4">
                <p>imię:</p>
                <p>Aura</p>
              </div>
              <div className="flex gap-4">
                <p>płeć:</p>
                <p>suczka</p>
              </div>
              <div className="flex gap-4">
                <p>wiek:</p>
                <p>30 miesięcy</p>
              </div>
              <div className="mt-6 flex cursor-pointer justify-end text-green-1">
                <p className="text-[12px] underline sm:text-[16px]">
                  Więcej informacji
                </p>
                <ArrowRightCircleIcon className="circleArrow" />
              </div>
            </div>
          </div>
          <div className="borderPeach borderStyle m-4 border-4">
            <img src={img17} alt="Dog" className="xl:w-[350px] xxl:w-[450px]" />
            <div className="fundraisingText flex flex-col font-quicksand">
              <div className="flex gap-4">
                <p>imię:</p>
                <p>Kala</p>
              </div>
              <div className="flex gap-4">
                <p>płeć:</p>
                <p>suczka</p>
              </div>
              <div className="flex gap-4">
                <p>wiek:</p>
                <p>10 miesięcy</p>
              </div>
              <div className="mt-6 flex cursor-pointer justify-end text-green-1">
                <p className="text-[12px] underline sm:text-[16px]">
                  Więcej informacji
                </p>
                <ArrowRightCircleIcon className="circleArrow" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Adoption;
