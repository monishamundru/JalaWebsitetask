import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div style={{ display: "flex" }}>

      <div
        style={{
          width: "200px",
          minHeight: "100vh",
          borderRight: "1px solid gray",
          padding: "20px",
        }}
      >
        <Sidebar />

        <button onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div
        style={{
          flex: 1,
          padding: "20px",
        }}
      >
        <h1>Welcome to Dashboard</h1>

        <p>
          Employee Management System
        </p>
      </div>

    </div>
  );
}

export default Dashboard;