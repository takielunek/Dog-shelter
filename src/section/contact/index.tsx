import { SelectedPage } from "@/shared/types";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/logo/logo_1.png"
import { motion } from "framer-motion";
import "./index.css";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const Contact = ({ setSelectedPage }: Props) => {
  return (
    <section id="kontakt" className="bg-indigo py-10">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}>
        <div>
          <p className="pb-10 text-center font-titan text-2xl text-peach drop-shadow-xl xxs:text-4xl w-11/12 mx-auto">
            Skontaktuj się z NAMI, ZWIERZAKAMI!
          </p>
          <div className="flexClass mx-auto w-11/12 md:w-3/4 xxl:w-1/2">
            <iframe
              className="h-[200px] sm:h-[400px] md:w-1/2"
              src="https://www.google.com/maps/embed/v1/place?q=Aleje+Jerozolimskie+2,+Warsaw,+Poland&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            ></iframe>
            <motion.div
              className="text-md mx-auto grid w-4/5 pt-10 pb-0 sm:pb-10 text-white drop-shadow-xl sm:text-xl  md:w-1/2 md:px-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, x: 80 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <img src={Logo} alt="Logo" className="h-[100px] mb-10 mx-auto" />
              <div className="flex gap-2">
                <MapPinIcon className="icon" />
                <p>al. Jerozolimskie 2, 00-375 Warszawa</p>
              </div>
              <div className="flex gap-2">
                <PhoneIcon className="icon" />
                <a href="tel:+48123123123">+48 123 123 123</a>
              </div>
              <div className="flex gap-2">
                <EnvelopeIcon className="icon" />
                <a href="mailto:takeme@home.pl">takeme@home.pl</a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
