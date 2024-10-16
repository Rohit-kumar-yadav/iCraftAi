
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from './schema';

// Ensure the DATABASE_URL is set correctly in .env.local

const sql = neon(process.env.NEXT_PUBLIC_DATABASE_URL!); // Check if this variable is defined


export const db = drizzle(sql,{schema})
