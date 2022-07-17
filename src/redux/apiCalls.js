import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";

/**
 * It dispatches an action to the reducer to set the loading state to true, then it makes a request to
 * the backend, and if the request is successful, it dispatches an action to the reducer to set the
 * loading state to false and to set the user state to the user data returned from the backend
 * @param dispatch - This is the dispatch function that we get from the useRedux hook.
 * @param user - the user object that contains the username and password
 */
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};