import dotenv from 'dotenv';

dotenv.config();

export const config = {
    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASSWORD,
    },
    cors: {
        allowedOrigin: process.env.CORS_ALLOWED_ORIGIN,
    }
}