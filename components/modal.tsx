import React, { useRef } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
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
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative"
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>

        {title && <h2 className="text-lg font-semibold mb-4">{title}</h2>}

        <div className="mb-4">{children}</div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={handleCopy}
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export default Modal;
