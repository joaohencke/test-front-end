/* eslint-disable react/no-array-index-key */
import React, { useEffect, useMemo, useCallback } from 'react';
import { Table as UITable } from '@seven/ui';
import { useReducer, useInfiniteScroll } from '@seven/hooks';
import propTypes from 'prop-types';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import reducer, { initialState } from './reducer';
import { types, sort, filter } from './actions';
import SearchForm from '../SearchForm';
import Container from './styles';

export default function Table({ data, columns, searchable, ItemComponent, infiniteScroll }) {
  const [{ size, items, orderBy }, dispatch] = useReducer(reducer, {
    ...initialState,
    items: data,
    allItems: data,
    size: infiniteScroll ? initialState.size : data?.length,
  });
  const [ref, { dettach }] = useInfiniteScroll({
    onEndReached: () => dispatch({ type: types.INCREASE }),
  });

  useEffect(() => {
    if (!infiniteScroll) dettach();
  }, [infiniteScroll]);

  const pagedData = useMemo(() => items.slice(0, size), [size, items]);

  const handleSearch = useCallback((value) => dispatch(filter(value)), []);
  const handleSort = useCallback((column) => dispatch(sort(column)), []);

  return (
    <>
      {searchable && <SearchForm onSubmit={handleSearch} />}
      <Container ref={ref}>
        <UITable>
          {columns?.length && (
            <thead>
              <tr>
                {columns.map((column) => (
                  <UITable.TH
                    key={column.label}
                    scope="col"
                    clickable={column.sortable}
                    onClick={() => handleSort(column)}
                  >
                    {column.label}
                    &nbsp;
                    {column.controller === orderBy.field && (
                      <small>{orderBy.asc ? <FaArrowUp /> : <FaArrowDown />}</small>
                    )}
                  </UITable.TH>
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
      </Container>
    </>
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
