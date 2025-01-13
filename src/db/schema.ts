import { pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";

// A basic backup of who's using the system. This is just so we can migrate later
// if something wild happens. Engineer's paranoia
export const users = pgTable("users", {
  id: uuid().primaryKey(),
  clerkId: text().unique(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export const reminderTable = pgTable("reminders", {
  id: uuid().primaryKey(),
  userId: uuid().references(() => users.id),
  name: varchar({ length: 500 }),
  description: text(),
  message: text(),
});
