import React, { useState } from "react";
import cup from "../assets/cup.svg";

interface NavProps {
  onShowDisclaimerModal: () => void;
}

const Nav: React.FC<NavProps> = ({ onShowDisclaimerModal }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleMenuClick = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  const handleMenuItemClick = () => {
    setShowMenu(false);
  };

  return (
    <div className=" top-0 w-full border-b-2 border-primary font-bold bg-secondary">
      <nav className="relative flex justify-between items-center py-2 px-4 lg:p-4">
        <p>CoffeeCount</p>
        <div onClick={handleMenuClick} className="w-8 lg:hidden cursor-pointer">
          <img src={cup} alt="White image of a cup" />
        </div>
        <ul
          className={`lg:flex lg:flex-row lg:gap-8 lg:static lg:shadow-none lg:bg-transparent lg:border-none lg:space-y-0 lg:py-0 
            absolute z-50 top-14 left-0 mt-[-1px] lg:mt-0 w-full flex flex-col justify-end items-center py-8 space-y-8 gap-4 border-b-2 shadow-md bg-secondary transition-all duration-300 ease-in-out ${
              showMenu
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0 lg:max-h-full lg:opacity-100"
            } overflow-hidden`}
        >
          <li
            onClick={() => {
              handleMenuItemClick();
              onShowDisclaimerModal();
            }}
            className="cursor-pointer"
          >
            Disclaimer
          </li>
          <li onClick={handleMenuItemClick}>
            <a
              href="https://www.efsa.europa.eu/en/topics/topic/caffeine"
              target="_blank"
            >
              Recommendation source
            </a>
          </li>
          <li onClick={handleMenuItemClick}>
            <a href="https://en.wikipedia.org/wiki/Coffee" target="_blank">
              Coffee Wiki
            </a>
          </li>
          <li onClick={handleMenuItemClick}>
            <a href="https://github.com/frankemon" target="_blank">
              My GitHub
            </a>
          </li>
          <li onClick={handleMenuItemClick}>
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
