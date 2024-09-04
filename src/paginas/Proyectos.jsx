import React, { useRef, useEffect } from "react";

const Particulas = ({ className = "", quantity = 50 }) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const deceleration = 0.98; // Factor de desaceleración (0.98 significa una desaceleración del 2% por cuadro)

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Determina si el dispositivo es móvil o no
    const isMobile = window.innerWidth <= 768;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particlesRef.current = createParticles(quantity);
    };

    const updateParticles = () => {
      const { x: mouseX, y: mouseY } = mousePosRef.current;
      const canvasRect = canvas.getBoundingClientRect();

      particlesRef.current.forEach((particle) => {
        // Aplicar desaceleración
        particle.vx *= deceleration;
        particle.vy *= deceleration;

        // Actualizar posición de la partícula
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Envolver las partículas al salir del borde
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;

        if (!isMobile) {
          // Calcular la distancia y la influencia del mouse solo si no es móvil
          const dx = particle.x - (mouseX - canvasRect.left);
          const dy = particle.y - (mouseY - canvasRect.top);
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 100;
          const influence = Math.max(0, (maxDistance - dist) / maxDistance);
          const force = influence * 0.2;

          // Aplicar la fuerza de alejamiento
          if (dist > 0) {
            particle.vx += (force * (dx / dist));
            particle.vy += (force * (dy / dist));
          }
        }
      });
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current.forEach((particle) => {
        // Dibujar la partícula
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.alpha})`;
        ctx.fill();
      });
    };

    const animateParticles = () => {
      updateParticles();
      drawParticles();
      requestAnimationFrame(animateParticles);
    };

    const handleMouseMove = (event) => {
      if (!isMobile) {
        mousePosRef.current = { x: event.clientX, y: event.clientY };
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    animateParticles();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (!isMobile) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [quantity]);

  const createParticles = (numParticles) => {
    const particlesArray = [];
    for (let i = 0; i < numParticles; i++) {
      particlesArray.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * (Math.random() * 0.1), // Velocidad ajustada para más movimiento
        vy: (Math.random() - 0.5) * (Math.random() * 0.1),
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.5,
      });
    }
    return particlesArray;
  };

  return <canvas ref={canvasRef} className={`absolute inset-0 ${className}`} />;
};

export default Particulas;
