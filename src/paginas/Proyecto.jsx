import React, { useEffect, useState } from "react";
import { Cartas } from "../layout/Cartas";
import { Navegacion } from "../layout/Navegacion";
import { Link } from "react-router-dom";
import Particulas from "../layout/Particulas";

export default function Proyecto() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        // Obtener lista de JSON
        const response = await fetch("/proyectos/projects.json");
        if (!response.ok) {
          throw new Error("Error al cargar los archivos de proyectos");
        }

        const projectFiles = await response.json();

        // Cargar JSON individualmente
        const projectPromises = projectFiles.map(async (filename) => {
          const projectResponse = await fetch(`/proyectos/${filename}`);
          if (!projectResponse.ok) {
            throw new Error(`Error al cargar el proyecto ${filename}`);
          }
          return projectResponse.json();
        });

        const projectsData = await Promise.all(projectPromises);
        setProjects(projectsData);
      } catch (error) {
        console.error(error);
        setError("Error al cargar los proyectos");
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  const sortedProjects = projects
    .filter((project) => project.published)
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
    );

  return (
    <div className="bg-gradient-to-tl from-black via-zinc-800 to-black relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 z-0">
        <Particulas
          quantity={100}
          className="w-full h-full bg-black opacity-50"
        />
      </div>
      <Navegacion />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="w-full p-6 mt-10 md:mt-0 xl:mt-0 relative">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl text-center">
            Mis Proyectos
          </h2>
          <p className="mt-4 text-zinc-400 text-center px-2">
            Algunos de los proyectos hechos en mis estudios y en mi tiempo
            libre.
          </p>
          <div className="w-full h-px bg-zinc-800 my-6" />

          <div className="flex flex-col space-y-3 mb-10">
            {loading && (
              <div className="text-center p-4 min-h-screen">
                <p className="text-lg text-zinc-400">Cargando proyectos...</p>
              </div>
            )}
            {error && (
              <div className="text-center p-4">
                <p className="text-lg text-red-500">{error}</p>
              </div>
            )}
            <p className="text-zinc-400 text-sm justify-center text-center">
              Clic para ir al repositorio
            </p>
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 px-8 md:px-32 xl:px-72">
              {!loading &&
                !error &&
                sortedProjects.map((project, index) => (
                  <Cartas key={project.slug || index}>
                    {" "}
                    <Link
                      to={project.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-row items-center w-full h-full"
                    >
                      <div className="flex-1 p-4">
                        <h2 className="text-xl font-bold text-zinc-100 mb-2">
                          {project.title}
                        </h2>
                        <p className="text-sm text-zinc-400">
                          {project.description}
                        </p>
                        <span className="text-xs text-zinc-500 mt-2">
                          {project.date ? (
                            <time
                              dateTime={new Date(project.date).toISOString()}
                            >
                              {Intl.DateTimeFormat(undefined, {
                                dateStyle: "medium",
                              }).format(new Date(project.date))}
                            </time>
                          ) : (
                            <span>Fecha no disponible</span>
                          )}
                        </span>
                      </div>
                    </Link>
                  </Cartas>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
