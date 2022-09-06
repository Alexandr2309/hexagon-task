import { IValidateUserAndLink } from '../types/commonTypes';
import { SECRET_KEY } from '../data/constants';

const CryptoJs = require('crypto-js');

export function getCookie(name: string): string | undefined {
  let matches = document.cookie.match(
    new RegExp(
      '(?:^|; )' +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
        '=([^;]*)'
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function setCookie(name: string, value: string) {
  let updatedCookie =
    encodeURIComponent(name) +
    '=' +
    encodeURIComponent(value) +
    ';' +
    'max-age=86400';

  document.cookie = updatedCookie;
}

export function deleteCookie(name: string) {
  setCookie(name, '');
}

export const decryptPassword = () => {
  const passwordCrypt = CryptoJs.AES.decrypt(getCookie('password'), SECRET_KEY);
  const password = passwordCrypt.toString(CryptoJs.enc.Utf8);

  return password;
};

export const validateUserAndLink: IValidateUserAndLink = (na, value) => {
  if (getCookie('token') === '') {
    na('/login');
    return false;
  }
  if (!/^(https?:\/\/)?([\w-]{1,32}\.[\w-]{1,32})[^\s@]*$/.test(value)) {
    alert('Неверно указана сслыка!');
    return false;
  }
  return true;
};

export function setUserInfoCookie(password: string, username: string) {
  const cipPassword = CryptoJs.AES.encrypt(password, SECRET_KEY).toString();
  setCookie('password', cipPassword);
  setCookie('username', username);
}

export function throwAndLogError(e: Error) {
  console.log((e as Error).message);
  throw new Error((e as Error).message);
}

export const getParams = (username: string, password: string) => {
  const params = new URLSearchParams();
  params.append('username', username);
  params.append('password', password);

  return params;
};
