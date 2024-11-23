import React from "react";

const Footer: React.FC = () => {
  return (
    <div className=" bottom-0 w-full border-t-2 p-2 border-primary font-bold bg-secondary">
      <footer className="flex justify-center items-center">
        <p>© {new Date().getFullYear()} CoffeeCount. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
