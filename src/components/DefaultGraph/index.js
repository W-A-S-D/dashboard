import { Button } from "@material-ui/core";
import * as React from "react";
import api from "../../service/api";
import Chart from "react-google-charts";

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
  const [reload, setReload] = React.useState(props.reload)
  const [discoId, setDiscoId] = React.useState(1);
  const [dataGpu, setDataGpu] = React.useState();
  const [dataRam, setDataRam] = React.useState();
  const [dataCpu, setDataCpu] = React.useState();
  const [dataDisco, setDataDisco] = React.useState();

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
      if (response !== undefined) {
        setDiscos(response.data);

      }
    });



    var dadosGpu = [["Horário ", "Temperatura", "Máxima Ideal"]];
    var dadosRam = [["Horário", "Uso GB", "Máxima Ideal"]];
    var dadosCpu = [["Horário", "Desempenho", "Máximo Ideal"]]
    var dadosDisco = [["Horário", "Uso GB", "Máximo Ideal"]]


    api
      .get(`/log/${idMaquin}`)
      .then((response) => {
        response.data.forEach((log) => {
          let newDate = new Date(log.criado);
          let gpu = [newDate, parseFloat(log.temperatura), 90];
          let ram = [newDate, parseFloat(log.uso_ram), 32];
          let cpu = [newDate, parseFloat(log.freq_cpu), 100];

          dadosGpu.push(gpu);
          dadosRam.push(ram);
          dadosCpu.push(cpu);

        });

        setDataGpu(dadosGpu);
        setDataRam(dadosRam);
        setDataCpu(dadosCpu);

      })
      .catch((error) => {
        console.log("erro log" + error);
      });

    api
      .get(`/logDisco/${discoId}`)
      .then((response) => {
        response.data.forEach((disco) => {
          let newDate = new Date(disco.criado);
          let log_disco = [newDate, parseFloat(disco.uso_disco), parseFloat(disco.disco.volume)];

          dadosDisco.push(log_disco);

        });

        setDataDisco(dadosDisco);

      })
      .catch((error) => {
        console.log("erro log_disco" + error);
      });
  }, [reload]);

  const handleClick = (id) => {
    var dadosDisco = [["Horário", "Uso GB", "Máximo Ideal"]]
    setDiscoId(id)

    api
      .get(`/logDisco/${id}`)
      .then((response) => {
        response.data.forEach((disco) => {
          let newDate = new Date(disco.criado);
          let log_disco = [newDate, parseFloat(disco.uso_disco), parseFloat(disco.disco.volume)];

          dadosDisco.push(log_disco);

        });

        setDataDisco(dadosDisco);

      })
      .catch((error) => {
        console.log("erro log_disco" + error);
      });
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
            style={componentMachine === "cpu" ? styles.selected : styles.default}
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
              style={componentMachine === "gpu" ? styles.selected : styles.default}
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
                  style={componentMachine === "disco" && discoId === d.disco_id ? styles.selected : styles.default}
                  onClick={() => {
                    setComponent("disco")
                    handleClick(d.disco_id)
                  }}
                >
                  {d.nome}
                </Button>
              )
            })}
          <Button
            style={componentMachine === "ram" ? styles.selected : styles.default}
            onClick={() => {
              setComponent("ram")
            }}
          >
            Uso RAM
          </Button>
        </div>
        {componentMachine === "cpu" ? (
          <Chart
            width={"43vw"}
            height={"33vh"}
            chartType="Line"
            loader={<div>Carregando informações...</div>}
            data={dataCpu}
            options={{
              hAxis: {
                title: "Horário",
              },
              colors: ["#422F8A", "#F67D7D"],
              vAxis: {
                title: "Desempenho %",
                viewWindow: {
                  min: 0,
                  max: 100,
                },
              },
              series: {
                0: { curveType: "function" },
              },
              chartArea: {
                width: "90%",
              },
            }}
            rootProps={{ "data-testid": "2" }}
          />
        ) : componentMachine === "ram" ? (
          <Chart
            width={"43vw"}
            height={"33vh"}
            chartType="Line"
            loader={<div>Carregando informações...</div>}
            data={dataRam}
            options={{
              hAxis: {
                title: "Horário",
              },
              colors: ["#422F8A", "#F67D7D"],
              vAxis: {
                title: "Memória Usada GB",
                viewWindow: {
                  min: 0,
                  max: 32,
                },
              },
              series: {
                0: { curveType: "function" },
              },
              chartArea: {
                width: "90%",
              },
            }}
            rootProps={{ "data-testid": "2" }}
          />
        ) : componentMachine === "disco" ? (
          <Chart
            width={"43vw"}
            height={"33vh"}
            chartType="Line"
            loader={<div>Carregando informações...</div>}
            data={dataDisco}
            options={{
              hAxis: {
                title: "Horário",
              },
              colors: ["#422F8A", "#F67D7D"],
              vAxis: {
                title: "Disco Usado GB",
              },
              series: {
                0: { curveType: "function" },
              },
              chartArea: {
                width: "90%",
              },
            }}
            rootProps={{ "data-testid": "2" }}
          />
        ) : (
          <Chart
            width={"43vw"}
            height={"33vh"}
            chartType="Line"
            loader={<div>Carregando informações...</div>}
            data={dataGpu}
            options={{
              hAxis: {
                title: "Horário",
              },
              colors: ["#422F8A", "#F67D7D"],
              vAxis: {
                title: "Temperatura Cº",
              },
              series: {
                0: { curveType: "function" },
              },
              chartArea: {
                width: "90%",
              },
            }}
            rootProps={{ "data-testid": "2" }}
          />
        )}
      </div>
    </div>
  );
}
