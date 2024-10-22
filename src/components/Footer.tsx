import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="fixed bottom-0 w-full border-t-2 p-4 border-primary font-bold bg-secondary">
      <footer className="flex justify-center items-center">
        <p>© 2024 CoffeeCount. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
