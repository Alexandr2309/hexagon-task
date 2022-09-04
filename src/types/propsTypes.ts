import React, { ChangeEvent } from 'react';

export type authRole = 'register' | 'login'

export interface IUseInput {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface IAuthenticationInputs {
  username: IUseInput
  password: IUseInput
  role: authRole
}

export interface IAuthenticationField {
  text: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  role?: string;
}
