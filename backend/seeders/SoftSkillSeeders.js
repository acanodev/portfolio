const { prisma } = require("../config/prisma");

const CDN = "https://api.iconify.design/bi";

const softSkillsData = [
  {
    name_en: "Timeliness and responsibility",
    name_es: "Puntualidad y responsabilidad",
    image_url: `${CDN}/clock.svg?color=%239ca3af`,
  },
  {
    name_en: "Practical approach",
    name_es: "Enfoque práctico",
    image_url: `${CDN}/tools.svg?color=%239ca3af`,
  },
  {
    name_en: "Desire to learn and improve myself",
    name_es: "Ganas de aprender y superarme",
    image_url: `${CDN}/book.svg?color=%239ca3af`,
  },
  {
    name_en: "Positive attitude",
    name_es: "Actitud positiva",
    image_url: `${CDN}/emoji-smile.svg?color=%239ca3af`,
  },
  {
    name_en: "Passion for IT",
    name_es: "Pasión por las TIC",
    image_url: `${CDN}/laptop.svg?color=%239ca3af`,
  },
  {
    name_en: "Forward-looking spirit",
    name_es: "Visión de futuro",
    image_url: `${CDN}/eye.svg?color=%239ca3af`,
  },
  {
    name_en: "Communication",
    name_es: "Comunicación",
    image_url: `${CDN}/chat-dots.svg?color=%239ca3af`,
  },
  {
    name_en: "Social skills",
    name_es: "Habilidades sociales",
    image_url: `${CDN}/people.svg?color=%239ca3af`,
  },
  {
    name_en: "Reading comprehension",
    name_es: "Comprensión lectora",
    image_url: `${CDN}/book.svg?color=%239ca3af`,
  },
  {
    name_en: "Easiness to learn",
    name_es: "Facilidad para aprender",
    image_url: `${CDN}/lightbulb.svg?color=%239ca3af`,
  },
  {
    name_en: "Ease for adaptation",
    name_es: "Facilidad de adaptación",
    image_url: `${CDN}/arrow-repeat.svg?color=%239ca3af`,
  },
  {
    name_en: "Critical thinking",
    name_es: "Pensamiento crítico",
    image_url: `${CDN}/search.svg?color=%239ca3af`,
  },
  {
    name_en: "Passion to work",
    name_es: "Pasión por el trabajo",
    image_url: `${CDN}/briefcase.svg?color=%239ca3af`,
  },
  {
    name_en: "Self-study",
    name_es: "Autoaprendizaje",
    image_url: `${CDN}/person-lines-fill.svg?color=%239ca3af`,
  },
];

const seedSoftSkills = async () => {
  try {
    const existing = await prisma.softSkill.findMany({});
    const overrideDB = false;

    if (existing.length > 0 && !overrideDB) {
      console.log("Soft skills already seeded, skipping...");
      return;
    }

    if (overrideDB) await prisma.softSkill.deleteMany();

    await prisma.softSkill.createMany({ data: softSkillsData });
    console.log(`Seeded ${softSkillsData.length} soft skills`);
  } catch (error) {
    console.error(`ERROR seeding soft skills: ${error}`);
  }
};

module.exports = { seedSoftSkills };
