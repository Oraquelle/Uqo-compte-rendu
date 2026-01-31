"use client";

import { useEffect, useRef } from "react";

/* ===== CLASSE FLAKE (HORS DU COMPOSANT) ===== */
class Flake {
  x: number;
  y: number;
  finalY: number;
  r: number;
  speedY: number;

  constructor(
    x: number,
    y: number,
    canvasWidth: number,
    data: Uint8ClampedArray
  ) {
    this.x = Math.floor(x);
    this.y = Math.floor(y);

    let destination = canvasWidth;

    for (let i = this.y; i < canvasWidth; i++) {
      if (data[(this.x + canvasWidth * i) * 4 + 3] > 10) {
        destination = i - 1;
        break;
      }
    }

    this.finalY = destination;
    this.r = Math.random() * 2;
    this.speedY = Math.random() + 0.2;
  }

  render(ctx: CanvasRenderingContext2D) {
    if (this.finalY > this.y) {
      this.y += this.speedY;
    }
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
  }
}

export default function SnowGlobe() {
  const globeRef = useRef<HTMLDivElement>(null);
  const townCanvasRef = useRef<HTMLCanvasElement>(null);
  const snowCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!townCanvasRef.current || !snowCanvasRef.current) return;

    const canvas = townCanvasRef.current;
    const ctx = canvas.getContext("2d")!;
    const canvas2 = snowCanvasRef.current;
    const ctx2 = canvas2.getContext("2d")!;

    let data: Uint8ClampedArray;
    let flakes: Flake[] = [];
    let rafAnim: number | null = null;

    const amount = 1000;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetWidth;
    canvas2.width = canvas.offsetWidth;
    canvas2.height = canvas.offsetWidth;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src =
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/127738/town.svg?v2";

    img.onload = () => {
      ctx.drawImage(img, 0, 0, 800, 800, 0, 0, canvas.width, canvas.height);
      data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      initSnow();
    };

    function initSnow() {
      const globe = globeRef.current;
      if (!globe) return;

      globe.addEventListener("click", shakeGlobe);
      globe.addEventListener("touchstart", shakeGlobe);

      ctx2.fillStyle = "rgba(255,255,255,0.7)";

      const radius = canvas.width * 0.2875;
      const offsetX = canvas.width / 2;
      const offsetY = canvas.width * 0.4;

      flakes = [];

      for (let i = 0; i < amount; i++) {
        const x = Math.random() * 2 * radius - radius;
        const ylim = Math.sqrt(radius * radius - x * x);
        const y = Math.random() * ylim - ylim;

        flakes.push(
          new Flake(
            x + offsetX,
            y + offsetY,
            canvas.width,
            data
          )
        );
      }

      if (rafAnim === null) {
        rafAnim = requestAnimationFrame(render);
      }
    }

    function render() {
      rafAnim = requestAnimationFrame(render);
      ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
      flakes.forEach((flake) => flake.render(ctx2));
    }

    function shakeGlobe() {
      const globe = globeRef.current;
      if (!globe) return;

      globe.removeEventListener("click", shakeGlobe);
      globe.removeEventListener("touchstart", shakeGlobe);

      globe.animate(
        [
          { transform: "translate(-50%, -50%) rotate(0deg)" },
          { transform: "translate(-50%, -50%) rotate(25deg)" },
          { transform: "translate(-50%, -50%) rotate(0deg)" }
        ],
        { duration: 100, iterations: 6 }
      );

      canvas2.style.opacity = "0";

      setTimeout(() => {
        canvas2.style.opacity = "1";
        initSnow();
      }, 600);
    }

    return () => {
      if (rafAnim) cancelAnimationFrame(rafAnim);

      const globe = globeRef.current;
      if (!globe) return;

      globe.removeEventListener("click", shakeGlobe);
      globe.removeEventListener("touchstart", shakeGlobe);
    };
  }, []);

  return (
    <div
      ref={globeRef}
      className="relative w-[20rem] h-[20rem] mx-auto cursor-pointer"
    >
      <div
        className="absolute inset-0 bg-contain bg-no-repeat bg-center"
        style={{
          backgroundImage:
            "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/127738/globe.svg')",
        }}
      />

      <canvas
        ref={townCanvasRef}
        className="absolute inset-0 w-full h-full brightness-150"
      />
      <canvas
        ref={snowCanvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
