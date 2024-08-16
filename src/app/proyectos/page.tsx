"use client";
import React, { useEffect, useState } from "react";
import { Card } from "../Components/card";
import { Navigation } from "../Components/nav";
import { Github } from "lucide-react";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  date: string;
  published?: boolean;
  repository?: string;
  slug: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch("/api/projects");
        if (!response.ok) {
          throw new Error("Error al cargar los proyectos");
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        setError((error as Error).message);
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
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="w-full p-5">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Proyectos
          </h2>
          <p className="mt-4 text-zinc-400">
            Algunos de los proyectos hechos en mis estudios y en mi tiempo
            libre.
          </p>
          <div className="w-full h-px bg-zinc-800 mt-8 mb-2" />

          <div className="flex justify-center">
            <div className="flex flex-col space-y-3">
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
              <p className="mt-4 text-zinc-400 text-sm justify-center text-center">
                Clic para ir al repositorio
              </p>
              <div className="grid w-4/5 grid-cols-2 gap-4 mx-auto px-10">
                {!loading &&
                  !error &&
                  sortedProjects.map((project) => (
                    <Card key={project.slug}>
                      <Link
                        href={
                          project.repository
                            ? project.repository.startsWith("http")
                              ? project.repository
                              : `https://${project.repository}`
                            : "#"
                        }
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
                    </Card>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
