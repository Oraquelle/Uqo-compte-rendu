"use client";

import React, { useEffect, useState } from "react";

type Star = {
  x: number;
  y: number;
};

const Moon = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars = [...Array(18)].map(() => {
      const angle = Math.random() * Math.PI * 2;
      const radius = 260 + Math.random() * 220;

      return {
        x: 600 + Math.cos(angle) * radius,
        y: 520 + Math.sin(angle) * radius,
      };
    });

    setStars(generatedStars);
  }, []);

  return (
    <svg
      viewBox="0 0 1200 1200"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <g id="star">
          <rect x="9" y="0" width="2" height="20" fill="#FFE498" />
          <rect x="0" y="9" width="20" height="2" fill="#FFE498" />
        </g>

        <clipPath id="moonClip">
          <circle cx="600" cy="520" r="190" />
        </clipPath>
      </defs>

      {/* ⭐ ÉTOILES */}
      <g id="stars">
        {stars.map((star, i) => (
          <use
            key={i}
            href="#star"
            x={star.x}
            y={star.y}
            className="star"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
        ))}
      </g>


      {/* 🌙 LUNE */}
      <g id="moon">
        <circle cx="600" cy="520" r="190" fill="#ECDFBB" />

        {/* ombre */}
        <circle
          cx="650"
          cy="500"
          r="190"
          fill="#F1DEA3"
          clipPath="url(#moonClip)"
        />

        {/* cratères */}$
        <ellipse cx="540" cy="460" rx="40" fill="#E3D3A2" />
        <ellipse cx="700" cy="510" rx="52" fill="#E3D3A2" />
        <ellipse cx="600" cy="600" rx="48" fill="#E3D3A2" />
      </g>
    </svg>
  );
};

export default Moon;
