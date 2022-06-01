exports.up = async (sql) => {
  await sql`
		CREATE TABLE beanie_babies (
		id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
		name varchar(20) NOT NULL,
		color varchar(20) NOT NULL,
		price integer NOT NULL
);
	`;
};

exports.down = async (sql) => {
  await sql`
		DROP TABLE beanie_babies;
	`;
};
