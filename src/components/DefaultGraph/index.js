import { Button } from "@material-ui/core";
import ChartCpu from "../ChartCpu";
import ChartGpu from "../ChartGpu";
import ChartRam from "../ChartRam";
import ChartDisco from "../ChartDisco";
import * as React from "react";
import api from "../../service/api";

const styles = {
  selected: {
    color: "#FFF",
    background: "#A29BFE",
    fontSize: "1rem"
  },
  default: {
    color: "#000000",
    background: "#FFF",
    fontSize: "1rem"
  }
}

export default function DefaultGraph() {
  const [machine, setMachine] = React.useState({});
  const [discos, setDiscos] = React.useState([]);
  const [discoId, setDiscoId] = React.useState();

  const [selected, setSelected] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState();

  const [componentMachine, setComponent] = React.useState("cpu");

  React.useEffect(() => {
    const idMaquin = localStorage.getItem("@wasd:idMaq");

    api
      .get(`machine/${idMaquin}`)
      .then((response) => {
        setMachine(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    api.get(`/discos/${idMaquin}`).then((response) => {
      setDiscos(response.data);
    });
  }, []);

  const select = (id) => {
    setSelected(!selected)
    setSelectedId(id)
  }

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginRight: "1%",
            width: "20%",
          }}
        >
          <Button
            style={selected && "50" == selectedId ? styles.selected : styles.default}
            onClick={select("50")}
          >
            Desempenho CPU
          </Button>
          {machine.gpu === "sem gpu no sistema" ? (
            <></>
          ) : (
            <Button
              style={selected && "70" == selectedId ? styles.selected : styles.default}
              onClick={select("70")}
            >
              Temperatura GPU
            </Button>
          )}
          {discos === undefined ?
            <></>
            :
            discos.map((d) => {
              return (
                <Button
                  style={selected && d.disco_id == selectedId ? styles.selected : styles.default}
                  onClick={() => {
                    setDiscoId(d.disco_id)
                    select(d.disco_id)
                  }}
                >
                  {d.nome}
                </Button>
              )
            })}
          <Button
            style={selected && "80" == selectedId ? styles.selected : styles.default}
            onClick={select("80")}
          >
            Uso RAM
          </Button>
        </div>
        {componentMachine === "cpu" ? (
          <ChartCpu />
        ) : componentMachine === "ram" ? (
          <ChartRam />
        ) : componentMachine === "disco" ? (
          <ChartDisco idDisco={discoId} />
        ) : (
          <ChartGpu />
        )}
      </div>
    </div>
  );
}
