import React from "react";
import { SelectedPage } from "./type";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

function ActionButton({ children, setSelectedPage }: Props) {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      href={`#${SelectedPage.ContactUs}`}
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
    >
      {children}
    </AnchorLink>
  );
}

export default ActionButton;
