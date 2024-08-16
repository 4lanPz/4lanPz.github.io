import fs from 'fs';
import path from 'path';

interface Project {
  title: string;
  description: string;
  date: string;
  published?: boolean;
  repository?: string;
  slug: string;
}

const projectsDir = path.join(process.cwd(), 'src/proyectos');

export async function getProjects(): Promise<Project[]> {
  // Lee los archivos en la carpeta de proyectos
  const files = fs.readdirSync(projectsDir);

  // Procesa cada archivo
  const projects = files.map((file) => {
    const filePath = path.join(projectsDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContent);

    return {
      ...data,
      slug: file.replace(/\.json$/, ''),
    };
  });

  return projects;
}
