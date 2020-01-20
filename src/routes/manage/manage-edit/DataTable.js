import React from 'react';
import MaterialTable from 'material-table';

const DataTable = () => {
  const [tableState] = React.useState({
    columns: [
      { title: 'Value', field: 'value' },
      { title: 'Description', field: 'description' },
    ],
    data: [
      { value: 'Mehmet', description: 'Baran'},
      {
        value: 'Zerya Betül',
        description: 'Baran',
      },
    ],
  });

  return (
    <MaterialTable
      title="Posible Values"
      padding="dense"
      options={{
        search: false,
      }}
      columns={tableState.columns}
      data={tableState.data}
      elevation={0}
      style={{ boxShadow: 'none' }}
    />
  );
}

export default DataTable