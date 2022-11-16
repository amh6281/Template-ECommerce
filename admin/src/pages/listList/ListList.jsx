import "./listList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethods";

const ListList = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const getLists = async () => {
      try {
        const res = await publicRequest.get("/lists");
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getLists();
  }, []);

  const columns = [
    { field: "_id", headerName: "ID", width: 300 },
    {
      field: "products",
      headerName: "제목",
      width: 450,
      renderCell: (params) => {
        return <div className="productListItem">{params.row.title}</div>;
      },
    },
    {
      field: "action",
      headerName: "기타",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <button className="productListEdit">편집</button>
            </Link>
            <DeleteOutline className="productListDelete" />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={lists}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
};

export default ListList;
