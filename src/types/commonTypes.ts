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
  username: string
  password: string
}
