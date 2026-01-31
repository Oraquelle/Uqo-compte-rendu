"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "intro", label: "Introduction" },
  { id: "universite", label: "Vie universitaire" },
  { id: "vie", label: "Vie quotidienne" },
  { id: "politique", label: "Contexte politique" },
  { id: "legende", label: "Légende" },
];

export default function Menu() {
  const [activeSection, setActiveSection] = useState<string>("intro");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-black/25 backdrop-blur-md">
      <ul className="flex justify-center gap-12 py-6 text-[11px] uppercase tracking-[0.35em] text-white">
        {sections.map((section) => (
          <li key={section.id} className="relative">
            <a
              href={`#${section.id}`}
              className={`transition-all duration-300 ${
                activeSection === section.id
                  ? "opacity-100"
                  : "opacity-60 hover:opacity-90"
              }`}
            >
              {section.label}

              {/* Indicateur actif */}
              {activeSection === section.id && (
                <span className="absolute left-1/2 -bottom-2 h-[1px] w-6 -translate-x-1/2 bg-white/80" />
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
