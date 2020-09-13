import React, { useEffect } from 'react';
import { Page } from '@seven/ui';
import { useReducer } from '@seven/hooks';
import { PageLoader, Table } from '@seven/components';

import reducer, { initialState } from './reducer';
import { list } from './actions';

export default function UsersList() {
  const [{ fetching, data }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch(list());
  }, []);

  if (fetching) {
    return <PageLoader />;
  }

  const columns = [
    {
      label: '#',
    },
    {
      label: 'Name',
      controller: 'name',
      sortable: true,
    },
    {
      label: 'Age',
      controller: 'age',
      sortable: true,
    },
  ];

  return (
    <Page>
      <Table
        searchable
        columns={columns}
        data={data}
        ItemComponent={({ item, index }) => (
          <tr>
            <th scope="row">{index + 1}</th>
            <td>{item.name}</td>
            <td>{item.age}</td>
          </tr>
        )}
      />
    </Page>
  );
}
