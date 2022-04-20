import "./sidebar.css";
import { StyledEngineProvider } from "@mui/styled-engine";
import { Report } from "@material-ui/icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <Report />
              Home
            </li>
            <li className="sidebarListItem">Analytics</li>
            <li className="sidebarListItem">Sales</li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">Users</li>
            <li className="sidebarListItem">Products</li>
            <li className="sidebarListItem">Transactions</li>
            <li className="sidebarListItem">Reports</li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">Mail</li>
            <li className="sidebarListItem">Feedback</li>
            <li className="sidebarListItem">Messages</li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">Manage</li>
            <li className="sidebarListItem">Analytics</li>
            <li className="sidebarListItem">Reports</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
