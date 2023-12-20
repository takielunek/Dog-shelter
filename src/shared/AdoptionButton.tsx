import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const AdoptionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-xl bg-green-1 px-6 xl:px-8 py-2 xl:py-3 font-quicksand text-white duration-300 hover:bg-green-2"
      onClick={() => setSelectedPage(SelectedPage.Adoption)}
      href={`#${SelectedPage.Adoption}`}
    >
      {children}
    </AnchorLink>
  );
};

export default AdoptionButton;
