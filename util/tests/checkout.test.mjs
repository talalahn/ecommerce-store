import { expect } from '@playwright/test';

const baseUrl = 'http://localhost:3000/';

test('Checkout flow, payment page, thank you page', async ({ page }) => {
  // go to a random product page
  await page.goto(`${baseUrl}products/${Math.floor(Math.random() * 3) + 1}`);
  // click on an "add to cart" button
  await page.locator('text=Add to Beanie Basket').click();
  // go to the cart page by clicking on the Beanie Basket link
  await page.locator('text=Beanie Basket').click();
  // find the Buy Now button  by id
  const buyNowButton = await page.locator('data-test-id=cart-checkout');
  // click on the + button
  await buyNowButton.click();
  //  check the url
  await expect(page).toHaveURL(`${baseUrl}checkout`);
  // press confirm the order button before entering the info

  // fill the data in
  await page.fill('data-test-id=checkout-first-name', 'Tal');
  await page.fill('data-test-id=checkout-last-name', 'Alon');
  await page.fill('data-test-id=checkout-email', 'talon@gmail.com');
  await page.fill('data-test-id=checkout-address', 'Sesame Street 2');
  await page.fill('data-test-id=checkout-city', 'Vienna');
  await page.fill('data-test-id=checkout-postal-code', '1020');
  await page.fill('data-test-id=checkout-country', 'Austria');
  await page.fill('data-test-id=checkout-credit-card', '12345678');
  await page.fill('data-test-id=checkout-expiration-date', '04/25');
  await page.fill('data-test-id=checkout-security-code', '123');

  // after entering the data, press confirm order
  const submitButton = await page.locator(
    'data-test-id=checkout-confirm-order',
  );
  await submitButton.click();
  //  check the url
  await expect(page).toHaveURL(`${baseUrl}thank_you`);
});
