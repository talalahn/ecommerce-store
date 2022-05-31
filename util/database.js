import camelCase from 'camelcase-keys';
import { config } from 'dotenv-safe';
import postgres from 'postgres';

// import fs from 'node:fs';
// console.log(fs);

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

// export const beanieBabyDatabase = [
//   {
//     id: '1',
//     name: 'Becky',
//     color: 'blonde',
//     price: '1500',
//     // icon: ,
//   },
//   {
//     id: '2',
//     name: 'Stacy',
//     color: 'red',
//     price: '1200',
//     // icon: <i className="fa-solid fa-dog" />,
//   },
//   {
//     id: '3',
//     name: 'Raven',
//     color: 'black',
//     price: '800',
//     // icon: <i className="fa-solid fa-dog" />,
//   },
//   {
//     id: '4',
//     name: 'Honey',
//     color: 'brunette',
//     price: '600',
//     // icon: <i className="fa-solid fa-dog" />,
//   },
// ];
