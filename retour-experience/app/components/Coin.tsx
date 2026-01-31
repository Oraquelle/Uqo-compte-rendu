import { useState } from "react";
import Image from "next/image";

export default function Coin({
  question,
  answer,
  icon,
  img,
}: {
  question: string;
  answer: string;
  icon: string;
  img: string;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="w-70 h-80 perspective cursor-pointer"
    >
      <div
        className={`
          relative w-full h-full 
          transition-transform duration-700 ease-in-out
          transform-style-preserve
          ${flipped ? "rotate-y-180" : ""}
        `}
      >
        {/* ===== Recto ===== */}
        <div
          className="
            absolute inset-0 rounded-2xl
            bg-gradient-to-br from-[#6fa8dc] to-[#3d6fa6]
            flex flex-col items-center justify-center
            gap-5 px-4
            backface-hidden shadow-lg
          "
        >
          <Image
            src={icon}
            alt=""
            width={60}
            height={60}
            className="opacity-90"
          />

          <p className="text-md font-semibold text-white text-center">
            {question}
          </p>
        </div>

        {/* ===== Verso ===== */}
        <div
          className="
            absolute inset-0 rounded-2xl
            bg-gradient-to-br from-[#2c4f7c] to-[#1e3556]
            flex flex-col items-center justify-start
            px-5 py-5 text-justufy
            rotate-y-180 backface-hidden shadow-lg
    
          "
        >
          <div className="relative overflow-hidden w-[250px] h-[150px] rounded-xl">
           <Image
            src={img}
            alt=""
            fill
            className=" object-cover"
          />
          </div>

          <p className="text-sm text-white leading-relaxed pt-5 text-center">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
