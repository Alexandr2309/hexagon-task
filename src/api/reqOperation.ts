import axios from './axios';
import apiRoutes from '../data/apiPath';
import { getCookie } from '../utils/helperFuns';

export function getFirstStats() {
  return axios.get(apiRoutes.stats, {
    params: { limit: 7 },
    headers: {
      Authorization: getCookie('token') as string,
    },
  });
}

export function getPortionLinks(num: number) {
  return axios.get(apiRoutes.stats, {
    params: { limit: 7, offset: num * 7 },
    headers: {
      Authorization: getCookie('token') as string,
    },
  });
}

export const getSqueezeLink = (link: string) => {
  return axios.post(
    `${apiRoutes.create}?link=${link}`,
    {},
    {
      headers: {
        Authorization: getCookie('token') as string,
      },
    }
  );
};

export const getLogin = (params: URLSearchParams) => {
  return axios.post(apiRoutes.login, params, {
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
  });
};

export const getRegistration = (params: {
  username: string;
  password: string;
}) => {
  return axios.post(apiRoutes.register, {}, { params });
};
