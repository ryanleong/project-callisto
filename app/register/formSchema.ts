import { z } from "zod";

const schema = z.object({
  email: z.string().trim().email("Please enter a valid email"),
  password: z.string().trim().min(8, "Password must be at least 8 characters"),
  passwordConfirmation: z.string().trim().min(8, "Password must be at least 8 characters"),
}).refine((data) => data.password === data.passwordConfirmation, {
  message: "Passwords don't match",
  path: ["passwordConfirmation"],
});

export default schema;