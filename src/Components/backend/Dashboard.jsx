import React, { useContext } from "react";
import { AuthContext } from "../backend/context/Auth";
import Sidebar from "../Common/Sidebar";
import Footer from "../Common/Footer";


export const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <main className="admin-dashboard">
    
        <Sidebar />

     
        <section className="dashboard-content">
          <div className="dashboard-header">
            <h2>Welcome Back, {user?.name || "Admin"} 👋</h2>
            <p className="subtitle">Here’s an overview of today’s activity.</p>
          </div>

        
          <div className="cards-grid">
            <div className="dashboard-card">
              <h4>Total Users</h4>
              <p className="stat-number">1,240</p>
              <span className="trend up">▲ 8% from last week</span>
            </div>

            <div className="dashboard-card">
              <h4>Orders Today</h4>
              <p className="stat-number">52</p>
              <span className="trend down">▼ 3% from yesterday</span>
            </div>

            <div className="dashboard-card">
              <h4>Revenue</h4>
              <p className="stat-number">$12,480</p>
              <span className="trend up">▲ 15% this month</span>
            </div>
          </div>

     
          <div className="activity-section">
            <h3>Recent Activity</h3>
            <table className="activity-table">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Activity</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Maria Santos</td>
                  <td>Added a new product</td>
                  <td>Oct 22, 2025</td>
                  <td><span className="status success">Completed</span></td>
                </tr>
                <tr>
                  <td>John Cruz</td>
                  <td>Updated profile info</td>
                  <td>Oct 22, 2025</td>
                  <td><span className="status pending">Pending</span></td>
                </tr>
                <tr>
                  <td>Angela Reyes</td>
                  <td>Removed a user</td>
                  <td>Oct 21, 2025</td>
                  <td><span className="status failed">Failed</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};
