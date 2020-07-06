import React from "react";
import { Container, Card } from "react-bootstrap";
import MyTambor from "./MyTambor";

function AppContent() {
  const data = [
    {
      fecha: "20-07-19",
      cantColmenas: 10,
      colmenasMuertas: 0,
      categorizacion: {
        tipo1: 7,
        tipo2: 3,
        tipo3: 0,
      },
      alimentacion: {
        tipoAlimento: "azucar",
        cantPorCol: 10,
      },
      tratSanitario: {
        nomComercial: "Oxalico",
        LoteProducido: 1,
      },
      observacion: "Se alimentaron 3 colmenas de categorizacion",
    },
    {
      fecha: "22-07-19",
      cantColmenas: 12,
      colmenasMuertas: 3,
      categorizacion: {
        tipo1: 4,
        tipo2: 1,
        tipo3: 10,
      },
      alimentacion: {
        tipoAlimento: "azucar",
        cantPorCol: 10,
      },
      tratSanitario: {
        nomComercial: "Oxalico",
        LoteProducido: 1,
      },
      observacion: "Se alimentaron 3 colmenas de categorizacion",
    },
    {
      fecha: "22-07-19",
      cantColmenas: 30,
      colmenasMuertas: 10,
      categorizacion: {
        tipo1: 4,
        tipo2: 19,
        tipo3: 2,
      },
      alimentacion: {
        tipoAlimento: "azucar",
        cantPorCol: 10,
      },
      tratSanitario: {
        nomComercial: "Oxalico",
        LoteProducido: 1,
      },
      observacion: "Se alimentaron 3 colmenas de categorizacion",
    },
  ];
  return (
    <div>
      <Container>
        <ul>
          {data.map((tambor) => {
            return (
              <li>
                <MyTambor data={tambor}></MyTambor>
              </li>
            );
          })}
        </ul>
      </Container>
    </div>
  );
}

export default AppContent;
