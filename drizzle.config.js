
import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DATABASE_URL,
  }
})
