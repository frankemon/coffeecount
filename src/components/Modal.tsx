import React from "react";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
  buttonText: string;
}

const Modal: React.FC<ModalProps> = ({ onClose, children, buttonText }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-20">
      <div className="relative p-4 m-4 h-fit rounded-md bg-secondary border-2 border-primary shadow-md max-w-md">
        {children}
        <div className="flex w-full justify-center items-center pt-4">
          <button
            onClick={onClose}
            className="bg-secondary text-primary p-2 border-2 border-primary rounded-md cursor-pointer w-full lg:w-fit"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
