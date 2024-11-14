CREATE TABLE IF NOT EXISTS "tb_users" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"email" text,
	"password" text,
	"username" text,
	"birthday" date,
	"updated_at" timestamp,
	"created_at" timestamp NOT NULL,
	"deleted_at" timestamp,
	CONSTRAINT "tb_users_email_unique" UNIQUE("email"),
	CONSTRAINT "tb_users_username_unique" UNIQUE("username")
);
