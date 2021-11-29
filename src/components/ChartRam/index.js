import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import api from "../../service/api";

function ChartRam(props) {
  const [data, setData] = useState();

  useEffect(() => {
    var dados = [["Horário", "Uso GB", "Máxima Ideal"]];
    const idMaquin = localStorage.getItem("@wasd:idMaq");

    api
      .get(`/log/${idMaquin}`)
      .then((response) => {
        response.data.forEach((log) => {
          let newDate = new Date(log.criado);
          let ram = [newDate, parseFloat(log.uso_ram), 32];
          dados.push(ram);
        });

        setData(dados);
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
  );
}

export default ChartRam;
