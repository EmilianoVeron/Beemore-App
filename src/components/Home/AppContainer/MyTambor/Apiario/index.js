import React, { useEffect, useState } from "react";
import "./styles.css";
import app from "../../../../../firebase";
import { Container } from "react-bootstrap";
import { CSVLink, CSVDownload } from "react-csv";
import * as pizza from "../../../../../img/grafico-circular.png";
import Stats from "./Stats";
import firebase from "firebase";

function Apiario(props) {
  const headers = [
    { label: "Distancia", key: "distancia" },
    { label: "Fecha", key: "fecha" },
    { label: "Cant. de Colmenas", key: "cantCol" },
    { label: "Colmenas Muertas", key: "colMuertas" },
    { label: "Tipo I", key: "categorizacion.tipo1" },
    { label: "Tipo II", key: "categorizacion.tipo2" },
    { label: "Tipo III", key: "categorizacion.tipo3" },
    { label: "Tipo Alimento", key: "alimentacion.tipoAlimento" },
    { label: "Cant. Alimento por Col", key: "alimentacion.cantCol" },
    { label: "Cambio Panales", key: "cambioPanales" },
    {
      label: "Nombre comercial de Producto",
      key: "tratamientoSanitario.nombreComercial",
    },
    { label: "Lote Producto", key: "tratamientoSanitario.loteProducto" },
    { label: "Cantidad", key: "recambio.Cantidad" },
    { label: "Tipo", key: "recambio.Tipo" },
    { label: "Celdas Reales", key: "recambio.CeldasReales" },
    { label: "Reinas Fecundadas", key: "recambio.ReinasFec" },
    { label: "Reinas Vigentes", key: "recambio.ReinasVig" },
    { label: "Logrados", key: "recambio.Logrados" },
    { label: "Destino", key: "recambio.Destinos" },
    { label: "Ingreso", key: "recambio.Ingreso" },
    { label: "Cant Alzas Colocadas", key: "cosecha.AlzasCol" },
    {
      label: "Cant Alzas Retiradas",
      key: "cosecha.AlzasRet",
    },
    { label: "N° de Lote Extraccion", key: "cosecha.LoteExt" },
    { label: "Kg. Netos Totales", key: "cosecha.KgTotales" },
    { label: "observaciones", key: "observaciones" },
  ];

  const db = app.firestore();
  const [content, setContent] = useState([]);

  useEffect(() => {
    db.collection("News")
      .get()
      .then((snapshot) => {
        setContent(
          snapshot.docs
            .map((document) => document.data())
            .filter((item) => item.documentoIdentidad === props.doc)
        );
      });
  }, []);

  let unixDate = {};

  const data = [];

  content.map((item) =>
    data.push({
      distancia: item.distanciaThirdScreen,
      fecha: timeConverter(item.endDateFirstScreen),
      cantCol: item.cantidadDeColmenasThirdScreen,
      colMuertas: item.descartadasSecondScreen,
      categorizacion: {
        tipo1: item.obtenerNumeroDeCounterThirdScreen,
        tipo2: item.obtenerNumeroDeCounterIIThirdScreen,
        tipo3: item.obtenerNumeroDeCounterIIIThirdScreen,
      },
      alimentacion: {
        tipoAlimento: item.alimentacionFourthScreen,
        cantCol: item.kgPorColFourthScreen,
      },
      cambioPanales: "null",
      tratamientoSanitario: {
        nombreComercial: item.nombreComercialDelProductoFourthScreen,
        loteProducto: item.loteProductoFourthScreen,
      },
      recambio: {
        Cantidad: item.cantidadFifthScreen,
        Tipo: item.tipoFifthScreen,
        CeldasReales: item.celdasRealesFifthScreen,
        ReinasFec: item.reinasFecundadasFifthScreen,
        ReinasVig: item.reinasVirgenesFifthScreen,
        Logrados: item.logradosFifthScreen,
        Destinos: item.destinoFifthScreen,
        Ingreso: item.ingresoFifthScreen,
      },
      cosecha: {
        AlzasCol: item.cantAlzasColocadasSixthScreen,
        AlzasRet: item.cantAlzasRetiradasSixthScreen,
        LoteExt: item.numdeLoteExtraccionSixthScreen,
        KgTotales: item.kgNetosTotalesSixthScreen,
      },
      observaciones: "",
    })
  );

  function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var year = a.getFullYear() - 1969;
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + " " + month + " " + year;
    return time;
  }

  const data2 = [
    {
      distancia: props.data.distanciaThirdScreen,
      fecha: timeConverter(props.data.endDateFirstScreen),
      cantCol: props.data.cantidadDeColmenasThirdScreen,
      colMuertas: props.data.descartadasSecondScreen,
      categorizacion: {
        tipo1: props.data.obtenerNumeroDeCounterThirdScreen,
        tipo2: props.data.obtenerNumeroDeCounterIIThirdScreen,
        tipo3: props.data.obtenerNumeroDeCounterIIIThirdScreen,
      },
      alimentacion: {
        tipoAlimento: props.data.alimentacionFourthScreen,
        cantCol: props.data.kgPorColFourthScreen,
      },
      cambioPanales: "null",
      tratamientoSanitario: {
        nombreComercial: props.data.nombreComercialDelProductoFourthScreen,
        loteProducto: props.data.loteProductoFourthScreen,
      },
      recambio: {
        Cantidad: props.data.cantidadFifthScreen,
        Tipo: props.data.tipoFifthScreen,
        CeldasReales: props.data.celdasRealesFifthScreen,
        ReinasFec: props.data.reinasFecundadasFifthScreen,
        ReinasVig: props.data.reinasVirgenesFifthScreen,
        Logrados: props.data.logradosFifthScreen,
        Destinos: props.data.destinoFifthScreen,
        Ingreso: props.data.ingresoFifthScreen,
      },
      cosecha: {
        AlzasCol: props.data.cantAlzasColocadasSixthScreen,
        AlzasRet: props.data.cantAlzasRetiradasSixthScreen,
        LoteExt: props.data.numdeLoteExtraccionSixthScreen,
        KgTotales: props.data.kgNetosTotalesSixthScreen,
      },
      observaciones: "",
    },
  ];

  return (
    <div
      className={props.isToggled ? "apiario-container " : "apiario-container "}
    >
      <div>
        <div className="apiarios-news p-2">
          <table>
            <thead>
              <tr>
                <td>Responsable Inscripto</td>
                <td>Distancia</td>
                <td>Fecha</td>
                <td>Cant. Colmenas</td>
                <td>Colmenas Muertas</td>
                <td>Tipo I</td>
                <td>Tipo II</td>
                <td>Tipo III</td>
                <td>Tipo de Alimento</td>
                <td>Cant. por col.</td>
                <td>Nombre Comercial</td>
                <td>Lote Producto</td>
                <td>Cantidad</td>
                <td>Tipo</td>
                <td>Celdas Reales</td>
                <td>Reinas Fec.</td>
                <td>Reinas Vig.</td>
                <td>Logrados</td>
                <td>Destino</td>
                <td>Ingreso</td>
                <td>Cant. Alzas Colocadas</td>
                <td>Cant. Alzas Retiradas</td>
                <td>N° de Lote Extracción</td>
                <td>Kg. Netos Totales</td>
              </tr>
            </thead>
            <tbody>
              {content.length != 0 ? (
                data.map((item) => {
                  return (
                    <tr>
                      <td>{props.data.responsableTecnicoSecondScreen}</td>
                      <td>{item.distancia}</td>
                      <td>{item.fecha}</td>
                      <td>{item.cantCol}</td>
                      <td>{item.colMuertas}</td>
                      <td>{item.categorizacion.tipo1}</td>
                      <td>{item.categorizacion.tipo2}</td>
                      <td>{item.categorizacion.tipo3}</td>
                      <td>{item.alimentacion.tipoAlimento}</td>
                      <td>{item.alimentacion.cantCol}</td>

                      <td>{item.tratamientoSanitario.nombreComercial}</td>
                      <td>{item.tratamientoSanitario.loteProducto}</td>
                      <td>{item.recambio.Cantidad}</td>
                      <td>{item.recambio.Tipo}</td>
                      <td>{item.recambio.CeldasReales}</td>
                      <td>{item.recambio.ReinasFec}</td>
                      <td>{item.recambio.ReinasVig}</td>
                      <td>{item.recambio.Logrados}</td>
                      <td>{item.recambio.Destinos}</td>
                      <td>{item.recambio.Ingreso}</td>
                      <td>{item.cosecha.AlzasCol}</td>
                      <td>{item.cosecha.AlzasRet}</td>
                      <td>{item.cosecha.LoteExt}</td>
                      <td>{item.cosecha.KgTotales}</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td>{props.data.responsableTecnicoSecondScreen}</td>
                  <td>{data2[0].distancia}</td>
                  <td>{data2[0].fecha}</td>
                  <td>{data2[0].cantCol}</td>
                  <td>{data2[0].colMuertas}</td>
                  <td>{data2[0].categorizacion.tipo1}</td>
                  <td>{data2[0].categorizacion.tipo2}</td>
                  <td>{data2[0].categorizacion.tipo3}</td>
                  <td>{data2[0].alimentacion.tipoAlimento}</td>
                  <td>{data2[0].alimentacion.cantCol}</td>
                  <td>{data2[0].tratamientoSanitario.nombreComercial}</td>
                  <td>{data2[0].tratamientoSanitario.loteProducto}</td>
                  <td>{data2[0].recambio.Cantidad}</td>
                  <td>{data2[0].recambio.Tipo}</td>
                  <td>{data2[0].recambio.CeldasReales}</td>
                  <td>{data2[0].recambio.ReinasFec}</td>
                  <td>{data2[0].recambio.ReinasVig}</td>
                  <td>{data2[0].recambio.Logrados}</td>
                  <td>{data2[0].recambio.Destinos}</td>
                  <td>{data2[0].recambio.Ingreso}</td>
                  <td>{data2[0].cosecha.AlzasCol}</td>
                  <td>{data2[0].cosecha.AlzasRet}</td>
                  <td>{data2[0].cosecha.LoteExt}</td>
                  <td>{data2[0].cosecha.KgTotales}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div class="functions">
        <CSVLink
          data={content.length !== 0 ? data : data2}
          headers={headers}
          filename={`${props.data.responsableTecnicoSecondScreen}.csv`}
          className="btn btn-success b-func "
        >
          Exportar CSV
        </CSVLink>

        <div>
          <Stats data={content.length !== 0 ? data : data2}></Stats>
        </div>
      </div>
    </div>
  );
}

export default Apiario;
