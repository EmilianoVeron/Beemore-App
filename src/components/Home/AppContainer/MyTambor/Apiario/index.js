import React, { useEffect, useState } from "react";
import "./styles.css";
import app from "../../../../../firebase";
import { Container } from "react-bootstrap";
import { CSVLink, CSVDownload } from "react-csv";

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

  const data = [];

  content.map((item) =>
    data.push({
      distancia: item.distanciaThirdScreen,
      fecha: item.startDateFirstScreen,
      cantCol: item.cantidadDeColmenasThirdScreen,
      colMuertas: item.descartadasSecondScreen,
      categorizacion: {
        tipo1: item.obtenerNumeroDeCounterThirdScreen,
        tipo2: item.obtenerNumeroDeCounterIIThirdScreen,
        tipo3: item.obtenerNumeroDeCounterIIIThirdScreen,
      },
      alimentacion: {
        tipoAlimento: item.alimentacionFourthScreen,
        cantCol: item.KgPorColFourthScreen,
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

  const data2 = [
    {
      distancia: props.data.distanciaThirdScreen,
      fecha: props.data.startDateFirstScreen,
      cantCol: props.data.cantidadDeColmenasThirdScreen,
      colMuertas: props.data.descartadasSecondScreen,
      categorizacion: {
        tipo1: props.data.obtenerNumeroDeCounterThirdScreen,
        tipo2: props.data.obtenerNumeroDeCounterIIThirdScreen,
        tipo3: props.data.obtenerNumeroDeCounterIIIThirdScreen,
      },
      alimentacion: {
        tipoAlimento: props.data.alimentacionFourthScreen,
        cantCol: props.data.KgPorColFourthScreen,
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
    <Container>
      <div
        className={
          props.isToggled ? "apiario-container " : "apiario-container "
        }
      >
        <div className="p-3">
          <ul className="apiarios-news">
            {content.length !== 0 ? (
              content.map((item, index) => (
                <li key={index}>
                  <table>
                    <thead>
                      <tr>
                        <td>Responsable Inscripto</td>
                        <td>Distancia</td>
                        <td>Cant. Colmenas</td>
                        <td>Colmenas Muertas</td>
                        <td>Tipo I</td>
                        <td>Tipo II</td>
                        <td>Tipo III</td>
                        <td>Tipo de Alimento</td>
                        <td>Cant. por col.</td>
                        <td>Nombre Comercial</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{item.responsableTecnicoSecondScreen}</td>
                        <td>{item.distanciaThirdScreen}</td>
                        <td>{item.cantidadDeColmenasThirdScreen}</td>

                        <td>
                          {item.colmenasMuertasThirdScreen === null
                            ? 0
                            : item.colmenasMuertasThirdScreen}
                        </td>
                        <td>{item.obtenerNumeroDeCounterThirdScreen}</td>
                        <td>{item.obtenerNumeroDeCounterIIThirdScreen}</td>
                        <td>{item.obtenerNumeroDeCounterIIIThirdScreen}</td>
                        <td> {item.alimentacionFourthScreen}</td>
                        <td>{item.kgPorColFourthScreen}</td>
                        <td>
                          {props.data.nombreComercialDelProductoFourthScreen}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </li>
              ))
            ) : (
              <li>
                <table>
                  <thead>
                    <tr>
                      <td>Responsable Inscripto</td>
                      <td>Distancia</td>
                      <td>Cant. Colmenas</td>
                      <td>Colmenas Muertas</td>
                      <td>Tipo I</td>
                      <td>Tipo II</td>
                      <td>Tipo III</td>
                      <td>Tipo de Alimento</td>
                      <td>Cant. por col.</td>
                      <td>Nombre Comercial</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{props.data.responsableTecnicoSecondScreen}</td>
                      <td>{props.data.distanciaThirdScreen}</td>
                      <td>{props.data.cantidadDeColmenasThirdScreen}</td>
                      <td>
                        {" "}
                        {props.data.colmenasMuertasThirdScreen === null
                          ? 0
                          : props.data.colmenasMuertasThirdScreen}
                      </td>
                      <td>{props.data.obtenerNumeroDeCounterThirdScreen}</td>
                      <td>{props.data.obtenerNumeroDeCounterIIThirdScreen}</td>
                      <td>{props.data.obtenerNumeroDeCounterIIIThirdScreen}</td>
                      <td>
                        {" "}
                        {props.data.alimentacionFourthScreen === null
                          ? "Sin Especificar"
                          : props.data.alimentacionFourthScreen}
                      </td>
                      <td>{props.data.kgPorColFourthScreen}</td>
                      <td>
                        {props.data.nombreComercialDelProductoFourthScreen}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </li>
            )}
          </ul>
        </div>
        <CSVLink
          data={content.length !== 0 ? data : data2}
          headers={headers}
          filename={`${props.data.responsableTecnicoSecondScreen}.csv`}
          className="btn btn-success "
        >
          Exportar CSV
        </CSVLink>
      </div>
    </Container>
  );
}

export default Apiario;
