import Image from "next/image";
import React, { useRef } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  buttonName: string;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, buttonName }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const handleCopy = async () => {
    if (children) {
      try {
        await navigator.clipboard.writeText(
          typeof children === "string" ? children : "Copied content"
        );
        alert("Copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy", err);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleClickOutside}
    >
      <div
        ref={modalRef}
        className="modal-container bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl relative h-[80vh] flex flex-col"
      >
        <button
          className="absolute top-2 right-10 text-gray-500 hover:text-gray-800"
          onClick={handleCopy}
        >
          <Image src="/link.png" className="font-light text-gray-300" alt="Copy Link" width={20} height={20} />
        </button>

        <button
          className="absolute top-2 right-5 text-black hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>

        {title && <h2 className="text-2xl font-semibold text-center mb-4">{title}</h2>}

        <div className="modal-content mb-4 overflow-y-auto flex-grow min-h-0">{children}</div>

        <div className="mt-auto">
          <button
            className="modal-footer flex flex-row gap-3 items-center justify-center bg-black w-full text-white px-4 py-2 rounded-lg transition-opacity duration-500 ease-in-out hover:bg-gray-800"
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill={'white'}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 21L12 16L5 21V3H19V21Z" />
            </svg>
            {buttonName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
