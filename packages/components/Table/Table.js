/* eslint-disable react/no-array-index-key */
import React, { useRef, useEffect, useMemo, useCallback } from 'react';
import { Table as UITable } from '@seven/ui';
import { useReducer } from '@seven/hooks';
import propTypes from 'prop-types';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import reducer, { initialState } from './reducer';
import { types, sort, filter } from './actions';
import SearchForm from '../SearchForm';

export default function Table({ data, columns, searchable, ItemComponent, infiniteScroll }) {
  const ref = useRef();
  const [{ size, items, orderBy }, dispatch] = useReducer(reducer, {
    ...initialState,
    items: data,
    allItems: data,
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

  const pagedData = useMemo(() => items.slice(0, size), [size, items]);

  const handleSearch = useCallback((value) => dispatch(filter(value)), []);
  const handleSort = useCallback((column) => dispatch(sort(column)), []);

  return (
    <div ref={ref} style={{ overflowY: 'scroll', height: '100vh' }}>
      {searchable && <SearchForm onSubmit={handleSearch} />}
      <UITable>
        {columns?.length && (
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.label} scope="col" onClick={handleSort}>
                  {column.label}
                  &nbsp;
                  {column.controller === orderBy.field && (
                    <small>{orderBy.asc ? <FaArrowUp /> : <FaArrowDown />}</small>
                  )}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {pagedData.map((item, index) => (
            <ItemComponent item={item} index={index} key={index} />
          ))}
        </tbody>
      </UITable>
    </div>
  );
}

Table.propTypes = {
  ItemComponent: propTypes.oneOfType([propTypes.element, propTypes.func]).isRequired,
  data: propTypes.array,
  columns: propTypes.arrayOf(propTypes.any),
  infiniteScroll: propTypes.bool,
  searchable: propTypes.bool,
};

Table.defaultProps = {
  searchable: true,
  data: [],
  columns: null,
  infiniteScroll: true,
};
