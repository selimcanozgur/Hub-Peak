import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  loading: false,
  error: false,
  isAuthenticated: false,
};

const setLoading = (state) => {
  state.loading = true;
  state.isAuthenticated = false;
  state.error = false;
};

const setSuccess = (state, action) => {
  state.user = action.payload.user;
  state.isAuthenticated = true;
  state.loading = false;
};

const setFail = (state, action) => {
  state.error = action.payload;
  state.loading = false;
  state.isAuthenticated = false;
  state.user = null;
};

const setError = (state) => {
  state.error = false;
};

const setLogout = (state) => {
  state.user = null;
  state.loading = false;
  state.error = false;
  state.isAuthenticated = false;
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loginRequest: setLoading,
    loginSuccess: setSuccess,
    loginFail: setFail,

    signRequest: setLoading,
    signSuccess: setSuccess,
    signFail: setFail,

    clearError: setError,
    userLogout: setLogout,
  },
});

// Action creators are generated for each case reducer function
export const {
  loginSuccess,
  loginRequest,
  loginFail,
  signSuccess,
  signRequest,
  signFail,
  clearError,
  userLogout,
} = userSlice.actions;

export default userSlice.reducer;
