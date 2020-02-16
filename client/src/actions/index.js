import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleStripeToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);
  console.log(res);

  /* We are dispatching the same FETCH_USER action as we need to update the header component which is being alrready done by the same FETCH_USER action  */
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const surveySubmit = (values, history) => async dispatch => {
  const res = await axios.post("/api/surveys", values);

  history.push("/surveys");
  dispatch({ type: FETCH_USER, payload: res.data });
};
