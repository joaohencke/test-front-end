export const types = {
  INCREASE: '@TABLE/SCROLL_INCREASE',
  SORT: '@TABLE/SORT',
  FILTER: '@TABLE/FILTER',
};

export const sort = ({ controller, sortable }) => (dispatch, getState) => {
  if (!sortable) return;
  const { items, orderBy } = getState();
  const sortedItems = [...items];
  if (orderBy.field === controller) {
    orderBy.asc = !orderBy.asc;
  } else {
    orderBy.asc = true;
    orderBy.field = controller;
  }

  sortedItems.sort((a, b) => {
    const fieldA = a[controller];
    const fieldB = b[controller];

    if (typeof fieldA === 'string' && typeof fieldB === 'string') {
      if (orderBy.asc) return fieldA.localeCompare(fieldB);
      return fieldB.localeCompare(fieldA);
    }

    if (orderBy.asc) return fieldA - fieldB;
    return fieldB - fieldA;
  });

  dispatch({
    type: types.SORT,
    orderBy,
    items: sortedItems,
  });
};

export const filter = (search) => (dispatch, getState) => {
  const { allItems } = getState();
  let filteredItems = allItems;

  if (search) {
    filteredItems = filteredItems.filter(
      (x) => x.name.toLowerCase().includes(search.toLowerCase()) || x.age === Number(search),
    );
  }
  dispatch({ type: types.FILTER, items: filteredItems });
};
