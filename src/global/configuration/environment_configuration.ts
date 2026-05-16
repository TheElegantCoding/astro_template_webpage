import { createEnvironment } from 'envlys';
import { z } from 'zod';

const environmentTypes = z.object({
  NODE_ENV: z.enum(['development', 'production'], {
    error: "NODE_ENV has to be either 'development' or 'production'"
  }),
  PORT: z.coerce.number({ error: 'PORT must be a number (e.g., 4321)' })
    .default(4321),
  BASE_URL: z.string({
    error: 'Base URL is required and must be a string (e.g., http://localhost:4321)'
  }).default('http://localhost:4321')
});

const environment = createEnvironment(environmentTypes, {
  path: './src/global/env',
  generateExample: true,
  listEnvironment: ['development', 'production']
});

export { environment };