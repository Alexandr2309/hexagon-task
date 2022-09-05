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
    encodeURIComponent(name) + '=' + encodeURIComponent(value);

  document.cookie = updatedCookie;
}

export function deleteCookie(name: string) {
  setCookie(name, '');
}
