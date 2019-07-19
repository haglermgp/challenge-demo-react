import React from 'react';
import MaterialTable from 'material-table';

// components
import { Status } from '../../components'

const DataTable = ({ data }) => {

  const [state] = React.useState({
    columns: [
      { title: 'Date', field: 'date' },
      { title: 'Reason', field: 'reason' },
      {
      	title: 'Status',
      	field: 'status',
      	render: rowData => <Status status={rowData.status} />
      },
    ],
    data: data,
  });

  return (
    <MaterialTable
      padding="dense"
      options={{
        search: false,
        toolbar: false,
      }}
      isLoading={data.status.loading.get}
      style={{ boxShadow: 'none' }}
      columns={state.columns}
      data={data.data}
    />
  );
}

export default DataTable