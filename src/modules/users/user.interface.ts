import z from "zod";

export interface User {
  id: string;
  name: string;
  email: string;
}

export const createUserBodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
});

export type CreateUserBody = z.infer<typeof createUserBodySchema>;
