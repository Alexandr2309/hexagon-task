import axios from './axios';
import apiRoutes from '../data/apiPath';
import { AxiosResponse } from 'axios';
import { changeLoading } from '../features/progress/progressSlice';
import { addLink, changeAuth, setLinks } from '../features/user/userSlice';
import { AppDispatch } from '../app/store';
import { getCookie, setCookie } from '../utils/helperFuns';
import { ILink } from '../types/commonTypes';

interface IRegistration {
  (username: string, password: string, dispatch: AppDispatch): Promise<string>;
}
interface ILogin {
  (username: string, password: string, dispatch: AppDispatch): void;
}

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
    console.log((e as Error).message);
    throw new Error((e as Error).message);
  } finally {
    dispatch(changeLoading(false));
  }
};

export const login: ILogin = async (username, password, dispatch) => {
  const params = new URLSearchParams();
  params.append('username', username);
  params.append('password', password);

  try {
    dispatch(changeLoading(true));
    const { data } = await axios.post(apiRoutes.login, params, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    });

    setCookie('token', `${data.token_type} ${data.access_token}`);
    dispatch(changeAuth({ auth: true, username }));

    getStatistics(dispatch, false);
  } catch (e) {
    console.log((e as Error).message);
    throw new Error((e as Error).message);
  } finally {
    dispatch(changeLoading(false));
  }
};

export const squeeze = async (
  link: string,
  dispatch: AppDispatch
): Promise<string> => {
  try {
    dispatch(changeLoading(true));
    const response = await axios.post(
      apiRoutes.create,
      {},
      {
        params: link,
        headers: {
          Authorization: getCookie('token') as string,
        },
      }
    );

    const resLink: ILink = response.data;
    dispatch(addLink(resLink));

    return resLink.short;
  } catch (e) {
    console.log((e as Error).message);
    throw new Error((e as Error).message);
  } finally {
    dispatch(changeLoading(false));
  }
};

export const getStatistics = async (
  dispatch: AppDispatch,
  onLoad: boolean = false
): Promise<any> => {
  try {
    if (onLoad === true) dispatch(changeLoading(true));

    const response = await axios.get(apiRoutes.stats, {
      headers: {
        Authorization: getCookie('token') as string,
      },
    });

    if (onLoad === true) dispatch(changeLoading(false));

    dispatch(setLinks(response.data));

  } catch (e) {
    console.log((e as Error).message);
    throw new Error((e as Error).message);
  } finally {
  }
};
