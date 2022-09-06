import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../app/store';

export interface ILink {
  id: number;
  short: string;
  target: string;
  counter: number;
}

export interface IUserState {
  isAuth: boolean;
  links: ILink[];
  username: string;
}

export interface IDataFields {
  username: string;
  password: string;
}

export interface IValidateUserAndLink {
  (na: ReturnType<typeof useNavigate>, value: string): boolean;
}
export interface IRegistration {
  (username: string, password: string, dispatch: AppDispatch): Promise<string>;
}
export interface ILogin {
  (
    username: string,
    password: string,
    dispatch: AppDispatch,
    update?: boolean
  ): void;
}

export const enum RoutesPaths {
  main = '/',
  register = '/register',
  login = '/login',
  links = 'links',
}
