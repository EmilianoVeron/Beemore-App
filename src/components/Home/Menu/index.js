import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../../context/Auth";
import { Navbar } from "react-bootstrap";
import app from "../../../firebase.js";
import * as no_user from "../../../img/no-user.png";
import "./styles.css";
import * as logo_png from "../../../img/logo-png-blanco.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { Container } from "react-bootstrap";

import AppContent from "../AppContainer";
import Tambores from "../AppContainer/Tambores";
function Menu() {
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    console.log(currentUser);
  }, []);
  return (
    <Router>
      <div className="row app-container">
        <div className="menu col-2 collapse  d-md-flex bg-light pt-5 ml-0  container">
          <ul className=" nav flex-column flex-nowrap overflow-hidden ">
            {currentUser.photoURL ? (
              <img className="userImage" src={currentUser.photoURL}></img>
            ) : (
              <img className="userImage" src={no_user}></img>
            )}
            {currentUser.displayName ? (
              <p className="text-user"> Hola {currentUser.displayName}</p>
            ) : (
              <p className="text-user"> Hola!</p>
            )}
            <div className="separator-line"></div>

            <li className="nav-item">
              <Link to="/">
                <a className="nav-link text-truncate">
                  <i className="fa fa-home"></i>{" "}
                  <span className="d-none d-sm-inline">Mis Apiarios</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tambores">
                <a className="nav-link collapsed text-truncate">
                  <i className="fa fa-table"></i>{" "}
                  <span className="d-none d-sm-inline"> Mis Tambores</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-truncate" href="#">
                <i className="fa fa-home"></i>{" "}
                <span className="d-none d-sm-inline">Estadísticas</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link collapsed text-truncate" href="#submenu1">
                <i className="fa fa-table"></i>{" "}
                <span className="d-none d-sm-inline">Asistente virtual</span>
              </a>
            </li>

            <div className="separator-line"></div>
            <button
              className="btn-logout"
              onClick={() => {
                app.auth().signOut();
              }}
            >
              SIGN OUT 🐝
            </button>

            <img className="logo-png-menu" src={logo_png} alt="logo"></img>
          </ul>
        </div>

        <Container>
          <Switch>
            <Route exact path="/">
              <AppContent></AppContent>
            </Route>
            <Route exact path="/tambores">
              <Tambores></Tambores>
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default Menu;
