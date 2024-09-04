import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import Particulas from "../layout/Particulas";
import React from "react";

const navigation = [
  { name: "Sobre Mi", href: "/informacion" },
  { name: "Conocimientos", href: "/conocimientos" },
  { name: "Proyectos", href: "/proyectos" },
  { name: "Contacto", href: "/contacto" },
];

const Inicio = () => {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-800 to-black">
        <Particulas quantity={100} className="z-0 opacity-50 bg-black" />

        {/* Contenedor con barras, imagen y texto */}
        <div className="relative flex flex-col items-center md:flex-row z-10 w-full max-w-4xl">
          {/* Línea superior */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 animate-glow" />

          {/* Contenedor de Imagen y Texto */}
          <div className="flex flex-col md:flex-row items-center w-full justify-center py-4">
            {/* Texto */}
            <h1 className="text-center text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
              Alan Pérez
            </h1>
          </div>

          {/* Línea inferior */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 animate-glow" />
        </div>

        <div className="text-xl my-8 text-center animate-fade-in z-10 px-10 md:px-0 xl:px-0">
          <div className="text-white">
            <Typewriter
              options={{
                strings: [
                  "Soy Desarrollador Web",
                  "Soy Desarrollador Móvil",
                  "Soy Desarrollador Backend",
                  "Soy Futuro Desarrollador de Videojuegos",
                ],
                autoStart: true,
                delay: 40,
                deleteSpeed: 25,
                loop: true,
              }}
            />
          </div>
        </div>

        <nav className="my-8 animate-fade-in z-10">
          <ul className="max-sm:flex-col flex items-center justify-center gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-xl duration-500 text-zinc-100 hover:text-zinc-300 relative group"
              >
                {item.name}
                <span className="absolute left-0 right-0 bottom-0 top-0 w-full h-full bg-gradient-to-r from-transparent to-transparent group-hover:from-zinc-300/30 group-hover:to-zinc-300/30 transition-opacity duration-500 opacity-0 group-hover:opacity-100 blur-lg"></span>
                <span className="absolute left-0 right-0 bottom-0 top-0 w-full h-full group-hover:text-shadow transition duration-500 group-hover:blur-sm"></span>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Inicio;
