import React from "react";

import DashboardHolder from "../../components/DashboardHolder";
import DefaultGraph from "../../components/DefaultGraph";
import DetailGraph from "../../components/DetailGraph";
import MainContainer from "../../components/MainContainer";
import Maquina from "../../components/Machine";
import { styles, images } from "./style";
import api from "../../service/api";
import ProfileFunc from "../../components/ProfileFunc";
import { Button } from "@material-ui/core";
import ChartCpu from "../../components/ChartCpu";
import ChartGpu from "../../components/ChartGpu";
import ChartRam from "../../components/ChartRam";
import ChartDisco from "../../components/ChartDisco";
import ComputerIcon from "@material-ui/icons/Computer";

import { Chart } from "react-google-charts";


function Func() {
  const [machines, setMachines] = React.useState([]);
  const [reload, setReload] = React.useState(false);
  const [machine, setMachine] = React.useState({});
  const [discos, setDiscos] = React.useState([]);
  const [discoId, setDiscoId] = React.useState();
  const [dataGpu, setDataGpu] = React.useState();
  const [dataRam, setDataRam] = React.useState();
  const [dataCpu, setDataCpu] = React.useState();
  const [componentMachine, setComponent] = React.useState("cpu");


  React.useEffect(() => {
    api
      .get("sectors/user")
      .then((response) => {
        console.log(response.data)
        api
          .get(`/machines/sector/${response.data.setor_id}`)
          .then((response) => {
            setMachines(response.data);
            if (localStorage.getItem('@wasd:idMaq') == undefined) {
              localStorage.setItem('@wasd:idMaq', response.data[0].maquina_id);
            }

          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });


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


    var dadosGpu = [["Horário ", "Temperatura", "Máxima Ideal"]];
    var dadosRam = [["Horário", "Uso GB", "Máxima Ideal"]];
    var dadosCpu = [["Horário", "Desempenho", "Máximo Ideal"]]


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
        console.log(error);
      });



  }, [reload]);

  return (
    <DashboardHolder>
      <MainContainer>
        <div style={styles.title}>Setor</div>


        {machines.length === undefined || machines.length === 0 ? (
          <>
            <div id="Maquinas" style={styles.maquinasContainer}>
              <div className="corpo_maquina" style={styles.corpoMaquina}>
                <div>
                  Não há máquinas cadastradas
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div id="Maquinas" style={styles.maquinasContainer}>
              <div className="corpo_maquina" style={styles.corpoMaquina}>
                {machines.map((machine) => {
                  return (
                    <Maquina
                      idMaq={machine.maquina_id}
                      key={machine.machine_id}
                      computador={machine.nome}
                      alertas={machine.status}
                      onClick={() => {
                        localStorage.setItem('@wasd:idMaq', machine.maquina_id);
                        setReload(!reload);
                      }}
                    />
                  );
                })}
              </div>
            </div>
            <div style={styles.detalhesContainer}>
              <div style={styles.identificacao}>
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
                        color: `${machine.status === "Normal"
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
              </div>
              <div style={styles.containerGrafico}>
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
                      <ChartDisco idDisco={discoId} />
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
              </div>
            </div>
          </>
        )
        }

      </MainContainer >
      <ProfileFunc />
    </DashboardHolder >
  );
}

export default Func;
