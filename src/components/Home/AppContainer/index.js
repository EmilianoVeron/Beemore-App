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
    <Container>
      <div>
        <ul>
          {data ? (
            data.map((item, index) => (
              <li style={{ listStyle: "none", marginLeft: "-100px" }}>
                <MyTambor data={item} id={index}></MyTambor>
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
