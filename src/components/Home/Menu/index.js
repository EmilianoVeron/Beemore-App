import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../context/Auth";
import { Navbar, ToggleButton } from "react-bootstrap";
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
  const [showMenu, setShowMenu] = useState(false);

  const togggleMenu = () => {
    return setShowMenu(!showMenu);
  };

  useEffect(() => {
    console.log(currentUser);
  }, []);
  return (
    <Router>
      <div className="row app-container  ">
        <div className=" col-md-2">
          <div className="menu-bt" onClick={togggleMenu}>
            <i class="fa fa-bars "></i>
          </div>
          <ul
            className={`${
              showMenu
                ? "menu nav flex-column  overflow-hidden  show-menu menu-full container "
                : " menu nav hide-menu container"
            } `}
          >
            {currentUser.photoURL ? (
              <div className="userImage-container ">
                <img className="userImage" src={currentUser.photoURL}></img>
              </div>
            ) : (
              <div className="userImage-container">
                <img className="userImage" src={no_user}></img>
              </div>
            )}
            {currentUser.displayName ? (
              <p className="text-user"> Hola {currentUser.displayName}</p>
            ) : (
              <p className="text-user"> Hola!</p>
            )}
            <div className="separator-line"></div>

            <li className="nav-item">
              <Link to="/">
                <a className="nav-link text-truncate " onClick={togggleMenu}>
                  <span className=" d-sm-inline  ">Mis Apiarios</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tambores">
                <a
                  className="nav-link collapsed text-truncate"
                  onClick={togggleMenu}
                >
                  <span className=" d-sm-inline"> Mis Tambores</span>
                </a>
              </Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link text-truncate" href="#">
                
                <span className="d-none d-sm-inline">Estadísticas</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link collapsed text-truncate" href="#submenu1">
                
                <span className="d-none d-sm-inline">Asistente virtual</span>
              </a>
            </li> */}

            <div className="separator-line"></div>
            <button
              className="btn-logout"
              onClick={() => {
                app.auth().signOut();
              }}
            >
              SIGN OUT 🐝
            </button>
            <div className="logo-png-menu">
              <img src={logo_png} alt="logo"></img>
            </div>
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
