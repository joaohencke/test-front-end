export const types = {
  FETCH: '@FETCH/START',
  FETCH_SUCCESS: '@FETCH/SUCCESS',
  FETCH_ERROR: '@FETCH/ERROR',
  // LOAD_MORE: '@LOAD/MORE',
};

export const list = () => async (dispatch) => {
  dispatch({ type: types.FETCH });
  try {
    const res = await fetch('https://random-persons.herokuapp.com/users');
    const json = await res.json();
    dispatch({ type: types.FETCH_SUCCESS, payload: json.data });
  } catch (e) {
    dispatch({ type: types.FETCH_ERROR, payload: e });
  }
};
