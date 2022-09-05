import { createSlice } from '@reduxjs/toolkit';
import { IUserState } from '../../types/commonTypes';

const initialState: IUserState = {
  isAuth: false,
  username: '',
  links: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeAuth: (state, action) => {
      const { auth, username } = action.payload;
      state.isAuth = auth;
      state.username = username;
    },
    setLinks: (state, action) => {
      state.links = action.payload;
    },
    addLink: (state, action) => {
      state.links.push(action.payload);
    },
    addSomeLinks: (state, action) => {
      state.links.push(...action.payload);
    },
  },
});

export const { changeAuth, addLink, setLinks, addSomeLinks } = userSlice.actions;
export default userSlice.reducer;
