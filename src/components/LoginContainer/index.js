import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import BannerLogin from "./BannerLogin";
import Logo from "./Logo";
import app from "../../firebase";
import firebase from "firebase";
import { AuthContext } from "../../context/Auth";

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
  var provider = new firebase.auth.GoogleAuthProvider();
  const handleLoginGoogle = useCallback(async (event) => {
    event.preventDefault();
    app
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  });

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container-fluid App">
      <div className="container col-md-4 offset-md-4 login-container ">
        <BannerLogin></BannerLogin>
        <Logo></Logo>
        <div class="form container">
          <form onSubmit={handleLogin}>
            <div class="text-input">
              <label for="username">Email</label>
              <input type="text" name="email" id="username" placeholder="" />
              <span class="separator"> </span>
            </div>

            <div class="text-input">
              <label for="password">Password</label>
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
            </div>
          </form>
          <div className="col-md-6 offset-md-2 ">
            <p style={{ textAlign: "center" }}>or</p>
            <button onClick={handleLoginGoogle}>Sign in with google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(LoginContainer);
