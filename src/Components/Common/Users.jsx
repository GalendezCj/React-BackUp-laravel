import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { FaSearch, FaUserEdit, FaTrashAlt, FaUserPlus } from "react-icons/fa";

export const Users = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // 🧍 Sample data (you can replace this with data from your backend)
  const users = [
    { id: 1, name: "Maria Santos", email: "maria@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "John Cruz", email: "john@example.com", role: "Seller", status: "Inactive" },
    { id: 3, name: "Angela Reyes", email: "angela@example.com", role: "User", status: "Active" },
    { id: 4, name: "Carlos Dela Cruz", email: "carlos@example.com", role: "User", status: "Active" },
  ];

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <main className="admin-dashboard">
        {/* ✅ Sidebar */}
        <Sidebar />

        {/* 👥 Users Content */}
        <section className="users-content">
          <div className="users-header">
            <h2>Users Management</h2>
            <p>Manage registered users and their account access.</p>
          </div>

          {/* 🔍 Search and Add */}
          <div className="users-toolbar">
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="add-user-btn">
              <FaUserPlus /> Add User
            </button>
          </div>

          {/* 🧾 Users Table */}
          <div className="users-table-wrapper">
            <table className="users-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user, index) => (
                    <tr key={user.id}>
                      <td>{index + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td>
                        <span
                          className={`status-badge ${
                            user.status === "Active" ? "active" : "inactive"
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td className="actions">
                        <button className="edit-btn">
                          <FaUserEdit />
                        </button>
                        <button className="delete-btn">
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="no-data">
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};
