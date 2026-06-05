import { z } from "zod";

export const contactMessageSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(5).optional(),
  message: z.string().min(10).max(1500),
});
