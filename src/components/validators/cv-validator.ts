import * as z from "zod";

export const CvCanadaSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  firstName: z.string(),
  lastName: z.string(),

  phone: z.string(),
  address: z.string(),

  education: z.any(),

  experience: z.any(),

  internshipe: z.any(),

  cources: z.any(),

  skills: z.any(),

  hobbies: z.any(),
});
