import Cookies from 'js-cookie';

export function getParsedCookies(key) {
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

export function setStringifiedCookies(key, value) {
  Cookies.set(key, JSON.stringify(value));
}
