import React, { ChangeEvent } from 'react';

export type authRole = 'register' | 'login';
export type setState<T> = React.Dispatch<React.SetStateAction<T>>;

export interface IUseInput {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IAuthenticationInputs {
  username: IUseInput;
  password: IUseInput;
  role: authRole;
}

export interface IAuthenticationField {
  text: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  role?: string;
}

export interface IDialogUI {
  shortLink: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IHeaderLayout {
  children: React.ReactElement | React.ReactNode;
}

export interface IModal {
  open: boolean;
  setOpen: setState<boolean>;
  text: { content: string; extra: string };
  additionalAction?: () => void;
}

export interface IMyButton {
  text: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export interface IPaginationLink {
  page: number;
  num: number;
  changePage: (e: React.MouseEvent<HTMLAnchorElement>, num: number) => void;
}