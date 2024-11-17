// App.js
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import { auth } from "./firebase";
import Home from "./Components/Home/home";
import Login from "./Components/Login/login";
import Register from "./Components/Register/register";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleRegister = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    auth.signOut();
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {isLoggedIn ? (
            <li>
              <Link to="/" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          ) : null}
        </ul>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Home />
            ) : (
              <>
                <Login onLogin={handleLogin} />
                <Register onRegister={handleRegister} />
              </>
            )
          }
        />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
