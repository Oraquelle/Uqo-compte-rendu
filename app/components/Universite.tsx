"use client";

import React, { useState } from 'react'
import Audiowave from "./Audiowave";
import Image from "next/image";
import {Allura} from "next/font/google";

const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Universite() {
    const [showTable, setShowTable] = useState(false)
    
  return (
    <section
      id="universite"
      className=" bg-[#dbe9e9] text-[#050018] w-full py-5"
    >
      {/* ===== ENTRÉE DE SECTION ===== */}
      <header className="mx-auto px-12 pb-10 pt-10 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-6xl font-semibold tracking-wide uppercase relative mb-4 z-4 text-[#050018]">
          Vie universitaire
            <hr className='h-2 w-full absolute text-[#050018] color-[#001930d0] -bottom-4 -right-7 -z-2 bg-[#050018]' />
        </h2>
      
        <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
          Étudier au Québec implique un rapport différent au temps, au travail et à l’autonomie.
        </p>

      </header>

     {/* ===== BLOC 1 : ORGANISATION ===== */}
      <section className="relative px-6 md:px-12 border border-[#050018] py-8 mx-8 my-8 mb-16 text-[#050018]">
        <h3 className="text-2xl absolute bg-[#dbe9e9] top-[-20px] left-[20px] px-5 font-bold uppercase">
          Organisation des études
        </h3>
        <div className='flex my-6 justify-between gap-10'>
          <p className="text-lg font-medium leading-relaxed">
            À l’université, les étudiants composent eux-mêmes leur parcours en choisissant leurs cours à chaque session, selon leur programme et leur rythme.
          </p>
            {/* Audio narratif */}
          <div className="">
            <Audiowave src="/audio/maitrise.m4a" variant="aurore" />
          </div>
        </div>

        {/* ===== BACCALAURÉAT / MAÎTRISE ===== */}
        <div className="flex justify-center gap-12 text-center items-center my-10 text-white">

          <div className="bg-[#001930d0] p-8 rounded-xl">
            <h4 className="text-xl font-bold border-white border-b-2 pb-2 mb-3">
              Baccalauréat
            </h4>
            <p>
              Temps plein : <br />
              <span className="font-medium">4 à 5 cours</span> par session
            </p>
          </div>

          <div className="bg-[#001930d0] p-8 rounded-xl">
            <h4 className="text-xl font-bold border-white border-b-2 pb-2 mb-3">
              Maîtrise
            </h4>
            <p>
              Temps plein : <br />
              <span className="font-medium">2 cours</span> par session
            </p>
          </div>
        </div>

        {/* ===== TITRE + ICÔNE INFO ===== */}

          {/* Icône info */}
          <div
            onMouseEnter={() => setShowTable(true)}
            onMouseLeave={() => setShowTable(false)}
            className="flex items-center w-fit justify-center rounded-full border border-[#050018] text-xl font-medium cursor-pointer px-4 py-2 bg-white/70"
          >
            <span className='flex items-center justify-center text-center rounded-full border border-[#050018] w-6 h-6 bg-white p-2 mr-2'>i</span> Comparaison des cycles scolaires
          </div>

          {/* ===== MODAL TABLEAU ===== */}
          {showTable && (
            <div
              onMouseEnter={() => setShowTable(true)}
              onMouseLeave={() => setShowTable(false)}
              className="
                absolute z-50 left-1/2 bottom-[100px] mt-6
                -translate-x-1/2
                transition-all duration-300 ease-out
              "
            >
              <div className="bg-white rounded-xl shadow-xl p-6 border border-[#050018]">

                <div className="mt-4">
                  <table className="w-full border-collapse text-xs md:text-sm text-center mx-auto">

                    {/* ===== ÂGES ===== */}
                    <thead>
                      <tr>
                        <th className="border p-2 font-medium text-left bg-gray-300">Âge</th>
                        {[
                          "6-7","7-8","8-9","9-10","10-11","11-12",
                          "12-13","13-14","14-15","15-16","16-17",
                          "17-18","18-19","19-20","20-21","21-22","22-23","23-24"
                        ].map(age => (
                          <th key={age} className="border p-2 font-normal bg-gray-200 whitespace-nowrap">
                            {age}
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody>

                      {/* ===== QUÉBEC – CYCLES ===== */}
                      <tr>
                        <th rowSpan={2} className="border p-2 text-left font-medium bg-gray-300">Québec</th>

                        <td colSpan={6} className="border bg-sky-200 font-medium">École primaire</td>
                        <td colSpan={5} className="border bg-indigo-200 font-medium">École secondaire</td>
                        <td colSpan={2} className="border bg-violet-200 font-medium">Cégep</td>
                        <td colSpan={3} className="border bg-fuchsia-200 font-medium">Baccalauréat</td>
                        <td colSpan={2} className="border bg-rose-200 font-medium">Maîtrise</td>
                      </tr>

                      <tr>
                        {["1","2","3","4","5","6"].map(v => (
                          <td key={v} className="border bg-sky-100">{v}</td>
                        ))}
                        {["1","2","3","4","5"].map(v => (
                          <td key={v} className="border bg-indigo-100">{v}</td>
                        ))}
                        {["1","2"].map(v => (
                          <td key={v} className="border bg-violet-100">{v}</td>
                        ))}
                        {["1","2","3"].map(v => (
                          <td key={v} className="border bg-fuchsia-100">{v}</td>
                        ))}
                        {["1","2"].map(v => (
                          <td key={v} className="border bg-rose-100">{v}</td>
                        ))}
                      </tr>

                      {/* ===== FRANCE ===== */}
                      <tr>
                        <th rowSpan={2} className="border p-2 text-left font-medium bg-gray-300">France</th>
                        <td colSpan={5} className="border bg-sky-200 font-medium">École primaire</td>
                        <td colSpan={4} className="border bg-indigo-200 font-medium">Collège</td>
                        <td colSpan={3} className="border bg-violet-200 font-medium">Lycée</td>
                        <td colSpan={3} className="border bg-fuchsia-200 font-medium">Licence</td>
                        <td colSpan={2} className="border bg-rose-200 font-medium">Master</td>
                        <td className="border"></td>
                      </tr>

                      <tr>
                        {["CP","CE1","CE2","CM1","CM2"].map(v => (
                          <td key={v} className="border bg-sky-100">{v}</td>
                        ))}
                        {["6e","5e","4e","3e"].map(v => (
                          <td key={v} className="border bg-indigo-100">{v}</td>
                        ))}
                        {["2nde","1re","Term."].map(v => (
                          <td key={v} className="border bg-violet-100">{v}</td>
                        ))}
                        {["1","2","3"].map(v => (
                          <td key={v} className="border bg-fuchsia-100">{v}</td>
                        ))}
                        {["1","2"].map(v => (
                          <td key={v} className="border bg-rose-100">{v}</td>
                        ))}
                        <td className="border"></td>
                      </tr>

                    </tbody>
                  </table>
                </div>

              </div>
            </div>
          )}
      </section>

      {/* ===== BLOC 2 : PROFILS ===== */}
      <section className="relative px-12 md:px-24 border border-[#050018] py-8 mx-8 my-16 bg-white">
        <h3 className="absolute  bg-white border border-[#050018] top-[-20px] left-[20px] text-2xl text-center px-5 py-2 font-bold uppercase">
          Profils des étudiants 
        </h3>
          <div className='flex flex-row gap-10 py-8 justify-center items-center'>
          
            <div className="flex flex-col justify-center gap-10 w-2/3">
              
              {/* Texte + audio */}
                <p className="leading-relaxed text-lg pr-6 text-justify">
                  En maîtrise, les groupes étaient souvent très réduits, rarement plus d’une dizaine
                  d’étudiants. <br/><br/>  La plupart avaient déjà une expérience professionnelle solide :
                  enseignants, artistes, médiateurs culturels ou travailleurs du milieu institutionnel.
                </p>  

                 {/* 🎧 Audio narratif */}
                <div className="">
                  <Audiowave src="/audio/profil-etudiant.m4a" variant="aurore" />
                </div>             
              
            </div>

            {/* ===== FICHE PORTRAIT ===== */}
            <div className="relative w-2/3 border border-[#050018] p-8 flex flex-col justify-center gap-2 bg-[#dbe9e9]">

                {/* Photo */}
                <div className="absolute w-30 aspect-[1/1] right-[-35px] top-[-35px] overflow-hidden drop-shadow-lg rounded-full">
                  <Image
                    src="/images/alexandra.jpeg"
                    alt="Portrait d'Alexandra"
                    fill
                    className="object-cover rotate-z-180 rotate-x-180"
                  />
                </div>

                {/* Prénom */}
                <h4 className="text-xl pl-2 font-bold text-[#050018] uppercase">
                  Alexandra
                </h4>

                {/* Infos rapides */}
                <div className=" pl-2 text-sm leading-snug">
                  <p>Professeure d’arts plastiques au secondaire</p>
                  <p>Étudiante en maîtrise</p>
                </div>

                {/* Phrase clé */}
                <p className={`${allura.className} border-l-2 border-[#050018] pl-4 text-xl drop-shadow-[0.5px_0.5px_0_rgba(0,0,0,1)]`}>
                  ” La maîtrise est pour moi un espace pour questionner ma pratique. ”
                </p>

                {/* Bullet points */}
                <p className=' pl-2 font-bold text-sm'>Ses objectifs :</p>
                <ul className="pl-2 list-disc list-inside text-sm space-y-1">
                  <li>Recherche sur la relation école / musée</li>
                  <li>Développement de projets culturels</li>
                  <li>Parcours professionnel déjà engagé</li>
                </ul>

              </div>
        </div>
      </section>

      {/* ===== BLOC DOUBLE : AUTONOMIE + RECHERCHE ===== */}
      <section className="mx-8 my-20 grid md:grid-cols-2 gap-10">

        {/* ===== AUTONOMIE ===== */}
        <div className="border border-[#050018] p-8 relative ">
          <h3 className="absolute top-[-18px] left-[20px] bg-[#dbe9e9] px-5 text-xl font-bold uppercase">
            Autonomie
          </h3>

          <div className="flex flex-col gap-6">
            <div className="flex justify-between text-center">
              <div>
                <p className="text-3xl font-bold">Pour un cours :</p>
                <p className="text-xs text-gray-600"> </p>
              </div>
               <div>
                <p className="text-3xl font-bold">3h</p>
                <p className="text-xs text-gray-600">en présentiel</p>
              </div>
              <div>
                <p className="text-3xl font-bold">+</p>
                <p className="text-xs text-gray-600"> </p>
              </div>
              <div>
                <p className="text-3xl font-bold">9h</p>
                <p className="text-xs text-gray-600">en travail perso</p>
              </div>
            </div>
            <div className='flex flex-row justify-between items-center'>
              <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                <li>Organisation personnelle</li>
                <li>Rythme autonome</li>
                <li>Progression dans le temps</li>
              </ul>
              <Audiowave src="/audio/autonomie.m4a" variant="aurore" />
            </div>
          </div>
        </div>

        {/* ===== RECHERCHE ===== */}
        <div className="border border-[#050018] p-8 relative ">
          <h3 className="absolute top-[-18px] left-[20px] bg-[#dbe9e9] px-5 text-xl font-bold uppercase">
            Recherche
          </h3>

          <div className="flex flex-col gap-6">
            <Audiowave src="/audio/memoire.m4a" variant="aurore" />

             {/* Comparaison visuelle */}
            <div className="flex flex-row gap-8 text-sm text-gray-700">
              <div>
                <h4 className="font-bold mb-2">Québec</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Lectures scientifiques nombreuses</li>
                  <li>Construction méthodologique</li>
                  <li>Recherche centrale</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-2">France</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Projets pratiques</li>
                  <li>Approche professionnalisante</li>
                  <li>Apprentissage par le terrain</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </section>


      {/* ===== TRANSITION ===== */}
      {/* <div className="mx-auto max-w-5xl px-12 md:px-24 py-32">
        <p className="text-gray-500 italic">
          Cette expérience universitaire influence aussi la manière d’habiter le territoire au quotidien.
        </p>
      </div> */}
    </section>
  );
}
