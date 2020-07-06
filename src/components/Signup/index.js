import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../../firebase";
import BannerLogin from "../LoginContainer/BannerLogin";
import Logo from "../LoginContainer/Logo";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div className="container-fluid App">
      <div className="container col-md-4 offset-md-4 login-container ">
        <BannerLogin></BannerLogin>
        <Logo></Logo>
        <div class="form container">
          <form onSubmit={handleSignUp}>
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
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SignUp);
