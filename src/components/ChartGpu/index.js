import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import api from "../../service/api";
import * as React from "react";


function ChartGpu(props) {
  const [data, setData] = React.useState();
  const [reload, setReload] = React.useState(false);

  useEffect(() => {
    var dados = [["Horário ", "Temperatura", "Máxima Ideal"]];
    const idMaquin = localStorage.getItem("@wasd:idMaq");

    api
      .get(`/log/${idMaquin}`)
      .then((response) => {
        response.data.forEach((log) => {
          let newDate = new Date(log.criado);
          let gpu = [newDate, parseFloat(log.temperatura), 90];
          dados.push(gpu);
        });

        setData(dados);
      })
      .catch((error) => {
        console.log(error);
      });



  }, []);
  setReload(props.reload)
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
