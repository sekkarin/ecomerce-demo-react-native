import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  sub: null,
  user: '',
  token: null,
  // iat 1684838366
};
export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setLogin: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    setLogout: state => {
      state.token = null;
      state.user = '';
    },
  },
});
export const {setLogin, setLogout} = authSlice.actions;
