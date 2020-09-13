import { types } from './actions';

export const initialState = {
  size: 30,
  allItems: [],
  items: [],
  orderBy: {
    field: '',
    asc: true,
  },
};

export default function tableReducer(state, { type, items, orderBy }) {
  switch (type) {
    case types.INCREASE:
      return {
        ...state,
        size: state.size + 30,
      };
    case types.SORT:
      return {
        ...state,
        items,
        orderBy,
      };
    case types.FILTER:
      return {
        ...state,
        items,
      };
    default:
      return state;
  }
}
