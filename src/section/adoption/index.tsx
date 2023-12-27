import { SelectedPage, AdoptionType } from "@/shared/types";
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

const adoption: Array<AdoptionType> = [
  {
    image: img1,
    name: "Abbie",
    gender: "suczka",
    age: "12 miesięcy",
  },
  {
    image: img3,
    name: "Tobi",
    gender: "pies",
    age: "15 miesięcy",
  },
  {
    image: img4,
    name: "Gang",
    gender: "pies",
    age: "9 miesięcy",
  },
  {
    image: img7,
    name: "Rose",
    gender: "suczka",
    age: "10 miesięcy",
  },
  {
    image: img9,
    name: "Todie",
    gender: "pies",
    age: "25 miesięcy",
  },
  {
    image: img6,
    name: "Rubi",
    gender: "suczka",
    age: "17 miesięcy",
  },
  {
    image: img10,
    name: "Aura",
    gender: "suczka",
    age: "30 miesięcy",
  },
  {
    image: img12,
    name: "Rose",
    gender: "suczka",
    age: "10 miesięcy",
  },
  {
    image: img13,
    name: "Black",
    gender: "pies",
    age: "25 miesięcy",
  },
  {
    image: img14,
    name: "Buni",
    gender: "suczka",
    age: "17 miesięcy",
  },
  {
    image: img16,
    name: "Aura",
    gender: "suczka",
    age: "30 miesięcy",
  },
  {
    image: img17,
    name: "Kala",
    gender: "suczka",
    age: "10 miesięcy",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Adoption = ({ setSelectedPage }: Props) => {
  return (
    <section id="adoptuj" className="bg-white py-6 xs:py-10">
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
          {adoption.map((adoption: AdoptionType) => (
            <div className="borderStyle m-4 border-4 odd:border-peach even:border-green-1">
              <img
                src={adoption.image}
                alt="Dog"
                className="xl:w-[350px] xxl:w-[450px]"
              />
              <div className="fundraisingText flex flex-col font-quicksand">
                <div className="flex gap-4">
                  <p>imię:</p>
                  <p>{adoption.name}</p>
                </div>
                <div className="flex gap-4">
                  <p>płeć:</p>
                  <p>{adoption.gender}</p>
                </div>
                <div className="flex gap-4">
                  <p>wiek:</p>
                  <p>{adoption.age}</p>
                </div>
                <div className="mt-6 flex cursor-pointer justify-end text-green-1">
                  <p className="text-[12px] underline sm:text-[16px]">
                    Więcej informacji
                  </p>
                  <ArrowRightCircleIcon className="circleArrow" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Adoption;
