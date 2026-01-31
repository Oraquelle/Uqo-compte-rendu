import React from "react";
import Audiowave from "./Audiowave";
import Image from "next/image";
import { Allura } from "next/font/google";

const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Politique() {
  return (
    <section
      id="politique"
      className="flex w-full relative"
    >
      <div className="absolute inset-0 -z-12">
        <Image
          src="/images/parlement.jpg"
          alt="Parlement d'ottawa en noir et blanc"
          fill
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-white/20" />
      </div>

      <div className="w-full gap-8">

        {/* ===== HEADER ===== */}
        <header className=" px-20 py-12 mt-20 mx-auto w-fit flex flex-col items-center text-center text-white bg-black/50 backdrop-blur-[2px] border border-[#050018]">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-wide uppercase relative mb-4 z-4">
              Contexte politique
              <hr className='h-2 w-full absolute text-white color-white -bottom-4 -right-7 -z-2 bg-white' />
          </h2>
          
          <p className="mt-6 text-base md:text-lg leading-relaxed max-w-2xl">
            Comprendre les tensions, les choix politiques et les enjeux
            identitaires qui traversent aujourd’hui le Canada et le Québec.
          </p>
        </header>

        {/* ===== PARTIE 1 : CONTEXTE POLITIQUE ===== */}
        <section className="px-6 py-8 mt-20 mx-auto w-fit flex flex-col items-center text-center text-white bg-black/50 backdrop-blur-[2px] border border-[#050018]">
          <h3 className="text-2xl font-bold uppercase text-center mb-6 bg-black/80  px-6 py-1  drop-shadow-[0.5px_0.5px_0_rgba(255,255,255,1)]">
            Contexte politique récent et tensions internationales
          </h3>
          <div className="flex">

          
            <div className="w-4/6 text-[#050018]">
              <h4 className="text-xl font-semibold capitalize text-center mb-10 text-white">
                Politique interne canadienne
              </h4>
              <div className="flex flex-rox justify-between gap-2 mx-10 mr-20">
                <div className="bg-white flex flex-col items-center justify-center px-4 py-4 w-56 z-5 -rotate-10">
                  <Image
                    src="/images/trudeau.jpg"
                    alt="Justin Trudeau"
                    width={250} height={250}
                    className="object-cover"
                  />
                  <p className={`${allura.className} mt-4 text-2xl text-center drop-shadow-[0.5px_0.5px_0_rgba(0,0,0,1)]`}>Justin Trudeau</p>
                  <p className="italic text-sm">1er ministre du 4 novembre 2015 au 14 mars 2025</p>
                </div>
                
                {/* FLÈCHE */}
                <div className="flex justify-center items-center scale-70 origin-center relative w-30 z-4">
                  <svg
                    width="300"
                    height="107"
                    viewBox="0 0 315 107"
                    className="overflow-visible absolute z-4 right-[135] top-20 -rotate-12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fillRule="evenodd">
                      {/* ligne principale */}
                      <path
                        id="Path-1"
                        className="path"
                        stroke="#db5862"
                        strokeWidth="5"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        d="M1.4,2.1c0,0,86,57,211.5,41.5s172.5-24.5,289,81"
                      />

                      {/* ligne pointillée */}
                      <path
                        className="dashed"
                        stroke="white"
                        strokeWidth="8"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        d="M1.4,2.1c0,0,86,57,211.5,41.5s172.5-24.5,289,81"
                      />

                      {/* flèche animée */}
                      <polyline
                        id="arrow"
                        points="0,-9 18,0 0,9 5,0"
                        fill="#db5862"
                      >
                        <animateMotion
                          rotate="auto"
                          begin="1s"
                          dur="1.6s"
                          repeatCount="1"
                          fill="freeze"
                        >
                          <mpath href="#Path-1" />
                        </animateMotion>
                      </polyline>
                    </g>
                  </svg>
                </div>

                <div className="bg-white flex flex-col items-center justify-center px-4 py-4 w-56 z-3 rotate-12">
                  <Image
                    src="/images/carney.webp"
                    alt="Mark Carney"
                    width={250} height={250}
                    className="object-cover"
                  />
                  <p className={`${allura.className} mt-4 text-2xl text-center drop-shadow-[0.5px_0.5px_0_rgba(0,0,0,1)]`}>Mark Carney</p>
                  <p className="italic text-sm">1er ministre actuel depuis le 14 mars 2025</p>
                </div>
              </div>

              {/* Audiowave */}
              <div className="flex justify-center mt-10">
                <Audiowave src="/audio/changement-ministre.m4a" variant="news" />
              </div>

            </div>
            
            <div className="w-2/6 border-l pl-10 border-white flex flex-col items-center">
              <h4 className="text-xl font-semibold capitalize text-center mb-10">
                Tensions internationales
              </h4>
              <div className="bg-white flex flex-col items-center justify-center px-4 py-4 w-56 text-[#050018]">
                  <Image
                    src="/images/trump.webp"
                    alt="Donald Trump"
                    width={250} height={250}
                    className="object-cover"
                  />
                  <p className={`${allura.className} mt-4 text-md text-center drop-shadow-[0.5px_0.5px_0_rgba(0,0,0,1)]`}>“Le Canada pourrait devenir le 51ᵉ État des États-Unis.”</p>
                  <p className="italic text-sm">Déclaration de Donald Trump, président des États Unis</p>
                </div>

              {/* Audiowave */}
              <div className="flex justify-center mt-10">
                <Audiowave src="/audio/tension-usa.m4a" variant="news" />
              </div>
            </div>
          </div>

         
        </section>

       

        {/* ===== PARTIE 2 : IMMIGRATION ===== */}
        <section className="mx-auto my-20 px-12 py-10 w-fit flex flex-col text-white bg-black/50 backdrop-blur-[2px] border border-[#050018]">
          
          <h3 className="text-2xl font-bold uppercase text-center mb-8 mx-auto backdrop-blur-[2px] bg-black/80 px-6 py-1 drop-shadow-[0.5px_0.5px_0_rgba(255,255,255,1)]">
            Immigration : une politique en mutation
          </h3>

          <div className="flex flex-row gap-12 items-center">

            {/* VISUEL */}
            <div>
              <div className="bg-white p-4 w-64 h-full">
                <div className="relative h-full min-h-60">
                <Image
                  src="/images/passeport-canada.webp"
                  alt="Immigration au Canada"
                  fill
                  className="object-cover"
                />
                </div>
                <p className="italic text-sm mt-2 text-center text-[#050018] h-fit">
                  Entre tradition d’accueil et durcissement des politiques migratoires.
                </p>
              </div>

            
            </div>

            {/* TEXTE */}
            <div className="flex flex-col items-start gap-6 max-w-md p-2">

              <p className="text-md font-semibold">
                Longtemps perçu comme une terre d’accueil,
                le Canada revoit aujourd’hui ses priorités en matière d’immigration.
              </p>

              <p className="text-sm uppercase tracking-wide ">
                Conditions d’entrée • Statuts • Programmes de mobilité
              </p>

              <p className={`${allura.className} text-md border-l-2 px-4 pr-20 text-justify border-white drop-shadow-[0.5px_0.5px_0_rgba(0,0,0,1)]`}>
                Certains programmes d’échange, comme celui dans lequel j’étais, le PQÉÉ (Programme québécois d’échanges étudiants internationaux)
                n’existent déjà plus.
              </p>

               {/* AUDIO */}
              <div className="flex justify-center pt-4">
                <Audiowave src="/audio/immigration.m4a" variant="news" />
              </div>

            </div>

          </div>
        </section>

         {/* ===== PARTIE 3 : IDENTITÉ & LANGUE ===== */}
        <section className="mx-auto my-20 px-12 py-8 w-fit flex flex-col text-white bg-black/50 backdrop-blur-[2px] border border-[#050018]">
          <h3 className="text-2xl font-bold uppercase text-center mb-6 backdrop-blur-[2px] bg-black/80 px-6 py-1 drop-shadow-[0.5px_0.5px_0_rgba(255,255,255,1)]">
            Identité québécoise et langue française
          </h3>
          <div className="flex flex-row justify-around items-center">
           
            <div className="flex flex-col gap-5 justify-between h-full items-start">
              <p className={`text-md w-60 text-justify p-2`}>Au Québec, la langue française est au cœur de l’identité, de la culture et de l’histoire de la province.</p>
              {/* Audiowave */}
              <div className="flex justify-center">
                <Audiowave src="/audio/identite-fr.m4a" variant="news" />
              </div>
            </div>
             <div className="bg-white flex flex-col items-center gap-2 justify-center px-4 py-4 w-56 rotate-2 text-[#050018]">
              <Image
                src="/images/drapeaux.jpg"
                alt="Drapeaux Québecois et français"
                width={250} height={250}
                className="object-cover "
              />
              <p className="italic text-sm">Le français est langue officielle au Canada depuis 1969 et langue officielle du Québec depuis 1977.</p>
            </div>
          </div>
          
        </section>

      </div>
    </section>
  );
};


