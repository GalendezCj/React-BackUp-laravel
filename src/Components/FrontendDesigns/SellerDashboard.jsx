import React from "react";
import { FaBox, FaUsers, FaChartLine, FaStore } from "react-icons/fa";
import logo from "../../assets/images/farmerslogo (2).png";
import Footer from "../Common/Footer";

const SellerDashboard = () => {
  return (
    <>
      {/* 🌿 Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-left">
            <img src={logo} alt="Logo" className="navbar-logo" />
            <h3 className="navbar-title">Farmers Market</h3>
          </div>

          <div className="navbar-right">
            <a href="#" className="nav-btn active">Dashboard</a>
            <a href="#" className="nav-btn">Products</a>
            <a href="#" className="nav-btn">Orders</a>
            <a href="#" className="nav-btn">Profile</a>
          </div>
        </div>
      </nav>

      {/* 🛍️ Seller Dashboard UI */}
      <main className="dashboard">
        <div className="dashboard-container">
          <h2>Welcome, Seller 👋</h2>
          <p className="subtitle">Here’s an overview of your business today.</p>

          <div className="dashboard-grid">
            <div className="dashboard-card">
              <FaBox className="dashboard-icon" />
              <h4>Total Products</h4>
              <p>23</p>
            </div>

            <div className="dashboard-card">
              <FaUsers className="dashboard-icon" />
              <h4>Customers</h4>
              <p>120</p>
            </div>

            <div className="dashboard-card">
              <FaChartLine className="dashboard-icon" />
              <h4>Sales This Month</h4>
              <p>₱15,200</p>
            </div>

            <div className="dashboard-card">
              <FaStore className="dashboard-icon" />
              <h4>Shop Rating</h4>
              <p>⭐ 4.8 / 5</p>
            </div>
          </div>

          <div className="seller-section">
            <h3>Recent Orders</h3>
            <table className="seller-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Product</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#ORD-1023</td>
                  <td>Jane D.</td>
                  <td>Organic Tomatoes</td>
                  <td>₱350</td>
                  <td><span className="status success">Completed</span></td>
                </tr>
                <tr>
                  <td>#ORD-1022</td>
                  <td>Mark L.</td>
                  <td>Fresh Mangoes</td>
                  <td>₱220</td>
                  <td><span className="status pending">Pending</span></td>
                </tr>
                <tr>
                  <td>#ORD-1021</td>
                  <td>Ella P.</td>
                  <td>Free-range Eggs</td>
                  <td>₱180</td>
                  <td><span className="status cancelled">Cancelled</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default SellerDashboard;
