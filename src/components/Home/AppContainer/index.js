import React, { useContext, useState, useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import MyTambor from "./MyTambor";
import app from "../../../firebase";
import { AuthContext } from "../../../context/Auth";

function AppContent() {
  const { currentUser } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [dataID, setDataID] = useState([]);
  const db = app.firestore();

  useEffect(() => {
    const myArr = [];
    let apiariosRef = db.collection("MisApiarios");
    apiariosRef
      .where("documentoIdentidad", "==", currentUser.uid)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          myArr.push(doc.id);
        });
        setDataID(myArr);
      });

    db.collection("MisApiarios")
      .get()
      .then((snapshot) => {
        setData(
          snapshot.docs
            .map((doc) => doc.data())
            .filter((item) => item.documentoIdentidad === currentUser.uid)
        );
      });
  }, []);

  return (
    <Container>
      <div>
        <ul>
          {data ? (
            data.map((item, index) => (
              <li
                style={{ listStyle: "none", marginLeft: "-100px" }}
                key={index}
              >
                <MyTambor
                  data={item}
                  id={index}
                  doc={dataID[index]}
                  changeData={setData}
                ></MyTambor>
              </li>
            ))
          ) : (
            <li className="container"> loading...</li>
          )}
        </ul>
      </div>
    </Container>
  );
}

export default AppContent;
