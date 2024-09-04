import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "react-feather"; // Iconos de menú hamburguesa y cerrar

export const Navegacion = () => {
  const ref = useRef(null);
  const [isIntersecting, setIntersecting] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/500 border-zinc-800"
        }`}
      >
        <div className="container flex items-center justify-between p-4 md:p-6 xl:p-6 mx-auto">
          <Link
            to="/"
            className="duration-200 text-zinc-300 hover:text-zinc-100 font-semibold"
          >
            Inicio
          </Link>

          {/* Menú hamburguesa para dispositivos móviles */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-zinc-300 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Navegación para pantallas grandes */}
          <div className="hidden md:flex justify-between gap-4 md:gap-8 xl:gap-8">
            <Link
              to="/informacion"
              className="duration-200 text-zinc-400 hover:text-zinc-100"
            >
              Sobre mi
            </Link>
            <Link
              to="/conocimientos"
              className="duration-200 text-zinc-400 hover:text-zinc-100"
            >
              Conocimientos
            </Link>
            <Link
              to="/proyectos"
              className="duration-200 text-zinc-400 hover:text-zinc-100"
            >
              Proyectos
            </Link>
            <Link
              to="/contacto"
              className="duration-200 text-zinc-400 hover:text-zinc-100"
            >
              Contacto
            </Link>
          </div>
        </div>

        {/* Menú desplegable para dispositivos móviles */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-start p-4 space-y-2 bg-zinc-900">
            <Link
              to="/informacion"
              className="duration-200 text-zinc-400 hover:text-zinc-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre mi
            </Link>
            <Link
              to="/conocimientos"
              className="duration-200 text-zinc-400 hover:text-zinc-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Conocimientos
            </Link>
            <Link
              to="/proyectos"
              className="duration-200 text-zinc-400 hover:text-zinc-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Proyectos
            </Link>
            <Link
              to="/contacto"
              className="duration-200 text-zinc-400 hover:text-zinc-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
