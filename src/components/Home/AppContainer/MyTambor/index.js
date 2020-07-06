import React from "react";
import { Card } from "react-bootstrap";

function MyTambor(props) {
  return (
    <div className="mt-5">
      <Card>
        <table>
          <tr>
            <td>
              <span>Fecha: </span>
              {props.data.fecha}
            </td>
            <td>
              <span>Cantidad de colmenas: </span>
              {props.data.cantColmenas}
            </td>
            <td>{props.data.colmenasMuertas}</td>
          </tr>
        </table>
      </Card>
    </div>
  );
}

export default MyTambor;
