import camelCase from 'camelcase-keys';
import { config } from 'dotenv-safe';
import postgres from 'postgres';
import setPostgresDefaultsOnHeroku from './setPostgresDefaultsOnHeroku';

setPostgresDefaultsOnHeroku();

config();

declare module globalThis {
  let postgresSqlClient: ReturnType<typeof postgres> | undefined;
}

// Connect only once to the database (next.js bug workaround)
// https://github.com/vercel/next.js/issues/7811#issuecomment-715259370
function connectOneTimeToDatabase() {
  let sql;

  if (process.env.NODE_ENV === 'production' && process.env.DATABASE_URL) {
    // Heroku needs SSL connections but
    // has an "unauthorized" certificate
    // https://devcenter.heroku.com/changelog-items/852
    sql = postgres({ ssl: { rejectUnauthorized: false } });
  } else {
    if (!globalThis.postgresSqlClient) {
      globalThis.postgresSqlClient = postgres();
    }
    sql = globalThis.postgresSqlClient;
  }

  return sql;
}

// Connect to PostgreSQL
const sql = connectOneTimeToDatabase();

export async function getBeanieBabies() {
  const beanieBabies = await sql`
  SELECT * FROM beanie_babies
`;
  return beanieBabies.map((beanieBaby) => camelCase(beanieBaby));
}

export async function getBeanieBaby(id: number) {
  const [beanieBaby] = await sql`
    SELECT * FROM beanie_babies
    WHERE id = ${id}
  `;
  // WHAT IS THE CAMEL CASE DOING HERE?
  return camelCase(beanieBaby);
}
