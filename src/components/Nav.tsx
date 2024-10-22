import React, { useState } from "react";
import cup from "../assets/cup.svg";

const Nav: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="fixed top-0 w-full border-b border-primary font-bold  bg-secondary">
      <nav className="relative flex justify-between items-center p-4">
        <p>CoffeeCount</p>
        <div onClick={handleMenuClick} className="w-8 lg:hidden cursor-pointer">
          <img src={cup} alt="White image of a cup" />
        </div>
        <ul
          className={`lg:flex lg:flex-row lg:gap-4 lg:static lg:shadow-none lg:bg-transparent lg:border-none lg:space-y-0 lg:py-0 
            absolute z-10 top-20 left-0 w-full flex flex-col justify-end items-center py-8 space-y-8 gap-4 border-b-2 shadow-md bg-secondary transition-all duration-300 ease-in-out ${
              showMenu
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0 lg:max-h-full lg:opacity-100"
            } overflow-hidden`}
          bg-red-300
        >
          <li>
            <a
              href="https://www.efsa.europa.eu/en/topics/topic/caffeine"
              target="_blank"
            >
              Recommendation source
            </a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Coffee" target="_blank">
              Coffee Wiki
            </a>
          </li>
          <li>
            <a href="https://github.com/frankemon" target="_blank">
              My GitHub
            </a>
          </li>
          <li>
            <a href="https://frankemon.github.io/" target="_blank">
              More from me
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
