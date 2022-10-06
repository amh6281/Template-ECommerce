import React from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatable";

const Datatable = ({ users }) => {
  console.log(users);
  return (
    <div className="datatable">
      <DataGrid
        className="datagrid"
        rows={users}
        columns={userColumns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        getRowId={(users) => users._id}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
