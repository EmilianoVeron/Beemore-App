import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import app from "../../../../firebase";

function MyTambor(props) {
  return (
    <div className="mt-5">
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
  );
}

export default MyTambor;
