import React, { useContext } from "react";
import { AuthContext } from "../backend/context/Auth";
import {
  FaTachometerAlt,
  FaUsers,
  FaCog,
  FaSignOutAlt,
  FaChartBar,
} from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";


const Sidebar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // Helper to set active link
  const isActive = (path) => location.pathname === path;

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <h2 className="sidebar-logo">🌿 Farmers Admin</h2>
        <p className="sidebar-user">Welcome, {user?.name || "Admin"}</p>
      </div>

      <nav className="sidebar-menu">
        <a
          href="/admin/dashboard"
          className={`sidebar-item ${isActive("/admin/dashboard") ? "active" : ""}`}
        >
          <FaTachometerAlt />
          <span>Dashboard</span>
        </a>
        <a
          href="/admin/users"
          className={`sidebar-item ${isActive("/admin/users") ? "active" : ""}`}
        >
          <FaUsers />
          <span>Users</span>
        </a>
        <a
          href="/admin/reports"
          className={`sidebar-item ${isActive("/admin/reports") ? "active" : ""}`}
        >
          <FaChartBar />
          <span>Reports</span>
        </a>
        <a
          href="/admin/settings"
          className={`sidebar-item ${isActive("/admin/settings") ? "active" : ""}`}
        >
          <FaCog />
          <span>Settings</span>
        </a>
      </nav>

      <div className="sidebar-bottom">
        <button className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
