"use client";

import { useRef, useState } from "react";

type Props = {
  src: string;
  variant?: "aurore" | "neige" | "news" | "message";
};

export default function Audiowave({
  src,
  variant = "aurore",
}: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const bars = 30;

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;

    const current =
      (audioRef.current.currentTime /
        audioRef.current.duration) *
      100;

    setProgress(current);
  };

  /* ===============================
     THEMES
  =============================== */

  const themes = {
  aurore: {
    container:
      "bg-gradient-to-b from-[#0a1220] to-[#111827]",
    barsGradient:
      "linear-gradient(110deg, #22d3ee, #a78bfa, #34d399)",
    inactiveBars: "rgba(255,255,255,0.35)",
    button:
      " text-white border border-white/30",
  },

  neige: {
    container:
      "bg-gradient-to-b from-[#699ccf] to-[#4968a8]",
    barsGradient:
      "linear-gradient(110deg, #ffffff, #e0f2fe, #dbeafe)",
    inactiveBars: "rgba(10,18,32,0.5)",
    button:
      " text-[rgba(10,18,32,10)] border border-[rgba(10,18,32,10)]",
    barAdapt:
    "",
  },

  news: {
    container:
      "bg-gradient-to-b from-[#dee0e3] to-[#c5cacf]",
    barsGradient:
      "linear-gradient(110deg, #699ccf, #4968a8)",
    inactiveBars: "rgba(5,0,24,0.5)",
    button:
      " text-[rgba(5,0,24,1)] border border-[rgba(5,0,24,1)]",
    barAdapt:
    "",
  },

  message: {
    container:
      "bg-[rgba(10,18,32,1)] px-0 py-0 ml-[-25px] scale-90 rounded-br-none ",
    barsGradient:
      "linear-gradient(110deg, #22d3ee, #a78bfa, #34d399)",
    inactiveBars: "rgba(255,255,255,0.35)",
    button:
      " text-white border border-white/30",
    barAdapt:
    "",
  },

};


  const theme = themes[variant];

  return (
    <div
      className={`flex items-center gap-4 rounded-lg px-5 py-3 w-fit ${theme.container}`}
    >
      {/* Play / Pause */}
      <button onClick={togglePlay} className={`w-8 h-8 flex items-center justify-center rounded-full font-bold shrink-0 transition-colors cursor-pointer ${theme.button}`}
        >
        {isPlaying ? "❚❚" : "▶"}
      </button>

      {/* Waveform */}
      <div className="relative flex items-end gap-[3px] h-8 overflow-hidden">
        {Array.from({ length: bars }).map((_, i) => {
          const barProgress = (i / bars) * 100;
          const active = barProgress < progress;

          return (
            <div
              key={i}
              className="w-[3px] rounded-full transition-all duration-150"
              style={{
                height: `${10 + (i % 6) * 4}px`,
                background: active
                  ? theme.barsGradient
                  : theme.inactiveBars,
              }}
            />
          );
        })}
      </div>

      {/* Audio */}
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
}
