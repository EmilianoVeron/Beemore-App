import React, { useContext, useState, useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import MyTambor from "./MyTambor";
import app from "../../../firebase";
import { AuthContext } from "../../../context/Auth";

function AppContent() {
  const { currentUser } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const db = app.firestore();

  useEffect(() => {
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
    <div>
      <Container>
        <ul>
          {data.map((item, index) => (
            <li>
              <MyTambor data={item} id={index}></MyTambor>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

export default AppContent;
