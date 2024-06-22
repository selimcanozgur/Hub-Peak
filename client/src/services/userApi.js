import axios from "axios";
import {
  loginSuccess,
  loginRequest,
  loginFail,
  signSuccess,
  signRequest,
  signFail,
} from "../feuatures/user/userSlice";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      `http://127.0.0.1:3000/api/v1/users/login`,
      { email, password },
      config
    );
    dispatch(loginSuccess(data.user));
  } catch (err) {
    dispatch(loginFail(err.response.data.message));
  }
};

export const signUp = (name, email, password, image) => async (dispatch) => {
  try {
    dispatch(signRequest());
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      `http://127.0.0.1:3000/api/v1/users/signup`,
      {
        name,
        email,
        password,
        image,
      },
      config
    );
    dispatch(signSuccess(data.user));
  } catch (err) {
    dispatch(signFail(err.response.data.message));
  }
};
