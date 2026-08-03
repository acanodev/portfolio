const { prisma } = require("../config/prisma");

const experienceData = [
  {
    company_name: "Escola Lledoner",
    job_title_en: "Computer Technician",
    job_title_es: "Técnico informático",
    description_en:
      "As a computer technician, I maintain and support computers, operating systems, and networks. I configure, install, and update operating systems and office suite on desktop computers and servers. I manage and maintain internal networks, solving the main possible issues. I document hardware and software configuration to ensure proper resource management. I configure and update systems and servers, providing support to the user against any issue.",
    description_es:
      "Como técnico informático me encargo del mantenimiento y soporte técnico de sistemas, redes y equipos informáticos. Realizo la configuración, instalación y actualización de sistemas operativos y software ofimático en ordenadores de escritorio y servidores. Administro y mantengo las redes internas, resolviendo posibles incidencias. Documento la configuración de hardware y software para garantizar una correcta gestión de recursos. Me encargo de la configuración y actualización de sistemas y servidores, prestando asistencia al usuario final ante cualquier problema.",
    year: 2023,
    start_year: 2023,
    end_year: 2024,
    technologies: [
        "Windows",
        "Linux",
        "Word",
        "Excel",
        "SharePoint",
    ]
  },
  {
    company_name: "Bujaldon Santiago SL",
    job_title_en: "Full Stack Developer",
    job_title_es: "Desarrollador Web Full Stack",
    description_en:
      "At Bujaldon Santiago, I managed databases to ensure accessibility and visualize data programming on the server side with PHP (specifically with Laravel), built the app using HTML, CSS, and Bootstrap, coded on the client side using JavaScript, and managed versions with Git, GitHub, and GitLab.",
    description_es:
      "En Bujaldon Santiago me dediqué a gestionar sistemas de bases de datos, realizar operaciones para garantizar la accesibilidad y visualización de los datos programando en entorno servidor con PHP (concretamente usando como framework Laravel), maquetar la aplicación web utilizando lenguajes de marcas HTML, estilos CSS con Bootstrap, programar en entorno cliente con JavaScript y gestionar las versiones con Git, GitHub y GitLab.",
    year: 2025,
    start_year: 2025,
    end_year: 2025,
    technologies: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "PHP",
        "Laravel",
        "Git",
        "GitHub",
        "GitLab",
        "Windows",
        "Linux",
        "Word",
        "Excel",
        "SharePoint"
    ]
  },
];

const seedExperience = async () => {
  try {
    const existing = await prisma.experience.findMany({});
    const overrideDB = false;

    if (existing.length > 0 && !overrideDB) {
      console.log("Experience already seeded, skipping...");
      return;
    }

    const allTechs = await prisma.technology.findMany({});
    const techMap = {};
    for (const tech of allTechs) {
      techMap[tech.name] = tech.id;
    }

    for (const experience of experienceData) {
      const { technologies, ...experienceFields } = experience;

      const created = await prisma.experience.create({
        data: experienceFields,
      });

      const techIds = technologies
        .map((name) => techMap[name])
        .filter((id) => id !== undefined);

      const uniqueTechIds = [...new Set(techIds)];

      if (uniqueTechIds.length > 0) {
        await prisma.experienceTechnology.createMany({
          data: uniqueTechIds.map((technology_id) => ({
            experience_id: created.id,
            technology_id,
          })),
        });
      }
    }

    console.log(`Seeded ${experienceData.length} experiences with technologies`);
  } catch (error) {
    console.error(`ERROR seeding experience: ${error}`);
  }
};

module.exports = { seedExperience };