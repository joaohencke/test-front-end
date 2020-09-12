import React, { useRef, useEffect, useReducer, useMemo } from 'react';
import { Table as UITable } from '@seven/ui';
import propTypes from 'prop-types';
import reducer, { initialState } from './reducer';
import { types } from './actions';

export default function Table({ data, columns, ItemComponent, infiniteScroll }) {
  const ref = useRef();
  const [{ size }, dispatch] = useReducer(reducer, {
    ...initialState,
    size: infiniteScroll ? initialState.size : data?.length,
  });

  useEffect(() => {
    const elm = ref.current;
    function scrollFn() {
      if (elm.scrollTop + elm.clientHeight >= elm.scrollHeight) {
        dispatch({ type: types.INCREASE });
      }
    }
    if (infiniteScroll) {
      elm.addEventListener('scroll', scrollFn);
    }
    return () => {
      if (infiniteScroll) {
        elm.removeEventListener('scroll', scrollFn);
      }
    };
  }, [infiniteScroll]);

  const pagedData = useMemo(() => data.slice(0, size), [size, data]);

  return (
    <div ref={ref} style={{ overflowY: 'scroll', height: '100vh' }}>
      <UITable>
        {columns?.length && (
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column} scope="col">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {pagedData.map((item, index) => (
            <ItemComponent item={item} key={index} />
          ))}
        </tbody>
      </UITable>
    </div>
  );
}

Table.propTypes = {
  ItemComponent: propTypes.oneOfType([propTypes.element, propTypes.func]).isRequired,
  data: propTypes.array,
  columns: propTypes.arrayOf(propTypes.string),
  infiniteScroll: propTypes.bool,
};

Table.defaultProps = {
  data: [],
  columns: null,
  infiniteScroll: true,
};
