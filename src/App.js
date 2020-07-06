import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LoginContainer from "./components/LoginContainer";
import Home from "./components/Home";
import Signup from "./components/Signup";
import { AuthProvider } from "./context/Auth";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/signup" component={Signup} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
