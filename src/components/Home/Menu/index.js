import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../../context/Auth";
import { Navbar } from "react-bootstrap";
import app from "../../../firebase.js";
import * as no_user from "../../../img/no-user.png";
import "./styles.css";
import * as logo_png from "../../../img/logo-png-blanco.png";

function Menu() {
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    console.log(currentUser);
  }, []);
  return (
    <div className="menu col-2 collapse  d-md-flex bg-light pt-5 ml-0  container">
      <ul class=" nav flex-column flex-nowrap overflow-hidden ">
        {currentUser.photoURL ? (
          <img className="userImage" src={currentUser.photoURL}></img>
        ) : (
          <img className="userImage" src={no_user}></img>
        )}
        {currentUser.displayName ? (
          <p className="text-user"> Hello {currentUser.displayName}</p>
        ) : (
          <p className="text-user"> Hello !</p>
        )}
        <div className="separator-line"></div>
        <li class="nav-item">
          <a class="nav-link text-truncate" href="#">
            <i class="fa fa-home"></i>{" "}
            <span class="d-none d-sm-inline">Mis Apiarios</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link collapsed text-truncate"
            href="#submenu1"
            data-toggle="collapse"
            data-target="#submenu1"
          >
            <i class="fa fa-table"></i>{" "}
            <span class="d-none d-sm-inline">Mis Tambores</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-truncate" href="#">
            <i class="fa fa-home"></i>{" "}
            <span class="d-none d-sm-inline">Estadísticas</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link collapsed text-truncate" href="#submenu1">
            <i class="fa fa-table"></i>{" "}
            <span class="d-none d-sm-inline">Asistente virtual</span>
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
  );
}

export default Menu;
