import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import api from "../../service/api";

function ChartGpu(props) {
  const [data, setData] = useState();
  var dados = [["Horário " , "Temperatura", "Máxima Ideal"]]

  useEffect(() => {
    const idMaquin = localStorage.getItem("@wasd:idMaq");

    api
      .get(`/log/${idMaquin}`)
      .then((response) => {
        
        response.data.forEach((log) => {
          let newDate = new Date(log.criado)
          let gpu = [newDate, parseFloat(log.temperatura), 100];
          dados.push(gpu);
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
          title: "Temperatura Cº",
          viewWindow: {
            min: 0,
            max: 115,
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

export default ChartGpu;
