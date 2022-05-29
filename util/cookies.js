import Cookies from 'js-cookie';

export function getParsedCookies(key) {
  const cookieValue = Cookies.get(key); // type is string | undefined
  if (!cookieValue) {
    return undefined;
  }

  try {
    return JSON.parse(cookieValue);
  } catch (err) {
    return undefined;
  }
}

export function setStringifiedCookies(key, value) {
  Cookies.set(key, JSON.stringify(value));
}
