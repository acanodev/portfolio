const { prisma } = require('../config/prisma');

const getSoftSkills = async (req, res, next) => {
    try {
        const softSkills = await prisma.softSkill.findMany({});
        return res.status(200).json(softSkills);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getSoftSkills
};