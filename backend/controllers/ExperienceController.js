const { prisma } = require("../config/prisma");

const getExperience = async (req, res, next) => {
    try {
        const experience = await prisma.experience.findMany({
            include: {
                experienceTechnology: {
                    include: {
                        technology: true
                    }
                }
            }
        });

        return res.status(200).json(experience);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getExperience,
}