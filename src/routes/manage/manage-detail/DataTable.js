import React from 'react';
import MaterialTable from 'material-table';

const DataTable = ({ data }) => {
  const [state] = React.useState({
    columns: [
      { title: 'Value', field: 'value' },
      { title: 'Description', field: 'description' },
    ],
    data: data,
  });

  return (
    <MaterialTable
      title="Posible Values"
      padding="dense"
      options={{
        search: false,
      }}
      columns={state.columns}
      data={data}
      elevation={0}
      style={{ boxShadow: 'none' }}
    />
  );
}

export default DataTable