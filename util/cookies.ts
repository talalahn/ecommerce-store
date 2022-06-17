import Cookies from 'js-cookie';
import { BeanieBabyInCart } from '../pages/products/[beanieBabyId]';

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

export function setStringifiedCookies(key: string, value: BeanieBabyInCart[]) {
  Cookies.set(key, JSON.stringify(value));
}
