import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from './components/Login';
import TodoList from './components/TodoList';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <h1>My Todo App</h1>

        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? <Navigate to="/todos" /> : <Navigate to="/login" />
            }
          />

          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />

          <Route
            path="/todos"
            element={
              isLoggedIn ? (
                <>
                  <button onClick={() => setIsLoggedIn(false)}>Logout</button>
                  <TodoList />
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
