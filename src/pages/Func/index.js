import React from "react";

import DashboardHolder from "../../components/DashboardHolder";
import MainContainer from "../../components/MainContainer";
import Maquina from "../../components/Machine";
import { styles } from "./style";
import api from "../../service/api";
import ProfileFunc from "../../components/ProfileFunc";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, OutlinedInput, Select } from "@material-ui/core";
import ComputerIcon from "@material-ui/icons/Computer";

import { Chart } from "react-google-charts";
import { Box } from "@material-ui/system";


function Func() {
  const [machines, setMachines] = React.useState([]);
  const [reload, setReload] = React.useState(false);
  const [machine, setMachine] = React.useState({});
  const [discos, setDiscos] = React.useState([]);
  const [discoId, setDiscoId] = React.useState(1);
  const [dataGpu, setDataGpu] = React.useState();
  const [dataRam, setDataRam] = React.useState();
  const [dataCpu, setDataCpu] = React.useState();
  const [dataDisco, setDataDisco] = React.useState();
  const [filter, setFilter] = React.useState("");
  const [alert, setAlert] = React.useState(false);

  const [open, setOpen] = React.useState(false);
  const [day, setDay] = React.useState('');
  const [month, setMonth] = React.useState('');
  const [year, setYear] = React.useState('');
  const [dias, setDias] = React.useState(30);
  const diasMes = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
  ]
  const [componentMachine, setComponent] = React.useState("cpu");


  React.useEffect(() => {
    api
      .get("sectors/user")
      .then((response) => {
        api
          .get(`/machines/sector/${response.data.setor_id}`)
          .then((response) => {
            setMachines(response.data);
            if (localStorage.getItem('@wasd:idMaq') === undefined) {
              localStorage.setItem('@wasd:idMaq', response.data[0].maquina_id);
            }

          })
          .catch((error) => {
            console.log("erro machine setor" + error);
          });
      })
      .catch((error) => {
        console.log("erro sector" + error);
      });


    const idMaquin = localStorage.getItem("@wasd:idMaq");

    api
      .get(`machine/${idMaquin}`)
      .then((response) => {
        setMachine(response.data);
      })
      .catch((error) => {
        console.log("erro machine" + error);
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
          let convertedDate = convertDate(newDate)
          let gpu = [convertedDate, parseFloat(log.temperatura), 90];
          let ram = [convertedDate, parseFloat(log.uso_ram), parseFloat(log.maquina.ram)];
          let cpu = [convertedDate, parseFloat(log.freq_cpu), 100];

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
          let convertedDate = convertDate(newDate)
          let log_disco = [convertedDate, parseFloat(disco.uso_disco), parseFloat(disco.disco.volume)];

          dadosDisco.push(log_disco);

        });

        setDataDisco(dadosDisco);

      })
      .catch((error) => {
        console.log("erro log_disco" + error);
      });



  }, [reload]);

  const convertDate = (date) => {
    return new Date(date.toLocaleString("pt-BR", { timeZone: "UTC" }))
  }

  const handleChangeDate = (event) => {
    setDay(Number(event.target.value) || '');
  };

  const handleChangeMonth = (event) => {
    setMonth(Number(event.target.value) || '');
    if (month == 2) {
      setDias(28)
    } else if (month % 2 !== 0) {
      setDias(31)
    } else {
      setDias(30)
    }
  };

  const handleChangeYear = (event) => {
    setYear(Number(event.target.value) || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
    setAlert(false)
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  const handleClick = (id) => {
    var dadosDisco = [["Horário", "Uso GB", "Máximo Ideal"]]
    setDiscoId(id)

    if (filter === "") {
      api
        .get(`/logDisco/${id}`)
        .then((response) => {
          response.data.forEach((disco) => {
            let newDate = new Date(disco.criado);
            let convertedDate = convertDate(newDate);
            let log_disco = [convertedDate, parseFloat(disco.uso_disco), parseFloat(disco.disco.volume)];

            dadosDisco.push(log_disco);

          });

          setDataDisco(dadosDisco);

        })
        .catch((error) => {
          console.log("erro log_disco" + error);
        });
    } else {
      api
        .post(`/logDisco/data/${id}`, {
          date: filter
        })
        .then((response) => {
          response.data.forEach((disco) => {
            let newDate = new Date(disco.criado);
            let convertedDate = convertDate(newDate);
            let log_disco = [convertedDate, parseFloat(disco.uso_disco), parseFloat(disco.disco.volume)];

            dadosDisco.push(log_disco);

          });

          setDataDisco(dadosDisco);

        })
        .catch((error) => {
          console.log("erro log_disco" + error);
        });
    }


  }

  const handleChange = () => {
    if (month < 12 || day < 1 || day > 8) {
      setAlert(true)
    } else {
      const date = year + "-" + (month < 10 ? "0" + month : month) + "-" + (day < 10 ? "0" + day : day)

      setFilter(date)
      getFilterData(date)
      setOpen(false);
    }
  }

  const getFilterData = (date) => {
    const idMaquin = localStorage.getItem("@wasd:idMaq");

    var dadosGpu = [["Horário ", "Temperatura", "Máxima Ideal"]];
    var dadosRam = [["Horário", "Uso GB", "Máxima Ideal"]];
    var dadosCpu = [["Horário", "Desempenho", "Máximo Ideal"]]
    var dadosDisco = [["Horário", "Uso GB", "Máximo Ideal"]]

    api
      .post(`/log/data/${idMaquin}`, {
        date: date
      })
      .then((response) => {
        response.data.forEach((log) => {
          let newDate = new Date(log.criado);
          let convertedDate = convertDate(newDate)

          let gpu = [convertedDate, parseFloat(log.temperatura), 90];
          let ram = [convertedDate, parseFloat(log.uso_ram), parseFloat(log.maquina.ram)];
          let cpu = [convertedDate, parseFloat(log.freq_cpu), 100];

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
      .post(`/logDisco/data/${discoId}`, {
        date: date
      })
      .then((response) => {
        response.data.forEach((disco) => {
          let newDate = new Date(disco.criado);
          let convertedDate = convertDate(newDate)
          let log_disco = [convertedDate, parseFloat(disco.uso_disco), parseFloat(disco.disco.volume)];

          dadosDisco.push(log_disco);

        });

        setDataDisco(dadosDisco);

      })
      .catch((error) => {
        console.log("erro log_disco" + error);
      });
  }

  const handleClickClean = () => {
    window.location.reload()
  }

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
                <div style={{ margin: '0 0 2% 0', display: 'flex', flexDirection: 'row', width: '50%' }}>
                  <Button onClick={handleClickOpen}>Filtrar</Button>
                  <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                    <DialogTitle>Escolha a data</DialogTitle>
                    {
                      alert ?
                        <div style={{color: 'red', marginLeft: '7%'}}>Não existe dados nesta data</div>
                      :
                        <></>
                    }
                    <DialogContent>
                      <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <FormControl sx={{ m: 1, minWidth: 80 }}>
                          <InputLabel id="demo-dialog-select-label">Dia</InputLabel>
                          <Select
                            labelId="demo-dialog-select-label"
                            id="demo-dialog-select"
                            value={day}
                            onChange={handleChangeDate}
                            input={<OutlinedInput label="Data máxima" />}
                          >
                            <MenuItem value="">
                            </MenuItem>
                            {diasMes.map((d) => {
                              if (d <= dias) {
                                return <MenuItem value={d}>{d}</MenuItem>
                              }
                            })}
                          </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                          <InputLabel id="demo-dialog-select-label">Mês</InputLabel>
                          <Select
                            labelId="demo-dialog-select-label"
                            id="demo-dialog-select"
                            value={month}
                            onChange={handleChangeMonth}
                            input={<OutlinedInput label="Mês" />}
                          >
                            <MenuItem value="">
                            </MenuItem>
                            <MenuItem value={1}>Janeiro</MenuItem>
                            <MenuItem value={2}>Fevereiro</MenuItem>
                            <MenuItem value={3}>Março</MenuItem>
                            <MenuItem value={4}>Abril</MenuItem>
                            <MenuItem value={5}>Maio</MenuItem>
                            <MenuItem value={6}>Junho</MenuItem>
                            <MenuItem value={7}>Julho</MenuItem>
                            <MenuItem value={8}>Agosto</MenuItem>
                            <MenuItem value={9}>Setembro</MenuItem>
                            <MenuItem value={10}>Outubro</MenuItem>
                            <MenuItem value={11}>Novembro</MenuItem>
                            <MenuItem value={12}>Dezembro</MenuItem>
                          </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 80 }}>
                          <InputLabel id="demo-dialog-select-label">Ano</InputLabel>
                          <Select
                            labelId="demo-dialog-select-label"
                            id="demo-dialog-select"
                            value={year}
                            onChange={handleChangeYear}
                            input={<OutlinedInput label="Ano" />}
                          >
                            <MenuItem value="">
                            </MenuItem>
                            <MenuItem value={2021}>2021</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>Cancel</Button>
                      <Button onClick={handleChange}>Ok</Button>
                    </DialogActions>
                  </Dialog>
                  <Button onClick={handleClickClean}>Limpar Filtro</Button>
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
                        style={componentMachine === "cpu" ? styles.selected : styles.default}
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
                              Disco {d.nome.replaceAll('.', '').replaceAll('\\', '')}
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
                        chartType="LineChart"
                        loader={<div>Carregando informações...</div>}
                        data={dataCpu}
                        options={{
                          hAxis: {
                            title: "Horário",
                          },
                          colors: ["#422F8A", "#F67D7D"],
                          legend: 'bottom',
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
                            width: "85%",
                          },
                        }}
                        rootProps={{ "data-testid": "2" }}
                      />
                    ) : componentMachine === "ram" ? (
                      <Chart
                        width={"43vw"}
                        height={"33vh"}
                        chartType="LineChart"
                        loader={<div>Carregando informações...</div>}
                        data={dataRam}
                        options={{
                          hAxis: {
                            title: "Horário",
                          },
                          colors: ["#422F8A", "#F67D7D"],
                          legend: 'bottom',
                          vAxis: {
                            title: "Memória Usada GB",
                            viewWindow: {
                              min: 0,
                            },
                          },
                          series: {
                            0: { curveType: "function" },
                          },
                          chartArea: {
                            width: "85%",
                          },
                        }}
                        rootProps={{ "data-testid": "2" }}
                      />
                    ) : componentMachine === "disco" ? (
                      <Chart
                        width={"43vw"}
                        height={"33vh"}
                        chartType="LineChart"
                        loader={<div>Carregando informações...</div>}
                        data={dataDisco}
                        options={{
                          hAxis: {
                            title: "Horário",
                          },
                          colors: ["#422F8A", "#F67D7D"],
                          legend: 'bottom',
                          vAxis: {
                            title: "Disco Usado GB",
                          },
                          series: {
                            0: { curveType: "function" },
                          },
                          chartArea: {
                            width: "85%",
                          },
                        }}
                        rootProps={{ "data-testid": "2" }}
                      />
                    ) : (
                      <Chart
                        width={"43vw"}
                        height={"33vh"}
                        chartType="LineChart"
                        loader={<div>Carregando informações...</div>}
                        data={dataGpu}
                        options={{
                          hAxis: {
                            title: "Horário",
                          },
                          colors: ["#422F8A", "#F67D7D"],
                          legend: 'bottom',
                          vAxis: {
                            title: "Temperatura Cº",
                          },
                          series: {
                            0: { curveType: "function" },
                          },
                          chartArea: {
                            width: "85%",
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
