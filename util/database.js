import camelCase from 'camelcase-keys';
import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();

const sql = postgres();

export async function getBeanieBabies() {
  const beanieBabies = await sql`
  SELECT * FROM beanie_babies
`;
  return beanieBabies.map((beanieBaby) => camelCase(beanieBaby));
}

export async function getBeanieBaby(id) {
  const [beanieBaby] = await sql`
    SELECT * FROM beanie_babies
    WHERE id = ${id}
  `;
  // WHAT IS THE CAMEL CASE DOING HERE?
  return camelCase(beanieBaby);
}
