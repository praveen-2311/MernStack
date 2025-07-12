import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Basic check (dummy logic)
    if (username === "admin" && password === "1234") {
      setIsLoggedIn(true);
      navigate("/todos");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-box">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username: admin"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="Password: 1234"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
