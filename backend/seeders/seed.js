const { seedTechnologies } = require("./TechnologySeeders");
// const { seedProjects } = require("./ProjectSeeders");

const seed = async () => {
  await seedTechnologies();
//   await seedProjects();
};

seed();
