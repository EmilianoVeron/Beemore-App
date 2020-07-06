import React, { useContext } from "react";

import { Navbar, Container } from "react-bootstrap";
import AppContent from "./AppContainer";
import Menu from "./Menu";

const Home = () => {
  return (
    <div className="row">
      <Menu></Menu>
      <Container>
        <AppContent></AppContent>
      </Container>
    </div>
  );
};

export default Home;
