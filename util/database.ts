import camelCase from 'camelcase-keys';
import { config } from 'dotenv-safe';
import postgres from 'postgres';

// This loads all environment variables from a .env file
// for all code after this line
if (!process.env.FLY_IO) config();

declare module globalThis {
  let postgresSqlClient: ReturnType<typeof postgres> | undefined;
}

// Connect only once to the database
// https://github.com/vercel/next.js/issues/7811#issuecomment-715259370
function connectOneTimeToDatabase() {
  if (!globalThis.postgresSqlClient) {
    globalThis.postgresSqlClient = postgres({
      transform: {
        ...postgres.camel,
        undefined: null,
      },
    });
  }
  return globalThis.postgresSqlClient;
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
  return camelCase(beanieBaby);
}
