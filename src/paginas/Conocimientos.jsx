import React from "react";
import { Cartas } from "../layout/Cartas";
import { Navegacion } from "../layout/Navegacion";
import Particulas from "../layout/Particulas";

const conocimiento1 = [
  {
    title: "Desarrollo Web",
    description:
      "Experiencia en creación de aplicaciones de múltiples sistemas",
    skills: [
      { habilidad: "Javascript", nivel: 50 },
      { habilidad: "Node JS", nivel: 60 },
      { habilidad: "React JS", nivel: 60 },
      { habilidad: "C++", nivel: 50 },
      { habilidad: "Flutter", nivel: 40 },
      { habilidad: "Ionic", nivel: 30 },
      { habilidad: "SQL Server", nivel: 60 },
      { habilidad: "Gemini IA", nivel: 40 },
      { habilidad: "Open IA", nivel: 20 },
    ],
  },
];

const conocimiento2 = [
  {
    title: "Conocimiento en otras áreas",
    description:
      "Experiencia en otras herramientas y software importantes para la producción multimedia.",
    skills: [
      { habilidad: "Adobe Photoshop 2024", nivel: 50 },
      { habilidad: "Adobe Premiere 2024", nivel: 30 },
      { habilidad: "Wordershare Filmora", nivel: 40 },
      { habilidad: "Nero video", nivel: 40 },
      { habilidad: "Unreal Engine", nivel: 40 },
      { habilidad: "Gotot Engine", nivel: 20 },
    ],
  },
];

const SkillBar = ({ nivel }) => (
  <div className="w-full bg-gray-300 rounded-full h-2.5 mt-1">
    <div
      className="bg-zinc-700 h-2.5 rounded-full shadow-sm shadow-white"
      style={{ width: `${nivel}%` }}
    ></div>
  </div>
);

export default function Conocimientos() {
  return (
    <div className="bg-gradient-to-tl from-black via-zinc-800 to-black relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 z-0">
        <Particulas
          quantity={100}
          className="w-full h-full bg-black opacity-50"
        />
      </div>
      
      <Navegacion />
      <div className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto relative">
        <div className="w-full max-w-3xl p-6 mt-10 md:mt-12 xl:mt-12">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl text-center">
            Mis Conocimientos
          </h2>
          <div className="w-full h-px bg-zinc-800 my-8" />
          <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4">
            {conocimiento1.map((data, index) => (
              <Cartas key={`conocimiento1-${index}`}>
                <div className="p-4 relative flex flex-col items-start gap-4">
                  <h3 className="text-xl font-bold text-zinc-100">
                    {data.title}
                  </h3>
                  <p className="text-sm text-zinc-400">{data.description}</p>
                  <ul className="space-y-2 w-full">
                    {data.skills.map((skill, idx) => (
                      <li key={idx} className="flex flex-col">
                        <span className="text-zinc-100">{skill.habilidad}</span>
                        <SkillBar nivel={skill.nivel} />
                      </li>
                    ))}
                  </ul>
                </div>
              </Cartas>
            ))}
            {conocimiento2.map((data, index) => (
              <Cartas key={`conocimiento2-${index}`}>
                <div className="p-4 relative flex flex-col items-start gap-4">
                  <h3 className="text-xl font-bold text-zinc-100">
                    {data.title}
                  </h3>
                  <p className="text-sm text-zinc-400">{data.description}</p>
                  <ul className="space-y-2 w-full">
                    {data.skills.map((skill, idx) => (
                      <li key={idx} className="flex flex-col">
                        <span className="text-zinc-100">{skill.habilidad}</span>
                        <SkillBar nivel={skill.nivel} />
                      </li>
                    ))}
                  </ul>
                </div>
              </Cartas>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
