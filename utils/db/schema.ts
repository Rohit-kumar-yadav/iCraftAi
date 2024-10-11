import {
  integer,
  varchar,
  pgTable,
  serial,
  text,
  timestamp,
  boolean,
} from "drizzle-orm/pg-core";

export const Users = pgTable("users", {
  id: serial("id").primaryKey(),
  stripeCustomerId: text("stripe_customer_id"),
  name: varchar("name", { length: 255 }).notNull(),
  email: text("email").notNull().unique(),
  points: integer("points").default(50),
  createAt: timestamp("created_at").defaultNow(),
});

export const Subscriptions = pgTable("subscriptions", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .references(() => Users.id)
    .notNull(),
  stripeSubscriptionId: varchar("stripe_subscription_id", {
    length: 250,
  }).notNull(),
  plan: varchar("plan", { length: 50 }).notNull(),
  status: varchar("status", { length: 50 }).notNull(),
  currentPeriodStart: timestamp("current_period_start").notNull(),
  currentPeriodEnd: timestamp("current_period_end").notNull(),
  cancelAtPeriodEnd: boolean("cancel_at_period_end").notNull().default(false),
});

export const GeneratedContent = pgTable("generated_content", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .references(() => Users.id)
    .notNull(),
  content: text("content").notNull(),
  prompt: text("prompt").notNull(),
  contentType: varchar("content_type", { length: 50 }).notNull(),
  createAt: timestamp("created_at").defaultNow(),
});