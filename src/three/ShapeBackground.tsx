import { useEffect, useRef } from 'react';

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  homeX: number;
  homeY: number;
  size: number;
  baseOpacity: number;
  opacity: number;
  twinkle: number;
  twinkleSpeed: number;
};

const NODE_COUNT = 110;
const MOUSE_RADIUS = 200;
const MOUSE_INFLUENCE = 0.6;
const DAMPING = 0.94;
const HOME_SPRING = 0.003;
const CONNECT_DIST = 130;
const CONNECT_DIST_SQ = CONNECT_DIST * CONNECT_DIST;

export default function ShapeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    let nodes: Node[] = [];

    const initNodes = () => {
      nodes = Array.from({ length: NODE_COUNT }, () => {
        const x = Math.random() * width;
        const y = Math.random() * height;
        return {
          x,
          y,
          vx: (Math.random() - 0.5) * 0.08,
          vy: (Math.random() - 0.5) * 0.08,
          homeX: x,
          homeY: y,
          size: 0.6 + Math.random() * 1.4,
          baseOpacity: 0.08 + Math.random() * 0.28,
          opacity: 0,
          twinkle: Math.random() * Math.PI * 2,
          twinkleSpeed: 0.005 + Math.random() * 0.018,
        };
      });
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initNodes();
    };
    resize();

    const mouse = { x: -1000, y: -1000, tx: -1000, ty: -1000, active: false };

    const onMouseMove = (e: MouseEvent) => {
      mouse.tx = e.clientX;
      mouse.ty = e.clientY;
      mouse.active = true;
    };
    const onMouseLeave = () => {
      mouse.active = false;
      mouse.tx = -1000;
      mouse.ty = -1000;
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('resize', resize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse lerp for fluid lag
      mouse.x += (mouse.tx - mouse.x) * 0.07;
      mouse.y += (mouse.ty - mouse.y) * 0.07;
      const mx = mouse.x;
      const my = mouse.y;

      // Update node physics
      for (const n of nodes) {
        n.twinkle += n.twinkleSpeed;
        const twinkleFactor = 0.65 + Math.sin(n.twinkle) * 0.35;

        if (mouse.active) {
          const dx = mx - n.x;
          const dy = my - n.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < MOUSE_RADIUS * MOUSE_RADIUS && distSq > 1) {
            const dist = Math.sqrt(distSq);
            const influence = (1 - dist / MOUSE_RADIUS) * MOUSE_INFLUENCE;
            // Subtle drift: push nodes away from cursor (repulsion) for organic feel
            n.vx -= (dx / dist) * influence * 0.03;
            n.vy -= (dy / dist) * influence * 0.03;
            n.opacity = Math.min(0.85, n.opacity + (1 - dist / MOUSE_RADIUS) * 0.035);
          } else {
            n.opacity += (n.baseOpacity * twinkleFactor - n.opacity) * 0.03;
          }
        } else {
          n.opacity += (n.baseOpacity * twinkleFactor - n.opacity) * 0.025;
        }

        // Spring back to home
        n.vx += (n.homeX - n.x) * HOME_SPRING;
        n.vy += (n.homeY - n.y) * HOME_SPRING;

        n.x += n.vx;
        n.y += n.vy;
        n.vx *= DAMPING;
        n.vy *= DAMPING;

        // Soft edge wrap
        if (n.x < -10) n.x = width + 10;
        if (n.x > width + 10) n.x = -10;
        if (n.y < -10) n.y = height + 10;
        if (n.y > height + 10) n.y = -10;
      }

      // Draw connection lines — network mesh
      ctx.lineWidth = 0.5;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < CONNECT_DIST_SQ) {
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / CONNECT_DIST) * 0.12 * Math.max(a.opacity, b.opacity);
            if (alpha > 0.004) {
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.strokeStyle = `rgba(120, 140, 180, ${alpha})`;
              ctx.stroke();
            }
          }
        }
      }

      // Draw nodes
      for (const n of nodes) {
        // Glow halo
        const glowSize = n.size * 3.5;
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, glowSize);
        grad.addColorStop(0, `rgba(190, 205, 235, ${n.opacity * 0.5})`);
        grad.addColorStop(0.4, `rgba(160, 175, 210, ${n.opacity * 0.12})`);
        grad.addColorStop(1, 'rgba(140, 155, 190, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(n.x, n.y, glowSize, 0, Math.PI * 2);
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(225, 232, 250, ${n.opacity})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: '#050506' }}
    />
  );
}
