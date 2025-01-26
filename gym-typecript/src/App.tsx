import { useEffect, useState } from "react";
import Navbar from "./componets/navbar/Navbar";

import { SelectedPage } from "./shared/type";
import Home from "./componets/home/Home";
import Benefits from "./componets/benefits/Benefits";

function App() {
  const [selectedPage, setselectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setisTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setisTopOfPage(true);
        setselectedPage(SelectedPage.Home);
      } else {
        setisTopOfPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window]);

  return (
    <div className="app bg-gray-100">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setselectedPage}
      />

      <Home setSelectedPage={setselectedPage} />

      <Benefits setSelectedPage={setselectedPage} />
    </div>
  );
}

export default App;
