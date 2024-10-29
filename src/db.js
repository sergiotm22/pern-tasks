import pg from "pg";
import {
  PG_USER,
  PG_HOST,
  PG_PASSWORD,
  PG_DATABASE,
  PG_PORT,
} from "./config.js";

export const pool = new pg.Pool({
  user: PG_USER,
  host: PG_HOST,
  password: PG_PASSWORD,
  database: PG_DATABASE,
  port: PG_PORT,
});

pool.on("connect", () => {
  console.log("Base de datos conectada");
});
