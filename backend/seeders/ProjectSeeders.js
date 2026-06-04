const { prisma } = require("../config/prisma");

const projectsData = [
  {
    title: "Yakuza Like a Dragon API",
    description_en: "Yakuza Like a Dragon API made with MERN Stack",
    description_es: "API de Yakuza Like a Dragon hecha con MERN Stack",
    github_url: "https://github.com/acanodev/yakuza_like_a_dragon_api",
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "CSS",
      "Bootstrap",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Docker",
    ],
  },
  {
    title: "Metari",
    description_en:
      "Challenge platform and task manager with scores, proof attachments and rankings. Built with MERN Stack (using MariaDB).",
    description_es:
      "Plataforma de retos y gestión de tareas con puntuaciones, adjunción de pruebas y rankings. Hecho con MERN Stack (usando MariaDB).",
    github_url: "https://github.com/acanodev/metari",
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Bootstrap",
      "CSS",
      "Express.js",
      "Node.js",
      "MariaDB",
      "Prisma",
      "Docker",
    ],
  },
  {
    title: "Portfolio",
    description_en:
      "Personal portfolio showcasing projects, skills and experience. Built with React, Node.js and MariaDB.",
    description_es:
      "Portfolio personal que muestra proyectos, habilidades y experiencia. Construido con React, Node.js y MariaDB.",
    github_url: "https://github.com/acanodev/portfolio",
    featured: true,
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Bootstrap",
      "CSS",
      "Express.js",
      "Node.js",
      "MariaDB",
      "Prisma",
      "Docker",
    ],
  },
  {
    title: "Bujaldon DaVinci",
    description_en:
      "Internal web platform for Bujaldon. I contributed to the development by developing the task managers, companies and users during my time at the company.",
    description_es:
      "Plataforma web interna para Bujaldon. Contribuí al desarrollo desarrollando los gestores de tareas, compañías y usuarios durante mi estancia en la empresa.",
    technologies: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "PHP",
      "Laravel",
      "Eloquent",
      "MySQL"
    ]
  },
];

const seedProjects = async () => {
  try {
    const existing = await prisma.project.findMany({});
    const overrideDB = false;

    if (existing.length > 0 && !overrideDB) {
      console.log("Projects already seeded, skipping...");
      return;
    }

    const allTechs = await prisma.technology.findMany({});
    const techMap = {};
    for (const tech of allTechs) {
      techMap[tech.name] = tech.id;
    }

    for (const project of projectsData) {
      const { technologies, ...projectFields } = project;

      const created = await prisma.project.create({
        data: projectFields,
      });

      const techIds = technologies
        .map((name) => techMap[name])
        .filter((id) => id !== undefined);

      const uniqueTechIds = [...new Set(techIds)];

      if (uniqueTechIds.length > 0) {
        await prisma.projectTechnology.createMany({
          data: uniqueTechIds.map((technology_id) => ({
            project_id: created.id,
            technology_id,
          })),
        });
      }
    }

    console.log(`Seeded ${projectsData.length} projects with technologies`);
  } catch (error) {
    console.error(`ERROR seeding projects: ${error}`);
  }
};

module.exports = { seedProjects };
