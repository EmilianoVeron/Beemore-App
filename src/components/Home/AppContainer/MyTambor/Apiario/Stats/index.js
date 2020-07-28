import React, { useState } from "react";
import * as pizza from "../../../../../../img/grafico-circular.png";
import "./styles.css";

import { Pie } from "react-chartjs-2";

function Stats(props) {
  let cantMuertas = 0;

  for (let i = 0; i < props.data.length; i++) {
    cantMuertas = cantMuertas + parseInt(props.data[i].colMuertas);
  }

  const mortalidad =
    (parseInt(cantMuertas) * 100) /
    parseInt(props.data[props.data.length - 1].cantCol);

  const vivasActual = 100 - mortalidad;

  const [showPopUp, setShowPopUp] = useState(false);
  const [chartData, setChartData] = useState({
    chartData: {
      labels: ["% Col. Muertas", "% Col. Vivas"],
      datasets: {
        data: [mortalidad.toFixed(2), vivasActual.toFixed(2)],
      },
    },
  });
  const togglePopUp = () => {
    setShowPopUp(!showPopUp);
  };

  //data for charts
  const data = {
    labels: ["% Col. Muertas", "% Col. Vivas"],
    datasets: [
      {
        data: [
          mortalidad ? mortalidad.toFixed(2) : 0,
          mortalidad ? vivasActual : 100,
        ],
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };

  //

  return (
    <div className="container">
      <img className="btn pizza" src={pizza} onClick={togglePopUp}></img>

      <div className={showPopUp ? "overlay show" : "hide"}>
        <div className="pop-up">
          <a
            href="#"
            id="btn-cerrar-popup"
            class="btn-cerrar-popup"
            onClick={togglePopUp}
          >
            <i class="fa fa-times" aria-hidden="true"></i>
          </a>
          <div className="pop-up-content">
            <div className="pie-content">
              <Pie data={data} id="pie" />
            </div>
            <div className="table">
              <table className="table-stats">
                {" "}
                <tbody>
                  <tr>
                    <td className="title-table">Colmenas Iniciales</td>
                    <td className="table-data">{props.data[0].cantCol}</td>
                  </tr>
                  <tr>
                    <td className="title-table">Total Colmenas - Actual</td>
                    <td className="table-data">
                      {props.data[props.data.length - 1].cantCol}
                    </td>
                  </tr>
                  <tr>
                    <td className="title-table">% Mortalidad - Acumulado:</td>
                    <td className="table-data">
                      {mortalidad < 0 ? `0%` : `${mortalidad.toFixed(2)}%`}
                    </td>
                  </tr>
                  <tr>
                    <td className="title-table">Suma de Cat. Tipo I+II2</td>
                    <td className="table-data"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
