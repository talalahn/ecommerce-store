// WANT TO UPDATE THE PRODUCTS?!

// 1. CHANGE THE VALUES
// 2. MIGRATE DOWN ( yarn migrate down --all )
// 3. MIGRATE UP ( yarn migrate up )

const beanieBabyDatabase = [
  {
    id: 1,
    name: 'john',
    color: 'blonde',
    price: '1500',
  },
  {
    id: 2,
    name: 'jacob',
    color: 'red',
    price: '1200',
  },
  {
    id: 3,
    name: 'jimmy',
    color: 'black',
    price: '800',
  },
  {
    id: 4,
    name: 'Honey',
    color: 'brunette',
    price: '600',
  },
];

exports.up = async (sql) => {
  await sql`
		INSERT INTO
			beanie_babies ${sql(beanieBabyDatabase, 'name', 'color', 'price')}
	`;
};

exports.down = async (sql) => {
  for (const beanieBabyData of beanieBabyDatabase) {
    await sql`
		DELETE FROM
			beanie_babies
		WHERE
			name = ${beanieBabyData.name} AND
			color = ${beanieBabyData.color} AND
			price = ${beanieBabyData.price}
	`;
  }
};
