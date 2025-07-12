import { useNavigate } from "react-router-dom";

function Header({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };

  return (
    <div className="header">
      <h1>My Todo App</h1>
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Header;
