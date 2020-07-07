import React, { useState } from "react";
import { Card } from "react-bootstrap";
import app from "../../../../firebase";
import "./styles.css";
import Apiario from "./Apiario";
function MyTambor(props) {
  const [toggleData, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggleData);
    console.log(toggleData);
  };

  return (
    <div>
      <div
        className="mt-5 api-container"
        onClick={() => {
          toggleHandler();
        }}
      >
        <div className="header-api">
          <p>#{props.id}</p>
          {props.data.Empresa ? (
            <p>Empresa: {props.data.Empresa}</p>
          ) : (
            <p>Empresa: ---------</p>
          )}
          {props.data.responsableTecnicoSecondScreen ? (
            <p>Responsable: {props.data.responsableTecnicoSecondScreen}</p>
          ) : (
            <p>Responsable: ---------</p>
          )}
        </div>
      </div>
      {toggleData ? <Apiario data={props.data}></Apiario> : null}
    </div>
  );
}

export default MyTambor;
