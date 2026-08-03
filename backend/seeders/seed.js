const { seedTechnologies } = require("./TechnologySeeders");
const { seedProjects } = require("./ProjectSeeders");
const { seedSoftSkills } = require("./SoftSkillSeeders");
const { seedExperience } = require("./ExperienceSeeders");

const seed = async () => {
  try {
    await seedTechnologies();
    await seedProjects();
    await seedExperience();
    await seedSoftSkills();
  } catch (error) {
    console.log(`Error seeding database: ${error}`);
  }

    process.exit();
};

seed();