import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import api from "../../service/api";

function ChartFuncionario(props) {
  const [data, setData] = useState();
  const [dataDisco, setDataDisco] = useState();
  var dados = [["x", "Temperatura"]];
  var dadosDisco = [["x", "Disco utilizado GB"]];

  const getLogDiscos = (log) => {
    api.get(`/logDiscos/${log.log_id}`).then((response) => {
      response.data.forEach((disco) => {
        let x = [log.criado, parseFloat(disco.uso_disco)];
        dadosDisco.push(x);
      });
      setDataDisco(dadosDisco);
    });
  };

  useEffect(() => {
    api.get("/log/3").then((response) => {
      response.data.forEach((log) => {
        let x = [log.criado, parseFloat(log.freq_cpu)];
        dados.push(x);
      });

      setData(dados);
    });
  }, []);

  return (
    <Chart
      width={"38vw"}
      height={"33vh"}
      chartType="LineChart"
      loader={<div>Carregando informações...</div>}
      data={data}
      options={{
        hAxis: {
          title: "Horário",
        },
        colors: ["#422F8A"],
        vAxis: {
          title: props.tipo,
          viewWindow: {
            min: props.min,
            max: props.max,
          },
        },
        series: {
          0: { curveType: "function" },
        },
        legend: "none",
        chartArea: {
          width: "90%",
        },
      }}
      rootProps={{ "data-testid": "2" }}
    />
  );
}

export default ChartFuncionario;
