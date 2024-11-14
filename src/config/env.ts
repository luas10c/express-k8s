import { z } from 'zod'

const schema = z.object({
  DATABASE_URL: z.string(),

  PORT: z.coerce.number().default(7000)
})

export const env = schema.parse(process.env)
