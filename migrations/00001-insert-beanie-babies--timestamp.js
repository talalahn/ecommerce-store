// WANT TO UPDATE THE PRODUCTS?!

// 1. CHANGE THE VALUES
// 2. MIGRATE DOWN ( yarn migrate down --all )
// 3. MIGRATE UP ( yarn migrate up )

const beanieBabyDatabase = [
  {
    id: 1,
    name: 'The Beginning',
    animal: 'Bear',
    birthday: '01.01.00',
    price: '1500',
  },
  {
    id: 2,
    name: 'Tiny',
    animal: 'Dog',
    birthday: '08.09.98',
    price: '600',
  },
  {
    id: 3,
    name: 'Schweetheart',
    animal: 'Monkey',
    birthday: '23.01.99',
    price: '1000',
  },
  {
    id: 4,
    name: 'Springy',
    animal: 'Rabbit',
    birthday: '29.02.00',
    price: '800',
  },
];

exports.up = async (sql) => {
  await sql`
		INSERT INTO
			beanie_babies ${sql(beanieBabyDatabase, 'name', 'animal', 'birthday', 'price')}
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
      birthday = ${beanieBabyData.birthday} AND
			price = ${beanieBabyData.price}
	`;
  }
};
