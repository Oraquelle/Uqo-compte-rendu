import Image from "next/image";
import { allura } from "@/app/layout";
import Audiowave from "./Audiowave";

export default function Intro() {
  return (
    <section
      id="intro"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Image de fond */}
      <Image
        src="/images/madame.JPG" 
        alt="Marché By de nuit"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay dégradé */}
    <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/20 to-black/O" />


      {/* Contenu */}
      <div className="relative z-10 flex h-full flex-col justify-center px-12 md:px-24 text-white">
        <h1 className="max-w-5xl text-5xl md:text-7xl font-semibold uppercase tracking-[0.15em] leading-tight">
          Retour d&apos;expérience
        </h1>
        <p className="my-4 max-w-5xl text-sm md:text-base tracking-wide text-white/85 leading-relaxed">
        Pendant 5 mois, j’ai réalisé un échange à l’Université du Québec en Outaouais, à Gatineau, tout près d’Ottawa. 
        <br/>
        Au fil du quotidien, j’ai découvert un territoire façonné par la rencontre de plusieurs cultures.
        Ce site invite à parcourir ces expériences, entre vie universitaire et pratiques locales dans un contexte politique particulier.
        </p>
        <h2 className={`${allura.className} font-thin capitalize text-3xl md:text-5xl mb-4`}>Loïne Pommier</h2>
        {/* Audio narratif */}
        <div className="">
            <Audiowave src="/audio/intro.m4a" variant="neige" />
        </div>
      </div>
    </section>
  );
}
