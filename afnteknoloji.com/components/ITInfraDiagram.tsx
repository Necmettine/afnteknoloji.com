"use client";
import { useEffect, useRef } from "react";

interface Node {
  id: string; label: string; sub: string;
  lat: number; lon: number; color: string; size: number;
}
interface Edge { from: string; to: string; }

const NODES: Node[] = [
  // Merkez — Sunucu & Sanallaştırma
  { id: "esxi",      label: "ESXi Host",    sub: "vSphere",          lat:  20, lon:   0,  color: "#9ca3af", size: 11 },
  { id: "vm1",       label: "VM Cluster",   sub: "Sanal Sunucular",  lat:  50, lon: -40,  color: "#607078", size: 9  },
  // Yedekleme
  { id: "veeam",     label: "Veeam B&R",    sub: "Backup Server",    lat:  45, lon:  50,  color: "#007DB8", size: 10 },
  { id: "huawei",    label: "OceanStor",    sub: "Block Storage",    lat:   5, lon:  70,  color: "#CF0A2C", size: 10 },
  { id: "backup1",   label: "Yerel Disk",   sub: "Kopya 1",          lat:  65, lon:  90,  color: "#F5A623", size: 7  },
  { id: "backup2",   label: "Offsite",      sub: "Kopya 3",          lat: -20, lon:  90,  color: "#22c55e", size: 7  },
  // Microsoft 365
  { id: "exchange",  label: "Mail",         sub: "Exchange Online",  lat:  55, lon: -70,  color: "#0078D4", size: 9  },
  { id: "onedrive",  label: "OneDrive",     sub: "Bulut Depolama",   lat:  25, lon: -80,  color: "#0078D4", size: 8  },
  { id: "sharepoint",label: "SharePoint",   sub: "İşbirliği",        lat:  -5, lon: -60,  color: "#0078D4", size: 8  },
  // Güvenlik & Web
  { id: "firewall",  label: "Fortinet FW",  sub: "Ağ Güvenliği",     lat: -25, lon: -20,  color: "#EE3124", size: 9  },
  { id: "antivirus", label: "EDR/XDR",      sub: "Uç Nokta Güv.",    lat: -45, lon:  30,  color: "#EE3124", size: 8  },
  { id: "web",       label: "Web Hosting",  sub: "afnteknoloji.com", lat: -50, lon: -60,  color: "#a855f7", size: 8  },
];

const EDGES: Edge[] = [
  { from: "vm1",       to: "esxi"      },
  { from: "esxi",      to: "veeam"     },
  { from: "esxi",      to: "huawei"    },
  { from: "esxi",      to: "firewall"  },
  { from: "veeam",     to: "backup1"   },
  { from: "veeam",     to: "backup2"   },
  { from: "huawei",    to: "backup2"   },
  { from: "esxi",      to: "exchange"  },
  { from: "exchange",  to: "onedrive"  },
  { from: "exchange",  to: "sharepoint"},
  { from: "firewall",  to: "antivirus" },
  { from: "firewall",  to: "web"       },
];

function toRad(d: number) { return d * Math.PI / 180; }

function project(lat: number, lon: number, rotY: number, R: number, cx: number, cy: number) {
  const phi = toRad(lat), lam = toRad(lon) + rotY;
  return {
    x: cx + R * Math.cos(phi) * Math.sin(lam),
    y: cy - R * Math.sin(phi),
    z: Math.cos(phi) * Math.cos(lam),
  };
}

