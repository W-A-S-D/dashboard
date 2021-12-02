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

export default function DefaultGraph(props) {
  const [machine, setMachine] = React.useState({});
  const [discos, setDiscos] = React.useState([]);
  const [discoId, setDiscoId] = React.useState();
  const [reload, setReload] = React.useState(props.reload)
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
      if (response != undefined) {
        setDiscos(response.data);

      }

    });
  }, [reload]);

  // const select = (id) => {
  //   setSelected(!selected)
  //   setSelectedId(id)
  // }

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
            style={styles.default}
            // onClick={select("50")}
            onClick={() => {
              setComponent("cpu")
            }
            }
          >
            Desempenho CPU
          </Button>
          {machine.gpu === "sem gpu no sistema" ? (
            <></>
          ) : (
            <Button
              style={styles.default}
              // onClick={select("70")}
              onClick={() => {
                setComponent("gpu")
              }
              }
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
                  style={styles.default}
                  onClick={() => {
                    setComponent("disco")
                    setDiscoId(d.disco_id)
                    // select(d.disco_id)
                  }}
                >
                  {d.nome}
                </Button>
              )
            })}
          <Button
            style={styles.default}
            onClick={() => {
              setComponent("ram")
            }}
          >
            Uso RAM
          </Button>
        </div>
        {componentMachine === "cpu" ? (
          <ChartCpu reload={reload} />
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
