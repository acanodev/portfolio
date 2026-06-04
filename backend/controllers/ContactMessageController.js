const nodemailer = require("../config/nodemailer");
const { prisma } = require("../config/prisma");
const contactMessageSchema = require("../middlewares/validations/contactMessageSchema");
require("dotenv").config({
  path: require("path").resolve(__dirname, "../.env"),
});

const sendMessage = async (req, res, next) => {
  try {
    const data = req.body;

    const validate = contactMessageSchema.safeParse(data);
    if (!validate.success) {
      throw new Error(
        {
          ok: false,
          errors: validate.error.errors.map((e) => ({
            field: e.path.join("."),
            message: e.message,
          })),
        },
        400,
      );
    }

    const createMessage = await prisma.contactMessage.create({
      data,
    });

    await nodemailer
      .sendMail({
        from: data.email,
        to: process.env.TRANSPORTER_USER,
        subject: data.subject,
        html: data.message,
      })
      .catch((err) => {
        res.status(500).json({
            ok: false,
            message: "Error sending email!"
        });
      });

    return res.status(200).json({
      ok: true,
      data,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
    sendMessage,
};