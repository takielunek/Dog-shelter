import Logo from "@/assets/logo/logo_2.png";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import Link from "./Link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import "./index.css";


type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1080px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  return (
    <nav>
      <div className="fixed z-50 w-full bg-white font-quicksand">
        <div
          className={`${flexBetween} top-0 z-30 mx-auto w-full py-4 xxl:w-3/4`}
        >
          <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className={`${flexBetween} w-full gap-0 xs:gap-16`}>
              <img alt="logo" src={Logo} className="h-[40px] xs:h-[50px]" />

              {isAboveMediumScreens ? (
                <div className={`${flexBetween} w-full`}>
                  <div className={`${flexBetween} gap-8`}>
                    <div className="desktopHover">
                      <Link
                        page="Home"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                      />
                    </div>
                    <div className="desktopHover">
                      <Link
                        page="Zbiórki"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                      />
                    </div>
                    <div className="desktopHover">
                      <Link
                        page="O adopcji"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                      />
                    </div>
                    <div className="desktopHover">
                      <Link
                        page="Adoptuj"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                      />
                    </div>
                    <div className="desktopHover">
                      <Link
                        page="Kontakt"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                      />
                    </div>
                  </div>
                  <div className="rounded-xl bg-orange py-2 px-8 text-white duration-500 hover:bg-green-1">
                    <a href="/login">Zaloguj się</a>
                  </div>
                </div>
              ) : (
                <button
                  className="rounded-full bg-orange p-2"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  <Bars3Icon className="h-6 w-6 text-white" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className=" fixed top-0 bottom-0 z-40 w-full bg-green-1 font-quicksand">
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="mt-20 h-6 w-6 text-white" />
            </button>
          </div>

          <div className="flex flex-col items-center gap-10 py-10 text-xl text-white">
            <div className="mobileHover">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
            <div className="mobileHover">
              <Link
                page="Zbiórki"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
            <div className="mobileHover">
              <Link
                page="O adopcji"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
            <div className="mobileHover">
              <Link
                page="Adoptuj"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
            <div className="mobileHover">
              <Link
                page="Kontakt"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
