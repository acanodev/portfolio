const { z } = require('zod');

const contactMessageSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    subject: z.string().optional().min(5),
    message: z.string().min(10).max(1500)
});

module.exports = contactMessageSchema;