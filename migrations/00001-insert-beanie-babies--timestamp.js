// WANT TO UPDATE THE PRODUCTS?!

// 1. CHANGE THE VALUES
// 2. MIGRATE DOWN ( yarn migrate down --all )
// 3. MIGRATE UP ( yarn migrate up )

const beanieBabyDatabase = [
  {
    id: 1,
    name: 'Tabasco',
    animal: 'Bull',
    price: '1500',
  },
  {
    id: 2,
    name: 'Fluff',
    animal: 'Sheep',
    price: '1200',
  },
  {
    id: 3,
    name: 'Oink',
    animal: 'Pig',
    price: '800',
  },
  {
    id: 4,
    name: 'Honey',
    animal: 'Bee',
    price: '600',
  },
];

exports.up = async (sql) => {
  await sql`
		INSERT INTO
			beanie_babies ${sql(beanieBabyDatabase, 'name', 'animal', 'price')}
	`;
};

exports.down = async (sql) => {
  for (const beanieBabyData of beanieBabyDatabase) {
    await sql`
		DELETE FROM
			beanie_babies
		WHERE
			name = ${beanieBabyData.name} AND
			animal = ${beanieBabyData.animal} AND
			price = ${beanieBabyData.price}
	`;
  }
};
