import React, { useEffect, useState } from "react";
import { FaUserCircle, FaEnvelope, FaUserTag, FaSignOutAlt, FaCalendarAlt, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../Common/Footer";
import logo from "../../assets/images/farmerslogo (2).png";

export const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userInfo");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    toast.success("Logged out successfully!");
    navigate("/");
  };

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
            <a href="/profile" className="nav-btn active">Profile</a>
            <button className="nav-btn logout-btn" onClick={handleLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>
      </nav>

      {/* 🧑 Profile Section */}
      <main>
        <div className="profile-page">
          <div className="profile-card">
            <div className="profile-header">
              <FaUserCircle className="profile-icon" />
              <h2>{user?.name || "User Name"}</h2>
              <p className="role-badge">{user?.role || "user"}</p>
            </div>

            <div className="profile-info">
              <p><FaEnvelope /> {user?.email || "user@example.com"}</p>
              <p><FaPhoneAlt /> +63 900 000 0000</p>
              <p><FaMapMarkerAlt /> Philippines</p>
              <p><FaCalendarAlt /> Member since: <strong>2025</strong></p>
              <p>
                Status:{" "}
                <span
                  className={`status-badge ${
                    user?.status === 1 ? "active" : "inactive"
                  }`}
                >
                  {user?.status === 1 ? "Active" : "Inactive"}
                </span>
              </p>
            </div>

            <div className="profile-actions">
              <button onClick={() => toast.info("Edit Profile Coming Soon!")} className="edit-btn">
                Edit Profile
              </button>
              <button onClick={handleLogout} className="logout-btn-main">
                <FaSignOutAlt /> Logout
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Profile;
