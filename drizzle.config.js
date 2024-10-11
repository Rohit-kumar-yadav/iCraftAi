

export default {
    dialect: 'postgresql',
    schema: './utils/db/schema.ts',
    out: './drizzle',

    dbCredentials: {
        url: 'postgresql://neondb_owner:pwclbx62mSrB@ep-young-flower-a161nkqn.ap-southeast-1.aws.neon.tech/contentGenAi?sslmode=require',

        connectionString: 'postgresql://neondb_owner:pwclbx62mSrB@ep-young-flower-a161nkqn.ap-southeast-1.aws.neon.tech/contentGenAi?sslmode=require'
    }
}