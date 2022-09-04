import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false
}

const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    changeLoading: (state, action) => {
      state.isLoading = action.payload
    }
  }
})

export default progressSlice.reducer;
export const {changeLoading} = progressSlice.actions;