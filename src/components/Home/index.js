import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import AppContent from "./AppContainer";
import Menu from "./Menu";
import "./style.css";

const Home = () => {
  return <Menu></Menu>;
};

export default Home;
