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

  return (
    <Page>
      <Table
        columns={['#', 'Name', 'Age']}
        data={data}
        ItemComponent={({ item }) => (
          <tr>
            <th scope="row">#</th>
            <td>{item.name}</td>
            <td>{item.age}</td>
          </tr>
        )}
      />
    </Page>
  );
}
