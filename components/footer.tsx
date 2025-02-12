import Image from "next/image";
import React from "react";

const Footer = () => {
    return (
        <footer className="w-full bg-peach bg-white text-black py-4 shadow-md mt-auto">
            <div className="max-w-7xl mx-auto px-8 flex justify-center items-center">
                <Image
                    aria-hidden
                    src="/file.svg"
                    alt="File icon"
                    width={16}
                    height={16}
                    className="mr-2"
                />
                <p className="text-sm text-text-light text-black font-bold">
                    KPI TRACKER
                </p>
            </div>
        </footer>
    );
};

export default Footer;

