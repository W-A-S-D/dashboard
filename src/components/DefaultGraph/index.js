import { Button } from "@material-ui/core";
import ChartCpu from "../ChartCpu";
import ChartGpu from "../ChartGpu";
import ChartRam from "../ChartRam";
import ChartDisco from "../ChartDisco";
import * as React from "react";
import api from "../../service/api";

export default function DefaultGraph() {
  const [machine, setMachine] = React.useState({});
  const [discos, setDiscos] = React.useState([]);
  const [discoId, setDiscoId] = React.useState();

  const [Cor, setCor] = React.useState("#A29BFE");
  const [Cor1, setCor1] = React.useState("#FFF");
  const [Cor2, setCor2] = React.useState("#FFF");
  const [Cor3, setCor3] = React.useState("#FFF");
  const [CorFont, setCorFont] = React.useState("#FFF");
  const [CorFont1, setCorFont1] = React.useState("#000000");
  const [CorFont2, setCorFont2] = React.useState("#000000");
  const [CorFont3, setCorFont3] = React.useState("#000000");

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

  function CPU() {
    setCor("#A29BFE");
    setCor1("#FFF");
    setCor2("#FFF");
    setCor3("#FFF");
    setCorFont("#FFF");
    setCorFont1("#000000");
    setCorFont2("#000000");
    setCorFont3("#000000");
    setComponent("cpu");
  }

  function GPU() {
    setCor("#FFF");
    setCor1("#A29BFE");
    setCor2("#FFF");
    setCor3("#FFF");
    setCorFont("#000000");
    setCorFont1("#FFF");
    setCorFont2("#000000");
    setCorFont3("#000000");
    setComponent("gpu");
  }

  function Disco() {
    setCor("#FFF");
    setCor1("#FFF");
    setCor2("#A29BFE");
    setCor3("#FFF");
    setCorFont("#000000");
    setCorFont1("#000000");
    setCorFont2("#FFF");
    setCorFont3("#000000");
    setComponent("disco");
  }

  function RAM() {
    setCor("#FFF");
    setCor1("#FFF");
    setCor2("#FFF");
    setCor3("#A29BFE");
    setCorFont("#000000");
    setCorFont1("#000000");
    setCorFont2("#000000");
    setCorFont3("#FFF");
    setComponent("ram");
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
            style={{ color: CorFont, backgroundColor: Cor, fontSize: "1rem" }}
            onClick={CPU}
          >
            Desempenho CPU
          </Button>
          {machine.gpu === "sem gpu no sistema" ? (
            <></>
          ) : (
            <Button
              style={{
                color: CorFont1,
                backgroundColor: Cor1,
                fontSize: "1rem",
              }}
              onClick={GPU}
            >
              Temperatura GPU
            </Button>
          )}
          {discos === undefined ?
            discos.map((d) => {
              return (
                <Button
                  style={{
                    color: CorFont2,
                    backgroundColor: Cor2,
                    fontSize: "1rem",
                  }}
                  onClick={() => {
                    setDiscoId(d.disco_id)
                    Disco()
                  }}
                >
                  {d.nome}
                </Button>
              )

            }) : <></>}
          <Button
            style={{ color: CorFont3, backgroundColor: Cor3, fontSize: "1rem" }}
            onClick={RAM}
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
