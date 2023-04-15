import postgres from "postgres";

const {
  POSTGRES_HOST,
  POSTGRES_DB_NAME,
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
} = process.env;

export const sql = postgres({
  host: POSTGRES_HOST,
  database: POSTGRES_DB_NAME,
  port: Number(POSTGRES_PORT),
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
});
