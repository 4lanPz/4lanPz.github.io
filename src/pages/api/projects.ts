// src/pages/api/projects.ts
import type { NextApiRequest, NextApiResponse } from 'next';
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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const files = fs.readdirSync(projectsDir);

    const projects = files.map((file) => {
      const filePath = path.join(projectsDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const data = JSON.parse(fileContent);

      return {
        ...data,
        slug: file.replace(/\.json$/, ''),
      };
    });

    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Error al cargar proyectos' });
  }
}
