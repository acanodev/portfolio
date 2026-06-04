const { prisma } = require("../config/prisma");

const getProjects = async (req, res, next) => {
  try {
    const projects = await prisma.project.findMany({
      include: {
        projectTechnology: {
          include: {
            technology: true,
          },
        },
      },
    });

    return res.status(200).json(projects);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProjects,
};
