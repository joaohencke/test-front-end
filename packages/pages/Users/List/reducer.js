import { types } from './actions';

export const initialState = {
  data: [],
  fetching: false,
  error: null,
  size: 20,
};

export default function userListReducer(state, { type, payload }) {
  switch (type) {
    case types.FETCH:
      return {
        ...state,
        fetching: true,
        error: null,
      };
    case types.FETCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        data: payload,
      };
    case types.FETCH_ERROR:
      return {
        ...state,
        fetching: false,
        error: payload,
      };
    default:
      return state;
  }
}
