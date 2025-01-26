import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../../assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "../../shared/type";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useState } from "react";
import ActionButton from "../../shared/ActionButton";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
};

function Navbar({ selectedPage, setSelectedPage, isTopOfPage }: Props) {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)"); // for mobile screens
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const flexBetween = "flex items-center justify-between";
  const navBackground = isTopOfPage ? "" : "bg-primary-300 drop-shadow";

  return (
    <nav>
      <div
        className={`${navBackground} {flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* left side */}
            <img alt="logo" src={Logo} />

            {/* right side */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                {/* inner left side */}
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  ></Link>
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  ></Link>
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  ></Link>
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  ></Link>
                </div>

                {/* inner right side  */}
                <div className={`${flexBetween} gap-8 `}>
                  <p> sign in</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button className="rounded-full bg-secondary-500 p2">
                <Bars3Icon
                  className="h-6 w-6 text-white"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                ></Bars3Icon>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* mobile menu modal */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400"></XMarkIcon>
            </button>
          </div>

          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            ></Link>
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            ></Link>
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            ></Link>
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            ></Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
