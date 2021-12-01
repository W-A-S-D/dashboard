import { useEffect, useState } from "react";
import api from "../../service/api";
import ComputerIcon from "@material-ui/icons/Computer";

import { styles } from "./style";

const DetailGraph = (props) => {
  const [machine, setMachine] = useState({});

  useEffect(() => {
    const idMaquin = localStorage.getItem("@wasd:idMaq");

    api
      .get(`machine/${idMaquin}`)
      .then((response) => {
        setMachine(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(machine.status);

  return (
    <>
      <div
        style={{
          width: "99%",
          borderRadius: "5px",
          rgba: "(255, 255, 255, 1)",
          paddingLeft: "24px",
          paddingTop: "8px",
          margin: "15px auto",
          marginBottom: "0",
        }}
      >
        <div style={styles.alertaSetor}>
          <ComputerIcon
            style={{
              color: `${
                machine.status === "Normal"
                  ? "#7FB8C4"
                  : machine.status === "Alerta"
                  ? "#D12F2F"
                  : "#D1902F"
              } `,
              fontSize: "70",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={styles.gameSetorName}>Computador {machine.nome}</div>
            <div style={styles.linediv}>{machine.so}</div>
            <div style={styles.alinhamento}>
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50px",
                  marginLeft: "24px",
                }}
              ></div>
              <div
                style={{
                  marginLeft: "10px",
                  fontSize: "12px",
                  lineHeight: "16px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailGraph;
