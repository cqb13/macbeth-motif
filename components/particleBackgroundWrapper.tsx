import React, { useEffect, useRef } from 'react';

const ParticleBackgroundWrapper = ({ children }: { children: React.ReactNode }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];

    const createParticles = () => {
      particles = [];

      const numParticles =70;

      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    class Particle {
      x: number;
      y: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.radius = 1; 
        this.color = '#0891b2'; 
        this.speedX = Math.random() - 0.2; 
        this.speedY = Math.random() - 0.3; 
      }

      draw() {
        if(!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Particle boundary check
        if (canvas)
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.speedX = -this.speedX;
        }

        if (canvas)
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.speedY = -this.speedY;
        }
      }
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Connect particles within a specific distance
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const distance = Math.sqrt(
            (particles[i].x - particles[j].x) ** 2 + (particles[i].y - particles[j].y) ** 2
          );

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.lineWidth = 0.5;
            ctx.strokeStyle = '#0891b2';
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(drawParticles);
    };

    const initialize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
      drawParticles();
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };

    initialize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-screen h-full -z-10"></canvas>
      {children}
    </div>
  );
};

export default ParticleBackgroundWrapper;
