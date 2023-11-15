import * as z from "zod";

export const CvCanadaSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  firstName: z.string(),
  lastName: z.string(),

  phone: z.string(),
  address: z.string(),

  education: z.string().array(),

  experience: z.string().array(),

  internshipe: z.string().array(),

  cources: z.string().array(),

  skills: z.string().array(),

  hobbies: z.string().array(),
});
