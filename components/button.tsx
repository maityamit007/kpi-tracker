import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export default function Button({
  children,
  onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 flex items-center gap-2 flex-row rounded-lg font-medium transition bg-gray-500 text-white hover:bg-gray-300`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className="w-5 h-5s"
      >
        <path
          fillRule="evenodd"
          d="M12 4a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5a1 1 0 0 1 1-1z"
          clipRule="evenodd"
        />
      </svg>
      {children}
    </button>
  );
}
