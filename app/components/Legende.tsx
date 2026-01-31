import React from "react";
import Audiowave from "./Audiowave";
import Image from "next/image";

const Legende = () => {
  return (
    <section
      id="legende"
      className="flex w-full relative justify-center text-[#050018]"
    >
    {/* ===== IMAGE DE FOND ===== */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/foret.JPG"
          alt="Fôret en Automne à Montebello"
          fill
          priority
          className="object-cover"
        />
        {/* <div className="absolute inset-0 bg-black/20" /> */}
      </div>

      <div className="w-full px-12 py-14">

        {/* ===== HEADER ===== */}
        <header className="mx-auto px-12 pb-10 pt-10 mb-20 flex flex-col items-center text-center bg-white/50 backdrop-blur-[2px]">
          <h2 className="text-4xl md:text-6xl scale-87 text-nowrap font-semibold tracking-wide uppercase relative mb-3 z-4 text-[#050018]">
            Légendes et traditions orales
              <hr className='h-2 w-full absolute text-[#050018] color-[#001930d0] -bottom-4 -right-7 -z-2 bg-[#050018]' />
          </h2>
          <p className="mt-6 text-base text-lg mx-auto">
            Histoires, mémoires et savoirs transmis par la parole,
            au cœur des cultures autochtones.
          </p>
        </header>

        {/* ===== PARTIE 1 : PEUPLES AUTOCHTONES ===== */}
        <section className="mb-20 pb-10 pt-8 bg-white/60 backdrop-blur-[2px] flex flex-col items-center justify-center gap-4">
          <h3 className="text-2xl px-5 font-bold uppercase pb-2">
            Des peuples aux cultures multiples
          </h3>
          <div className="flex flex-row items-center justify-center gap-2 mx-10">
            <div className="relative">
              <Image
              src="/images/carte-autochtones.png"
              alt="Carte du Canada représentant le lieu et le nombre de population autochtone"
              className="object-cover z-1"
              width={1200} height={300} 
            />
            <Image
              src="/images/carte-legende.png"
              alt="Legende de la carte"
              className="object-cover absolute top-0 right-0 z-2 "
              width={150} height={150}
            />
            <p className="text-sm italic text-[#000000b3] absolute bottom-2 left-2">
              Carte des Premières Nations
            </p>
            </div>
            <div className="w-200 px-5 flex flex-col items-center">
              <p className="text-md text-justify pb-5">
                 Le Canada compte <span className="font-bold">plus d’1,8 millions d’autochtones</span>.  <br/><br/>  La Constitution canadienne reconnaît 3 groupes de peuples autochtones 
                <span className="font-bold"> : les Premières Nations, les Inuit et les Métis.</span> <br/> <br/> Pourtant, il existe plusieurs centaines de Premières Nations, chacune possédant <span className="font-bold">sa propre histoire, sa culture et son territoire.</span>
              </p>

              <a
                href="https://geo.sac-isc.gc.ca/cippn-fnpim/index-fra.html"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm text-center rounded-sm font-bold px-4 py-2 bg-[#050018] text-white transition hover:bg-linear-to-b from-[#699ccf] to-[#4968a8]"
              >
                Explorer la carte interactive des Premiers Nations
              </a>
            </div>
            
          </div>
        </section>

        {/* ===== PARTIE 2 : UNE MANIÈRE DE TRANSMETTRE ===== */}
        <section className="mb-20 pb-10 pt-10 bg-white/60 backdrop-blur-[2px] flex flex-col items-start justify-start gap-6">

          <div className="flex flex-row items-center justify-center gap-15">

            {/* VISUEL */}
            <div className="relative ml-70">
            <div className="bg-white p-4 w-64 rotate-6 z-2 drop-shadow-xl/25">
              <Image
                src="/images/totem-2.JPG"
                alt="Totem autochtone, symbole de mémoire et de territoire"
                width={260}
                height={400}
                className="object-cover"
              />
              <p className="italic text-sm mt-2 text-center text-[#000000b3]">
                Totem autochtone, symbole de mémoire et de territoire
              </p>
            </div>
            <div className="bg-white p-4 w-64 -rotate-6 z-4 absolute top-0 -left-55 drop-shadow-xl/25">
              <Image
                src="/images/totem.JPG"
                alt="Totem autochtone, symbole de mémoire et de territoire"
                width={260}
                height={400}
                className="object-cover"
              />
              <p className="italic text-sm mt-2 text-center text-[#000000b3]">
                Le territoire comme mémoire vivante.
              </p>
            </div>
            </div>

            {/* TEXTE */}
            <div className="max-w-md flex flex-col gap-5 items-start ">
              <h3 className="text-2xl font-bold uppercase ">
                Une manière de transmettre
              </h3>
              <p className="text-md text-justify">
                Dans de nombreuses cultures autochtones, le territoire n’est pas seulement un lieu de vie.
                Il est porteur de mémoire, de récits et de savoirs transmis au fil des générations.
              </p>

              <p className="text-md text-justify">
                Les paysages, les animaux et les éléments naturels participent à la transmission
                des histoires et des enseignements, en lien direct avec le vivant.
              </p>

              <p className="italic font-bold text-md border-l-2 pl-4">
                La parole est alors un vecteur essentiel de la mémoire collective.
              </p>
                  {/* AUDIO TRANSMISSION & ORALITÉ */}
              <div className="flex mt-6">
                <Audiowave src="/audio/maniere-de-transmettre.m4a" variant="aurore" />
              </div>

            </div>
          </div>

          

        </section>


        {/* ===== PARTIE 3 : LÉGENDE ANISHINAABE ===== */}
        <section className="mb-20 pb-10 pt-10 bg-white/60 backdrop-blur-[2px] flex flex-col items-center justify-center gap-2">

          <h3 className="text-2xl font-bold uppercase">
            La légende de l’île de la Tortue
          </h3>

          <p className="italic text-[#00000084]">
            Légende du peuple Anishinaabe
          </p>

          {/* TEXTE D’INTENTION */}
          <div className="py-6">
            <p className="text-md italic">
              Cette légende n’est ni écrite, ni illustrée.              
              Elle se transmet uniquement par la parole,
              dans le respect des traditions orales autochtones.
            </p>
          </div>

          {/* AUDIO LÉGENDE */}
          <div className="flex justify-center">
            <Audiowave src="/audio/ile-de-la-tortue.m4a" variant="aurore" />
          </div>

        </section>


      </div>
    </section>
  );
};

export default Legende;
