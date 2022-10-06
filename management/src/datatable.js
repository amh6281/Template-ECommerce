export const userColumns = [
  {
    field: "_id",
    headerName: "ID",
    width: 250,
  },
  {
    field: "user",
    headerName: "유저명",
    width: 250,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src="https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
            alt="avatar"
          />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "이메일",
    width: 250,
  },
  {
    field: "isEntrepreneur",
    headerName: "사업자",
    width: 250,
  },
  {
    field: "createdAt",
    headerName: "가입일",
    width: 250,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">{params.row.createdAt.substr(0, 10)}</div>
      );
    },
  },
];
