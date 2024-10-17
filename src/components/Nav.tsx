import React from "react";

const Nav: React.FC = () => {
  return (
    <div className="fixed top-0 w-full border-b p-4 border-white">
      <nav className="flex justify-between">
        <p>CoffeeCount</p>
        <ul className="flex justify-center items-center gap-4">
          <li>
            <a href="#" target="_blank">
              Source?
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
