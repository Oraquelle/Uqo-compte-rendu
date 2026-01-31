"use client";

import { useEffect, useRef, useState } from "react";
import Audiowave from "./Audiowave";
import Image from "next/image";
import Globe from "./Globe";
import Sun from "./Sun";
import Moon from "./Moon";
import { Allura } from "next/font/google";
import Coin from "./Coin";

export const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Vie() {
  const transportRef = useRef<HTMLDivElement>(null);
  const [startAnim, setStartAnim] = useState(false);
  const [sunStep, setSunStep] = useState(0);

  /* ===== SOLEIL CLIQUABLE ===== */
    const handleSunClick = () => {
      if (sunStep < 4) {
        setSunStep((s) => s + 1);
      }
    };

  /* ===== SOCIAL MESSAGES ===== */
  const socialMessages = [
    { author: "them", text: "Salut ! Ça va ?" },
    { author: "me", text: "Oui, tranquille. Et toi ? Il a bien neigé cette nuit" },
    { author: "them", text: "Ouais, vraiment." },
    { author: "them", text: "J'ai passé 1h à déneiger mon char ce matin..." },
     { author: "me", text: "Ah ouais, relou" },
    { author: "me", text: "Ça te dit qu’on se voit semaine pro ?" },
    { author: "them", text: "Nan désolé, j'ai pas le temps." },
  ];

  const [visibleMessages, setVisibleMessages] = useState(0);
  const [showConversation, setShowConversation] = useState(false);

  /* ===== ANIMATION DES MESSAGES ===== */
  useEffect(() => {
    if (!showConversation) return;

    if (visibleMessages < socialMessages.length) {
      const t = setTimeout(() => {
        setVisibleMessages((v) => v + 1);
      }, 900);
      return () => clearTimeout(t);
    }
  }, [visibleMessages, showConversation]);

  /* ===== TRANSPORT OBSERVER ===== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStartAnim(true);
      },
      { threshold: 0.4 }
    );

    if (transportRef.current) observer.observe(transportRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="vie" className="relative min-h-screen w-full overflow-hidden">
      {/* ===== IMAGE DE FOND ===== */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/sentier.JPG"
          alt="Sentier enneigé au Québec"
          fill
          priority
          className="object-cover blur-[5px]"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-24">
        {/* ===== HEADER ===== */}
        <header className="md:col-span-3 px-6 py-8 mt-20 flex flex-col items-center text-center text-white bg-black/50 backdrop-blur-[2px]">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-wide uppercase relative mb-4 z-4">
              Vie quotidienne
              <hr className='h-2 w-full absolute text-white color-white -bottom-4 -right-7 -z-2 bg-white' />
          </h2>
          <p className="mt-6 text-base md:text-lg leading-relaxed max-w-2xl">
            Le quotidien s’organise autour du climat, des déplacements et des relations sociales,
            dans un rythme parfois différent de celui de la France.
          </p>
        </header>

        {/* ===== Neige ===== */}
        <section className="bg-black/50 backdrop-blur-[2px] p-6 text-white">
          <h3 className="text-2xl font-bold uppercase text-center pb-4">
            Vivre avec la neige
          </h3>
          <p className={`${allura.className} text-xl px-2 text-justify leading-relaxed`}>
            ”Au début, la neige peut sembler magique… ou un peu pesante si elle s’éternise.
            Mais au final, on finit toujours par s’y habituer.”
          </p>
          <div className="ml-[-30px] hover:scale-105 cursor-pointer transition-all duration-1000 ease-[0.4,0,0.2,1]">
            <Globe />
          </div>
          <div className="flex justify-center mt-4">
            <Audiowave src="/audio/neige.m4a" variant="neige" />
          </div>
        </section>

        {/* ===== Social ===== */}
        <section className="bg-black/50 backdrop-blur-[2px] p-6 text-white">
          <h3 className="text-2xl font-bold uppercase mb-6 text-center mx-[-2px]">
            Relations sociales
          </h3>

          
          {!showConversation && (
            <div className="flex flex-1 justify-center items-center">
              <button
                onClick={() => {
                  setShowConversation(true);
                  setVisibleMessages(0);
                }}
                className="px-6 py-2 rounded-full 
                text-[rgba(10,18,32,1)] 
                cursor-pointer
                bg-gradient-to-b from-[#699ccf] to-[#4968a8]
                hover:scale-105 transition"
              >
                Voir la conversation
              </button>
            </div>
          )}

          {showConversation && (
            <div className="flex flex-col gap-3 max-w-md mx-auto mt-6 bg-white/35 p-4 rounded-2xl">
              
              {/* Messages texte */}
              {socialMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`
                    px-4 py-2 rounded-lg text-sm max-w-[85%]
                    transition-opacity duration-500
                    ${i < visibleMessages ? "opacity-100" : "opacity-0 pointer-events-none"}
                    ${
                      msg.author === "me"
                        ? "self-end text-right text-white bg-[rgba(10,18,32,1)] rounded-br-none "
                        : "self-start text-left bg-white/80 text-[rgba(10,18,32,0.8)] rounded-bl-none"
                    }
                  `}
                >
                  {msg.text}
                </div>
              ))}

              {/* Message audio (comme un vrai message) */}
              <div
                className={`
                  max-w-[85%] px-3 py-2 rounded-lg
                  bg-[rgba(10,18,32,1)]
                  self-end rounded-br-none
                  transition-opacity duration-500
                  overflow-hidden
                  ${
                    visibleMessages === socialMessages.length
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }
                `}
              >
                <Audiowave src="/audio/relations-sociales.m4a" variant="message" />
              </div>

            </div>
          )}

        </section>

        {/* ===== Soleil ===== */}
        <section className="row-span-2 bg-black/50 backdrop-blur-[2px] p-6 text-white relative overflow-hidden">
          <h3 className="text-2xl font-bold uppercase mb-6 text-center">
            Au rythme du soleil
          </h3>

          <div className="flex justify-center mb-4">
            <Audiowave src="/audio/soleil.m4a" variant="neige" />
          </div>

          {/* CONTENEUR */}
          <div className="relative h-[24rem] flex flex-col items-center">

            {/* ===== ÉLÉMENTS ===== */}
            <div className="mt-10 flex flex-col gap-10 w-full items-center text-center">

              {/* Petit-déjeuner */}
              <div
                className={`
                  flex flex-col items-center gap-1
                  transition-all duration-700
                  ${sunStep >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                `}
              >
                <Image src="/images/icons/petit-dej.png" alt="Petit déjeuner" width={80} height={80} />
                <p className="font-bold text-xl">6h30 – 7h30</p>
                <p className="text-md opacity-90">
                  Déjeuner au lever du soleil
                </p>
              </div>

              {/* Dîner */}
              <div
                className={`
                  flex flex-col items-center gap-1
                  transition-all duration-700 delay-100
                  ${sunStep >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                `}
              >
                <Image src="/images/icons/dej.png" alt="Déjeuner" width={80} height={80} />
                <p className="font-bold text-xl">11h30 – 12h30</p>
                <p className="text-md opacity-90">
                  Dîner lorsque le soleil est au plus haut
                </p>
              </div>

              {/* Souper */}
              <div
                className={`
                  flex flex-col items-center gap-1
                  transition-all duration-700 delay-200
                  ${sunStep >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                `}
              >
                <Image src="/images/icons/diner.png" alt="Diner" width={80} height={80} />
                <p className="font-bold text-xl">16h45 – 17h45</p>
                <p className="text-md opacity-90">
                  Souper après le coucher du soleil
                </p>
              </div>
              <div
              className={`
                transition-all duration-700 delay-200
                ${sunStep >= 4 ? "opacity-100 translate-y-[-3.5rem]" : "opacity-0 translate-y-4"}
              `}>
                  <Moon />
              </div>
            </div>

            {/* ===== SOLEIL (rideau) ===== */}
            <div
              onClick={handleSunClick}
              className={`
                absolute top-0 left-1/2 -translate-x-1/2
                cursor-pointer transition-all duration-1000 ease-[0.4,0,0.2,1]
                scale-150 hover:scale-175 transition
                ${sunStep === 0 && "translate-y-0"}
                ${sunStep === 1 && "translate-y-[10rem]"}
                ${sunStep === 2 && "translate-y-[22rem]"}
                ${sunStep === 3 && "translate-y-[33rem]"}
                ${sunStep === 4 && "translate-y-[40rem] opacity-0 scale-95"}
              `}

            >
              <Sun />
            </div>

          </div>
        </section>



        {/* ===== Transport ===== */}
          <section
            ref={transportRef}
            className="md:col-span-2 bg-black/50 backdrop-blur-[2px] p-6 text-white"
          >
            
            <div className="flex flex-row justify-center gap-10 items-center mt-6 mb-2">
              <h3 className="text-2xl font-bold uppercase  text-center">
              Se déplacer
            </h3>
              <Audiowave src="/audio/se-deplacer.m4a" variant="neige" />
            </div>

            <div className="relative h-36 overflow-hidden mx-10 ml-17">

              {/* ===== VOITURE ===== */}
              <div className="absolute top-4 left-0 w-full h-12 overflow-hidden">

                {/* Traînée */}
                <div
                  className={`
                    absolute left-0 top-1/2 -translate-y-1/2 h-9
                    transition-all duration-[1800ms] ease-out
                    ${startAnim ? "w-[14rem]" : "w-0"}
                  `}
                >
                  {/* fond flouté */}
                  <div
                    className="
                      absolute inset-0 
                      bg-gradient-to-r from-transparent  via-pink-400 via-[#ffa5de] to-[#fff7a5]
                      opacity-90
                    "
                  />

                  {/* texte */}
                  <div className="relative z-10 h-full flex items-center justify-end pr-8">
                    <span className="text-xl font-bold text-white">
                      7 min
                    </span>
                  </div>
                </div>

                {/* Voiture */}
                <div
                  className={`
                    absolute left-0 top-1/2 -translate-y-1/2
                    transition-transform duration-[1800ms] ease-out
                    ${startAnim ? "translate-x-[13rem]" : ""}
                  `}
                >
                  <Image
                    src="/images/icons/voiture-color.png"
                    alt="Voiture"
                    width={72}
                    height={72}
                    className="drop-shadow-xl"
                  />
                </div>
              </div>

              {/* ===== BUS ===== */}
              <div className={`absolute bottom-4 left-0 w-full h-12 overflow-hidden`}>

                {/* Traînée */}
                <div
                  className={`
                    absolute left-0 top-1/2 -translate-y-1/2 h-9
                    transition-all duration-[3500ms] ease-out
                    ${startAnim ? "w-[22rem]" : "w-0"}
                  `}
                >
                  {/* fond flouté */}
                  <div
                    className="
                      absolute inset-0 
                      bg-gradient-to-r from-transparent via-pink-400 via-pink-400 via-[#ffa5de] via-[#ffa5de] via-[#fff7a5] to-[#fff7a5]
                       opacity-80
                    "
                  />

                  {/* texte */}
                  <div className="relative z-10 h-full flex items-center justify-end pr-8">
                    <span className="text-xl font-bold text-white">
                      40 min
                    </span>
                  </div>
                </div>

                {/* Bus */}
                <div
                  className={`
                    absolute left-0 top-1/2 -translate-y-1/2
                    transition-all duration-[3500ms] ease-out
                    ${startAnim ? "translate-x-[21rem]" : ""}
                  `}
                >
                  <Image
                    src="/images/icons/autobus-color.png"
                    alt="Bus"
                    width={72}
                    height={72}
                    className="drop-shadow-xl"
                  />
                </div>
              </div>
              
            </div>

            <p className="text-center text-md italic opacity-80">
              Temps de trajet entre chez moi et l’université
            </p>

            
          </section>


        {/* ===== Nourriture ===== */}
        <section className="md:col-span-3 bg-black/50 backdrop-blur-[2px] p-8 text-white mb-20">
          <h3 className="text-2xl font-bold uppercase mb-12 text-center">
            Nourriture
          </h3>

          <div className="flex justify-center gap-10 flex-wrap mb-12">

            {/* ===== PIÈCES ===== */}
            <Coin
              icon="/images/icons/poutine.png"
              question="Comment s’appelle le fromage utilisé dans la poutine ?"
              img="/images/poutine.JPG"
              answer="On l’appelle le fromage «squik-squik». Son nom vient de sa texture et du bruit qu’il fait sous la dent lorsqu’on le mange."
            />

            <Coin
              icon="/images/icons/bleuet.png"
              question="La bleuet est le fruit emblématique de quelle province ?"
              img="/images/bleuet.jpg"
              answer="Le bleuet est un symbole fort du Québec, qui en est le premier producteur mondial. La province se distingue aussi par sa production de canneberges."
            />

            <Coin
              icon="/images/icons/sirop-derable.png"
              question="Le sirop d’érable a-t-il toujours le même goût ?"
              img="/images/sirop.JPG"
              answer="Pas du tout ! Son goût varie notamment selon la période de récolte : plus clair et doux au début, plus foncé et intense à la fin."
            />

          </div>

          <div className="flex justify-center">
            <Audiowave src="/audio/nourriture.m4a" variant="neige" />
          </div>
        </section>
      </div>
    </section>
  );
}
