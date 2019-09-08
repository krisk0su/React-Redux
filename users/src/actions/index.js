import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

//action creator
export const fetchPosts = () => async dispatch => {
  let response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

//action creator
export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async (id, dispatch) => {
  let response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
});
