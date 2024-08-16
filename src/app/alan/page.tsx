"use client";
import { Card } from "../Components/card";
import { Navigation } from "../Components/nav";

// Define tus habilidades aquí
const skills = [
  {
    title: "Objetivo",
    description:
      "Aspiro a crecer constantemente en todas las áreas de mi vida, comprometiéndome a dar lo mejor de mí en mi vida personal y profesional. Mi objetivo es destacar como líder inspirador, emprendedor audaz, empleado valioso y persona en constante desarrollo",
  },
  {
    title: "Pasatiempos",
    description:
      "Me gusta sumergirme en emocionantes mundos virtuales a través de los videojuegos, mi amor por la música abarca todo tipo de géneros. Disfruto explorando conocimientos sobre la tecnología, en particular la inteligencia artificial, ya que me fascina las innovaciones que vienen a futuro.",
  },
];

export default function Sobremi() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="px-10 pt-20 mx-auto min-h-screen w-full items-center justify-center md:px-0">
        <div className="text-center px-10 max-lg:px-0">
          <h2 className="text-4xl font-bold text-zinc-100 mt-10">
            ¿Quíen soy?
          </h2>
          <p className="text-xl text-zinc-200 mt-3">Alan Pérez - 21 Años</p>
          <div className="flex justify-center">
            <img src="/perfil.png" className="h-64" alt="Perfil" />
          </div>
          <p className="my-4 text-zinc-400 px-96 max-lg:px-10 max-sm:px-2">
            Soy tecnólogo en desarrollo de software al que le apasiona la
            tecnología, la robotica, inteligencia artificial y los videojuegos.
            Estoy constante búsqueda de conocimiento que me ayude a conseguir
            mis metas.
          </p>

          <div className="flex w-full gap-10 px-96 max-lg:px-10 max-sm:px-0 max-sm:gap-2 pb-10">
            {skills.map((skill, index) => (
              <div key={index} className="flex-1 flex">
                <Card>
                  <div className="p-4 relative flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-zinc-100">
                      {skill.title}
                    </h3>
                    <p className="text-sm text-zinc-400">{skill.description}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
