import Image from "next/image";

import Intro from "./components/Intro";
import University from "./components/Universite";
import Vie from "./components/Vie";
import Politique from "./components/Politique";
import Legende from "./components/Legende";

export default function Home() {
  return (
    <main className="w-full">
      {/* <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />

          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">*/}
  

      {/* ===== SECTIONS ===== */}
      <Intro />
      <University />
      <Vie />
      <Politique />
      <Legende />
    </main>
  );
}
