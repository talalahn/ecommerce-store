# Buy a Beanie Baby E-Commerce Store

## Description

The Buy a Beanie Baby e-commerce store is a made-up store in which vintage beanie babies can be purchased. In reality, nothing can actually be purchased from this store.

## Functionalities

This next.js-project includes the following functionalities:

- a landing page
- a products page with all available products
- a page for each product with more information about the product
- the ability to add a desired amount of items into the cart
- a header cart symbol which displays how many items are currently in the cart
  cart page
- a cart page which displays all the products in the cart, their quantity, price, subtotal price, and total price with the possibility to adjust the quantity of each item or even remove it from the cart
- a checkout page
- a thank you page

## List of technologies used

- Next.js
- React.js
- PostgreSQL
- Emotion (CSS-in-JS)
  <!-- - Jest (Unit tests) -->
  <!-- - Playwright (E2E tests) -->
- Typescript
- GitHub Actions

## Setup instructions

1. Clone the repository with git clone <repo>
2. Setup the database by downloading and installing PostgreSQL
3. Create a user and a database
4. Create a new .env file
5. Copy the environment variables from .env-example into .env
6. Replace the placeholders xxxxx with your username, password and name of database
7. Install dotenv-cli with "yarn add dotenv-cli"
8. Run "yarn install" in your command line
9. Run the migrations with "yarn migrate up"
10. Start the server by running "yarn dev"

## Deploy on Heroku

1. Sign up at Heroku: https://www.heroku.com/.
2. Create a new App
3. Choose a name and select the "Europe" Region
4. Click "Connect to GitHub"
5. Search for your repository and click on "Connect". Click on "Enable Automatic Deploys"
6. Go to the Overview tab and click "Configure Add-On"
7. Search for "Postgres" and select "Heroku Postgres"
8. Trigger a deploy by pushing your repo to GitHub
