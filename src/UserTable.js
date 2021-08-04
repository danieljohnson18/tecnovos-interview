import React from "react";
import MaterialTable from "material-table";

const userTable = (props) => {
  const { title, columns, data, icons } = props;
  return (
    <div>
      <MaterialTable
        title={title}
        columns={columns}
        data={data}
        icons={icons}
      />
    </div>
  );
};

export default userTable;
