import { Noto_Sans } from "next/font/google";
import Meta from "@/components/meta";
import Library from "@/components/library";
import Header from "@/components/header";
import { useState } from "react";

const sans = Noto_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
})
;

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);  
  const [currentModal, setCurrentModal] = useState('featured');

  let handleClick = () => {
    setIsModalOpen(true);
    setCurrentModal('request');
  }

  return (
    <div className={`${sans.className} flex flex-col min-h-screen`}>
      <Meta />
      <Header handleClick={handleClick} />
      <Library isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setCurrentModal={setCurrentModal} currentModal={currentModal}/>
    </div>
  );
}
