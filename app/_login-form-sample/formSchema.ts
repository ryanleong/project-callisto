import { z } from 'zod';

const schema = z.object({
  email: z.string().trim().email('Please enter a valid email'),
  password: z.string().trim().min(8, 'Password must be at least 8 characters'),
});

export default schema;
