import { useSelector } from "react-redux";
import { publicRequest, userRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./UserRedux";

export const getUsers = async (dispatch) => {
  dispatch(getUsersStart());
  try {
    const res = await publicRequest.get("/users", user);
    dispatch(getUsersSuccess(res.data));
  } catch (err) {
    dispatch(getUsersFailure());
  }
};
