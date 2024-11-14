import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

import { env } from '#/config/env.js'

import * as schema from './schema.js'

export const client = postgres(env.DATABASE_URL)
export const database = drizzle(client, { schema, logger: true })
