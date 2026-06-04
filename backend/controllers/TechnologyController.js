const {prisma} = require("../config/prisma");

const getTechnologies = async (req, res, next) => {
  try {
    const category = req.params.category;
    const validCategories = [
      "frontend",
      "backend",
      "cms",
      "databases",
      "devops_and_tools",
      "systems",
      "documentation_and_office",
    ];

    if (category && !validCategories.includes(category)) {
      throw new Error("The requested category is not valid!", 400);
    }

    const technologies = category
      ? await prisma.technology.findMany({
          where: {
            category,
          },
        })
      : await prisma.technology.findMany({});

    return res.status(200).json(technologies);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getTechnologies,
};
