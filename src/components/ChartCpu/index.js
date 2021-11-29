import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import api from "../../service/api";

function CharCpu(props) {
  const [data, setData] = useState();

  useEffect(() => {
    const idMaquin = localStorage.getItem("@wasd:idMaq");
    var dados = [["Horário" , "Desempenho", "Máximo Ideal"]]

    api
      .get(`/log/${idMaquin}`)
      .then((response) => {
          
        response.data.forEach((log) => {
          let newDate = new Date(log.criado)
          let cpu = [newDate, parseFloat(log.freq_cpu), 100];
          dados.push(cpu);
        });

        setData(dados)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Chart
      width={"43vw"}
      height={"33vh"}
      chartType="Line"
      loader={<div>Carregando informações...</div>}
      data={data}
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
  );
}

export default CharCpu;
