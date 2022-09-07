import { useSelector } from "react-redux";
import { publicRequest, userRequest } from "../requestMethods";
import {
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
} from "./productRedux";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    // const res = await userRequest.delete(`/products/${id}`); DB반영X
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};
