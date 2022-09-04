import axios from './axios';
import apiRoutes from '../data/apiPath';
import { AxiosResponse } from 'axios';
import { changeLoading } from '../features/progress/progressSlice';
import { changeAuth } from '../features/user/userSlice';
import { AppDispatch } from '../app/store';
import { setCookie } from '../utils/helperFuns';
import { doc } from 'prettier';

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
  } catch (e) {
    console.log((e as Error).message);
    throw new Error((e as Error).message);
  } finally {
    dispatch(changeLoading(false));
  }
};

