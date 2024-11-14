import { pgTable, text, date, timestamp } from 'drizzle-orm/pg-core'

export const users = pgTable('tb_users', {
  id: text('id').primaryKey(),
  name: text('name'),
  email: text('email').unique(),
  password: text('password'),
  username: text('username').unique(),
  birthday: date('birthday'),
  updatedAt: timestamp('updated_at'),
  createdAt: timestamp('created_at').notNull(),
  deletedAt: timestamp('deleted_at')
})
