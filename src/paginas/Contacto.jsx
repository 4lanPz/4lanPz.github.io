import { Github, Mail, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { Navegacion } from "../layout/Navegacion";
import { Cartas } from "../layout/Cartas";
import Particulas from "../layout/Particulas";

const redes = [
  {
    icon: <Github size={30} />,
    href: "https://github.com/4lanPz",
    label: "Github",
    handle: "@4lanPz",
  },
  {
    icon: <Linkedin size={30} />,
    href: "https://www.linkedin.com/in/alanst02",
    label: "LinkedIn",
    handle: "Alan Pérez",
  },
  {
    icon: <Mail size={30} />,
    href: "mailto:alanstvn420@gmail.com",
    label: "Email",
    handle: "alanstvn420",
  },
];

export default function Contacto() {
  return (
    <div className="bg-gradient-to-tl from-black via-zinc-800 to-black relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 z-0">
        <Particulas
          quantity={100}
          className="w-full h-full bg-black opacity-50"
        />
      </div>
      <Navegacion />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto ">
        <div className="w-full max-w-3xl p-6 mt-10 md:mt-12 xl:mt-12 relative">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl text-center">
            Formas de Contacto
          </h2>
          <div className="w-full h-px bg-zinc-800 my-8" />

          <div className="grid w-full grid-cols-1 gap-4 mx-auto mt-10 md:mt-12 xl:mt-12 sm:grid-cols-3 xl:gap-4 xl:grid-cols-3">
            {redes.map((s) => (
              <Cartas key={s.href}>
                <Link
                  to={s.href}
                  target="_blank"
                  className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-4 md:py-24 xl:pb-32 md:p-16"
                >
                  <span
                    className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                    {s.icon}
                  </span>
                  <div className="z-10 flex flex-col items-center text-center">
                    <span className="lg:text-xl font-bold duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display ">
                      {s.handle}
                    </span>
                    <span className="mt-4 text-md text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                      {s.label}
                    </span>
                  </div>
                </Link>
              </Cartas>
            ))}
          </div>
        </div>
      </div>
      {/* Espacio adicional abajo */}
      <div className="h-5 md:h-0 xl:h-0"></div>
    </div>
  );
}
