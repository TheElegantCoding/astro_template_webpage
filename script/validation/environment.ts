/* eslint-disable unicorn/no-process-exit */
import dotenv from 'dotenv';
import { expand } from 'dotenv-expand';
import { resolve } from 'node:path';
import { z } from 'zod';

import { logger } from './../../src/global/util/logger';

const defaultStates = [
  'development',
  'test',
  'production'
];

const currentState = process.env.NODE_ENV ?? 'development';
const environmentConfig = dotenv.config({ path: resolve(process.cwd(), 'src/global/env/', `.env.${currentState}`) });
expand(environmentConfig);

const environmentSchema = z.object({
  NODE_ENV: z.enum(defaultStates, {
    error: "NODE_ENV debe ser 'development', 'test' o 'production'"
  }).default('development'),
  PORT: z.coerce.number({
    error: 'El PORT debe ser un número (ej: 4321)'
  }).default(4321),
  BASE_URL: z.string({
    error: 'La BASE_URL es obligatoria para las rutas del sitio,  (ej: http://localhost:4321)'
  }).default('http://localhost:4321')
});

const result = environmentSchema.safeParse(process.env);

if (result.success) {
  logger.success('Configuración de entorno validada correctamente');
} else {
  logger.error('Configuración de entorno inválida detectada', true);

  const { fieldErrors } = result.error.flatten();

  Object.entries(fieldErrors).forEach(([field, errors]) => {
    if (errors.length > 0) {
      logger.error(`Campo [${field}]: ${errors.join(', ')}`, true);
    }
  });

  process.exit(1);
}

const environmentData = result.data;
export { environmentData };
