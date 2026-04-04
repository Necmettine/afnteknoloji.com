"use client";
import { useEffect, useRef } from "react";

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let W = 0, H = 0;
    const COLOR = "245,166,35";

    interface P { x: number; y: number; vx: number; vy: number; r: number; }
    let particles: P[] = [];

    function setup() {
      // Doğrudan section'ın bounding rect'ini kullan
      const section = canvas.parentElement;
      const rect = section ? section.getBoundingClientRect() : null;
      W = rect ? rect.width : window.innerWidth;
      H = rect ? rect.height : window.innerHeight;

      // Canvas boyutunu piksel olarak ayarla (CSS değil, attribute)
      canvas.setAttribute("width",  String(W));
      canvas.setAttribute("height", String(H));

      const count = Math.max(70, Math.floor((W * H) / 6000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        r: Math.random() * 3 + 3,   // 3–6 px — mobilde net görünür
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);

      const maxDist = Math.min(W, 200);

      for (const p of particles) {
        p.x = (p.x + p.vx + W) % W;
        p.y = (p.y + p.vy + H) % H;

        // Glow halkası
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
        g.addColorStop(0, `rgba(${COLOR},0.5)`);
        g.addColorStop(1, `rgba(${COLOR},0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();

        // Parlak çekirdek
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${COLOR},1)`;
        ctx.fill();
      }

      // Bağlantı çizgileri
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < maxDist) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${COLOR},${(1 - d / maxDist) * 0.6})`;
            ctx.lineWidth = 1.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    }

    // 100ms bekle — React hydration + CSS layout tamamlansın
    const t = setTimeout(() => { setup(); draw(); }, 100);
    const onResize = () => { cancelAnimationFrame(animId); setup(); draw(); };
    window.addEventListener("resize", onResize);

    return () => {
      clearTimeout(t);
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 5,           // Gradientlerin kesinlikle üstünde
        display: "block",
      }}
    />
  );
}
