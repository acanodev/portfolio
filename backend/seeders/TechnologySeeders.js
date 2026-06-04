const { prisma } = require("../config/prisma");

const technologiesData = [
  {
    name: "HTML",
    category: "frontend",
    image_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    category: "frontend",
    image_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Bootstrap",
    category: "frontend",
    image_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "React",
    category: "frontend",
    image_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Angular",
    category: "frontend",
    image_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  },
  {
    name: "JavaScript",
    category: "frontend",
    image_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    category: "frontend",
    image_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },

  {
    name: "Java",
    category: "backend",
    image_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "PHP",
    category: "backend",
    image_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "Laravel",
    category: "backend",
    image_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },
  {
    name: "Express.js",
    category: "backend",
    image_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Node.js",
    category: "backend",
    image_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },

  {
    name: "WordPress",
    category: "cms",
    image_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
  },

  {
    name: "MySQL",
    category: "databases",
    image_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "MariaDB",
    category: "databases",
    image_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg",
  },
  {
    name: "MongoDB",
    category: "databases",
    image_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Prisma",
    category: "databases",
    image_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
  },
  { name: "Eloquent", category: "databases", image_url: null },

  {
    name: "Docker",
    category: "devops_and_tools",
    image_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Git",
    category: "devops_and_tools",
    image_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    category: "devops_and_tools",
    image_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },

  {
    name: "Linux",
    category: "systems",
    image_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  {
    name: "Windows",
    category: "systems",
    image_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
  },
  {
    name: "VirtualBox",
    category: "systems",
    image_url:
      "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/virtualbox.svg",
  },

  {
    name: "Markdown",
    category: "documentation_and_office",
    image_url:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg",
  },
  {
    name: "Word",
    category: "documentation_and_office",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/8/8d/Microsoft_Word_2013-2019_logo.svg",
  },
  {
    name: "Excel",
    category: "documentation_and_office",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013-2019_logo.svg",
  },
  {
    name: "PowerPoint",
    category: "documentation_and_office",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Microsoft_Office_PowerPoint_%282025%E2%80%93present%29.svg/960px-Microsoft_Office_PowerPoint_%282025%E2%80%93present%29.svg.png",
  },
];

const seedTechnologies = async () => {
  try {
    const existing = await prisma.technology.findMany({});
    const overrideDB = false;

    if (existing.length > 0 && !overrideDB) {
      console.log("Technologies already seeded, skipping...");
      return;
    }

    if (overrideDB) await prisma.technology.deleteMany();

    await prisma.technology.createMany({ data: technologiesData });
    console.log(`Seeded ${technologiesData.length} technologies`);
  } catch (error) {
    console.error(`ERROR seeding technologies: ${error}`);
  }
};

module.exports = { seedTechnologies };
