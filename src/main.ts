import express from 'express'
import cors from 'cors'
import { z } from 'zod'

import { env } from './config/env.js'

import { database } from './database/drizzle.js'
import { users } from './database/schema.js'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS']
  })
)

app.get('/', async function (request, response) {
  const schema = z.object({
    offset: z.coerce.number().default(0),
    limit: z.coerce.number().default(10)
  })

  const { offset, limit } = schema.parse(request.query)
  const data = await database.select().from(users).offset(offset).limit(limit)

  response.status(200).json(data)
})

app.listen(env.PORT, '0.0.0.0')
console.log(`http://localhost:${env.PORT}`)
