import Image from "next/image";
import { Geist, Geist_Mono, Noto_Sans } from "next/font/google";
import Footer from "@/components/footer";
import Meta from "@/components/meta";
import Library from "@/components/library";
import Header from "@/components/header";

const sans = Noto_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
})
;

export default function Home() {
  return (
    <div className={`${sans.className} flex flex-col min-h-screen`}>
      <Meta />
      <Header/>
      <Library />
      <Footer />
    </div>
  );
}