export default function ITInfraDiagram() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const W = 540, H = 560;
    canvas.width = W; canvas.height = H;
    const cx = W / 2, cy = H / 2 - 20;  // küreyi biraz yukarı al, badge için yer bırak
    const R = W * 0.37;

    const packets = EDGES.map(() => ({
      t: Math.random(), speed: 0.0025 + Math.random() * 0.003,
    }));
    const nodeMap = Object.fromEntries(NODES.map(n => [n.id, n]));
    let rotY = 0;

    // Hover
    let hovered: string | null = null;
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = W / rect.width, scaleY = H / rect.height;
      const mx = (e.clientX - rect.left) * scaleX;
      const my = (e.clientY - rect.top) * scaleY;
      hovered = null;
      for (const n of NODES) {
        const p = project(n.lat, n.lon, rotY, R, cx, cy);
        if (p.z > 0) {
          const dx = mx - p.x, dy = my - p.y;
          if (Math.sqrt(dx * dx + dy * dy) < n.size + 8) { hovered = n.id; break; }
        }
      }
      canvas.style.cursor = hovered ? "pointer" : "default";
    };
    canvas.addEventListener("mousemove", onMove);

    function drawGlobe() {
      const g = ctx.createRadialGradient(cx - R * 0.25, cy - R * 0.25, R * 0.05, cx, cy, R);
      g.addColorStop(0, "#0f2040"); g.addColorStop(0.7, "#07101e"); g.addColorStop(1, "#030810");
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = g; ctx.fill();

      const rim = ctx.createRadialGradient(cx, cy, R * 0.82, cx, cy, R * 1.04);
      rim.addColorStop(0, "transparent"); rim.addColorStop(1, "rgba(245,166,35,0.14)");
      ctx.beginPath(); ctx.arc(cx, cy, R * 1.04, 0, Math.PI * 2);
      ctx.fillStyle = rim; ctx.fill();

      ctx.save();
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.clip();

      ctx.strokeStyle = "rgba(245,166,35,0.09)"; ctx.lineWidth = 0.6;
      for (let lat = -75; lat <= 75; lat += 25) {
        const phi = toRad(lat), ry = cy - R * Math.sin(phi), rx = R * Math.cos(phi);
        ctx.beginPath(); ctx.ellipse(cx, ry, rx, rx * 0.17, 0, 0, Math.PI * 2); ctx.stroke();
      }
      for (let lon = 0; lon < 360; lon += 30) {
        const lam = toRad(lon) + rotY;
        ctx.beginPath();
        for (let lt = -90; lt <= 90; lt += 4) {
          const phi = toRad(lt);
          const px = cx + R * Math.cos(phi) * Math.sin(lam);
          const py = cy - R * Math.sin(phi);
          lt === -90 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
        }
        ctx.stroke();
      }
      ctx.restore();
    }

    function drawEdge(a: Node, b: Node) {
      const pa = project(a.lat, a.lon, rotY, R, cx, cy);
      const pb = project(b.lat, b.lon, rotY, R, cx, cy);
      if (pa.z < -0.15 && pb.z < -0.15) return;
      const mx = (pa.x + pb.x) / 2, my = (pa.y + pb.y) / 2 - 16;
      ctx.beginPath(); ctx.moveTo(pa.x, pa.y); ctx.quadraticCurveTo(mx, my, pb.x, pb.y);
      ctx.strokeStyle = "rgba(245,166,35,0.2)"; ctx.lineWidth = 1; ctx.setLineDash([4, 7]); ctx.stroke(); ctx.setLineDash([]);
    }

    function drawPacket(a: Node, b: Node, t: number) {
      const pa = project(a.lat, a.lon, rotY, R, cx, cy);
      const pb = project(b.lat, b.lon, rotY, R, cx, cy);
      if (pa.z < -0.1 && pb.z < -0.1) return;
      const mx = (pa.x + pb.x) / 2, my = (pa.y + pb.y) / 2 - 16;
      const qx = (1-t)*(1-t)*pa.x + 2*(1-t)*t*mx + t*t*pb.x;
      const qy = (1-t)*(1-t)*pa.y + 2*(1-t)*t*my + t*t*pb.y;
      ctx.beginPath(); ctx.arc(qx, qy, 3, 0, Math.PI * 2);
      ctx.fillStyle = "#F5A623"; ctx.shadowColor = "#F5A623"; ctx.shadowBlur = 8; ctx.fill(); ctx.shadowBlur = 0;
    }

    function drawNode(n: Node) {
      const p = project(n.lat, n.lon, rotY, R, cx, cy);
      if (p.z < -0.05) return;
      const isHov = hovered === n.id;
      const alpha = Math.min(1, (p.z + 0.1) * 3.5);
      ctx.globalAlpha = alpha;

      const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, n.size * (isHov ? 5 : 3.5));
      glow.addColorStop(0, n.color + (isHov ? "99" : "55")); glow.addColorStop(1, "transparent");
      ctx.beginPath(); ctx.arc(p.x, p.y, n.size * (isHov ? 5 : 3.5), 0, Math.PI * 2); ctx.fillStyle = glow; ctx.fill();

      ctx.beginPath(); ctx.arc(p.x, p.y, isHov ? n.size + 2 : n.size, 0, Math.PI * 2);
      ctx.fillStyle = n.color; ctx.shadowColor = n.color; ctx.shadowBlur = isHov ? 18 : 10; ctx.fill(); ctx.shadowBlur = 0;

      ctx.font = `bold ${isHov ? 12 : 10}px Inter,sans-serif`;
      ctx.fillStyle = isHov ? "#fff" : "#e5e7eb"; ctx.textAlign = "center";
      ctx.textBaseline = "bottom"; ctx.fillText(n.label, p.x, p.y - n.size - 3);

      ctx.font = `${isHov ? 10 : 8}px Inter,sans-serif`;
      ctx.fillStyle = "#9ca3af"; ctx.textBaseline = "top";
      ctx.fillText(n.sub, p.x, p.y + n.size + 3);

      ctx.globalAlpha = 1;
    }

    function draw321() {
      const bw = 240, bh = 36, bx = cx - bw / 2, by = H - 44;
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(bx, by, bw, bh, 8);
      ctx.fillStyle = "rgba(10,18,30,0.9)"; ctx.strokeStyle = "#22c55e"; ctx.lineWidth = 1.2;
      ctx.fill(); ctx.stroke();
      ctx.font = "bold 10px Inter,sans-serif"; ctx.fillStyle = "#22c55e";
      ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillText("✅  3-2-1 Yedekleme Kuralı", cx, by + 11);
      ctx.font = "9px Inter,sans-serif"; ctx.fillStyle = "#6b7280";
      ctx.fillText("3 kopya  ·  2 farklı medya  ·  1 offsite", cx, by + 25);
    }

    function render() {
      ctx.clearRect(0, 0, W, H);
      drawGlobe();
      EDGES.forEach((e, i) => {
        drawEdge(nodeMap[e.from], nodeMap[e.to]);
        drawPacket(nodeMap[e.from], nodeMap[e.to], packets[i].t);
        packets[i].t += packets[i].speed;
        if (packets[i].t > 1) packets[i].t = 0;
      });
      [...NODES].sort((a, b) => project(a.lat,a.lon,rotY,R,cx,cy).z - project(b.lat,b.lon,rotY,R,cx,cy).z)
        .forEach(drawNode);
      draw321();
      rotY += 0.0025;
      rafRef.current = requestAnimationFrame(render);
    }

    render();
    return () => { cancelAnimationFrame(rafRef.current); canvas.removeEventListener("mousemove", onMove); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", maxWidth: 520, height: "auto", display: "block", margin: "auto" }}
      className="drop-shadow-2xl"
    />
  );
}
