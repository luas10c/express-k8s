import { defineConfig } from 'drizzle-kit'

const config = defineConfig({
  strict: true,
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL
  },
  casing: 'snake_case',
  migrations: {
    prefix: 'timestamp',
    schema: 'public',
    table: 'tb_migrations'
  },
  schema: 'src/database/schema.ts',
  out: 'src/database/migrations'
})

export default config
