import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import BannerLogin from "./BannerLogin";
import Logo from "./Logo";
import app from "../../firebase";
import firebase from "firebase";
import { AuthContext } from "../../context/Auth";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Signup from "../Signup";

const LoginContainer = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;

      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const handleLoginGoogle = useCallback((event) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    event.preventDefault();
    app.auth().signInWithPopup(provider);
  });

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container-fluid my-App">
      <div className="  login-container ">
        <BannerLogin></BannerLogin>
        <Logo></Logo>
        <div class="form container">
          <form onSubmit={handleLogin}>
            <div class="text-input">
              <input
                type="text"
                name="email"
                id="username"
                placeholder="Email"
                autoComplete="off"
              />
              <span class="separator"> </span>
            </div>

            <div class="text-input">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <span class="separator"> </span>
            </div>

            <div class="form-bottom">
              <button type="submit" id="submit" value="Submit">
                Sign in
              </button>

              <span className="register">
                Do not have an account?
                <Link to="/signup">
                  <b>register.</b>
                </Link>
              </span>
            </div>
          </form>
          <div className=" google-container ">
            <p>or</p>
            <button onClick={handleLoginGoogle} className="btn-google">
              Sign in with google
            </button>
          </div>
          <span className="copy">© 2020 Appi.AR - All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default withRouter(LoginContainer);
