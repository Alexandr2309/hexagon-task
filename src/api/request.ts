import axios from './axios';
import apiRoutes from '../data/apiPath';
import { AxiosResponse } from 'axios';
import { changeLoading } from '../features/progress/progressSlice';
import {
  addLink,
  addSomeLinks,
  changeAuth,
  setLinks,
} from '../features/user/userSlice';
import { AppDispatch } from '../app/store';
import {
  decryptPassword,
  getCookie,
  setCookie,
  setUserInfoCookie,
  throwAndLogError,
} from '../utils/helperFuns';
import { ILink, ILogin, IRegistration } from '../types/commonTypes';
const CryptoJs = require('crypto-js');

export const registration: IRegistration = async (
  username,
  password,
  dispatch
) => {
  const params = { username, password };
  try {
    dispatch(changeLoading(true));
    const res: AxiosResponse = await axios.post(
      apiRoutes.register,
      {},
      { params }
    );

    return res.data.username;
  } catch (e) {
    throwAndLogError(e as Error);
  } finally {
    dispatch(changeLoading(false));
  }
};

export const getLogin = (params : URLSearchParams ) => {
  return axios.post(apiRoutes.login, params, {
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
  })
}

export const login: ILogin = async (
  username,
  password,
  dispatch,
  update = false
) => {
  dispatch(changeLoading(true));

  try {
    const params = new URLSearchParams();
    params.append('username', username);
    params.append('password', password);

    const { data } = await getLogin(params);
    setCookie('token', `${data.token_type} ${data.access_token}`);

    if (update === false) {
      setUserInfoCookie(password, username);
      dispatch(changeAuth({ auth: true, username }));
    }
  } catch (e) {
    throwAndLogError(e as Error);
  } finally {
    dispatch(changeLoading(false));
  }
};

export const squeeze = async (
  link: string,
  dispatch: AppDispatch
): Promise<string | undefined> => {
  try {
    dispatch(changeLoading(true));

    const username = getCookie('username') as string;
    const password = decryptPassword();

    await login(username, password, dispatch, true);

    const response = await axios.post(
      `${apiRoutes.create}?link=${link}`,
      {},
      {
        headers: {
          Authorization: getCookie('token') as string,
        },
      }
    );

    const resLink: ILink = response.data;
    dispatch(addLink(resLink));

    return resLink.short;
  } catch (e) {
    throwAndLogError(e as Error);
  } finally {
    dispatch(changeLoading(false));
  }
};

function getPortionLinks(num: number) {
  return axios.get(apiRoutes.stats, {
    params: { limit: 7, offset: num * 7 },
    headers: {
      Authorization: getCookie('token') as string,
    },
  });
}

function getFirstStats() {
  return axios.get(apiRoutes.stats, {
    params: { limit: 7 },
    headers: {
      Authorization: getCookie('token') as string,
    },
  });
}

export const getRemainingStats = async (num: number, dispatch: AppDispatch) => {
  getPortionLinks(num).then(({ data }) => {
    if (data.length === 0) return;

    dispatch(addSomeLinks(data));
    getRemainingStats(num + 1, dispatch);
  });
};

export const getStatistics = async (
  dispatch: AppDispatch,
  onLoad: boolean = false
): Promise<any> => {
  try {
    if (onLoad === true) {
      dispatch(changeLoading(true));

      const username = getCookie('username') as string;
      const password = decryptPassword();

      await login(username, password, dispatch);
    }

    const response = await getFirstStats();

    dispatch(setLinks(response.data));
    getRemainingStats(1, dispatch);
  } catch (e) {
    throwAndLogError(e as Error);
  } finally {
    if (onLoad === true) dispatch(changeLoading(false));
  }
};
