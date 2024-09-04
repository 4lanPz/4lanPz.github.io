import { useState } from "react";
import { Cartas } from "../layout/Cartas";
import { Navegacion } from "../layout/Navegacion";
import Particulas from "../layout/Particulas";
import { AnimatePresence, motion } from "framer-motion";

const skills = [
  {
    title: "Objetivo",
    description:
      "Aspiro a crecer constantemente en todas las áreas de mi vida, comprometiéndome a dar lo mejor de mí en mi vida personal y profesional.",
  },
  {
    title: "Pasatiempos",
    description:
      "Me gusta sumergirme en emocionantes mundos virtuales a través de los videojuegos, mi amor por la música abarca todo tipo de géneros y disfruto explorando conocimientos sobre la tecnología.",
  },
];

export default function Informacion() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleCardClick = (skill) => {
    setSelectedSkill(skill);
  };

  const closeModal = () => {
    setSelectedSkill(null);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-black via-zinc-800 to-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Particulas
          quantity={100}
          className="w-full h-full bg-black opacity-50"
        />
      </div>
      <Navegacion className="relative z-10" />

      <div className="relative z-10 px-6 pt-10 md:pt-20 xl:pt-20 mx-auto w-full items-center justify-center">
        <div className="text-center md:px-20 xl:px-24">
          <h2 className="text-4xl font-bold text-zinc-100 mt-10 mb-2">
            Alan Pérez
          </h2>
          <div className="flex justify-center">
            <img src="perfil.png" className="h-64 z-10 relative" alt="Perfil" />
          </div>
          <p className="my-6 text-white px-2 lg:px-60 xl:px-96 ">
            Soy tecnólogo en desarrollo de software al que le apasiona la
            tecnología, la robótica, inteligencia artificial y los videojuegos.
            Estoy en constante búsqueda de conocimiento que me ayude a conseguir
            mis metas.
          </p>

          {/* Aquí es donde se aplica la lógica de columnas */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 justify-center gap-y-4 px-1 xl:px-60 pb-20">
            {skills.map((skill, index) => (
              <div key={index}>
                <Cartas onClick={() => handleCardClick(skill)}>
                  <div className="p-3 md:p-4 xl:p-4 relative flex flex-col flex-grow">
                    <h3 className="text-xl md:text-2xl xl:text-xl font-bold text-white">
                      {skill.title}
                    </h3>
                    <p className="text-xs sm:text-lg text-white">
                      {skill.description}
                    </p>
                  </div>
                </Cartas>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-zinc-800 rounded-lg p-8 text-white text-sm w-3/4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <motion.h5 className="text-xl font-bold">
                {selectedSkill.title}
              </motion.h5>
              <motion.p className="mt-4">{selectedSkill.description}</motion.p>
              <motion.button
                className="mt-4 bg-zinc-600 px-4 py-2 rounded"
                onClick={closeModal}
              >
                Cerrar
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
