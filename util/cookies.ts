import Cookies from 'js-cookie';

export function getParsedCookies(key: string) {
  const cookieValue = Cookies.get(key); // type is string | undefined
  if (!cookieValue) {
    return [];
  }

  try {
    return JSON.parse(cookieValue);
  } catch (err) {
    return [];
  }
}

type CartItem = {
  id: number;
  cartCounter: number;
};

export function setStringifiedCookies(key: string, value: CartItem[]) {
  Cookies.set(key, JSON.stringify(value));
}
