const { seedTechnologies } = require("./TechnologySeeders");
// const { seedProjects } = require("./ProjectSeeders");

const seed = async () => {
  try {
    await seedTechnologies();
    //   await seedProjects();
  } catch (error) {
    console.log(`Error seeding database: ${error}`);
  }

    process.exit();
};

seed();