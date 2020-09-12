import { types } from './actions';

export const initialState = {
  size: 30,
};

export default function tableReducer(state, { type }) {
  switch (type) {
    case types.INCREASE:
      return {
        ...state,
        size: state.size + 30,
      };
    default:
      return state;
  }
}
