"use client";
import { useEffect, useRef } from "react";

export default function HorizonGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let offset = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      const horizonY = h * 0.4;

      ctx.clearRect(0, 0, w, h);

      // horizon glow
      const glow = ctx.createRadialGradient(w / 2, horizonY, 0, w / 2, horizonY, w * 0.6);
      glow.addColorStop(0, "rgba(62, 184, 169, 0.25)");
      glow.addColorStop(1, "rgba(62, 184, 169, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);

      // horizontal lines (moving toward viewer)
      const lineSpacing = 40;
      const numLines = 20;
      for (let i = 0; i < numLines; i++) {
        const progress = ((i * lineSpacing + offset) % (numLines * lineSpacing)) / (numLines * lineSpacing);
        const y = horizonY + progress * progress * (h - horizonY);
        const opacity = 0.4 * (1 - progress);
        ctx.strokeStyle = `rgba(62, 184, 169, ${opacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // vertical perspective lines
      const numVertical = 16;
      for (let i = 0; i <= numVertical; i++) {
        const xRatio = i / numVertical;
        const topX = w * xRatio;
        const bottomX = w / 2 + (topX - w / 2) * 3;
        ctx.strokeStyle = "rgba(62, 184, 169, 0.15)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(topX, horizonY);
        ctx.lineTo(bottomX, h);
        ctx.stroke();
      }

      offset += 0.6;
      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
    />
  );
}