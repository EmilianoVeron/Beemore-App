import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Spring, animated } from "react-spring/renderprops";
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
        className=" api-container"
        onClick={() => {
          toggleHandler();
        }}
      >
        <div className="header-api">
          <p>#{props.id}</p>
          {props.data.nombreComercialDelProductoFourthScreen ? (
            <p>Empresa: {props.data.nombreComercialDelProductoFourthScreen}</p>
          ) : (
            <p>Empresa:</p>
          )}
          {props.data.responsableTecnicoSecondScreen ? (
            <p>Responsable: {props.data.responsableTecnicoSecondScreen}</p>
          ) : (
            <p>Responsable:</p>
          )}
        </div>
      </div>

      {toggleData ? (
        <Apiario
          data={props.data}
          isToggled={toggleData}
          doc={props.doc}
          setDoc={props.changeData}
        ></Apiario>
      ) : null}
    </div>
  );
}

export default MyTambor;
