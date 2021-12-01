import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import api from "../../service/api";

function ChartDisco(props) {
  const [data, setData] = useState([
    ["Horário ", "Disco utilizado GB", "Máxima Ideal"],
  ]);
  const [maximo, setMaximo] = useState();

  useEffect(() => {
    const idMaquin = localStorage.getItem("@wasd:idMaq");
    const idDisco = props.idDisco;

    var dados = [["Horário ", "Disco utilizado GB", "Máxima Ideal"]];

    api
      .get(`/log/${idMaquin}`)
      .then((response) => {
        response.data.forEach((log) => {
          api
            .get(`/logDisco/${log.log_id}&${idDisco}`)
            .then((responseDisco) => {
              if (responseDisco.data.uso_disco != null) {
                let responseD = responseDisco.data;

                setMaximo(responseD.disco.volume);

                let newDate = new Date(log.criado);
                let x = [
                  newDate,
                  parseFloat(responseD.uso_disco),
                  parseFloat(responseD.disco.volume),
                ];

                console.log(responseD.disco);

                dados.push(x);
              }
            });

          setData(dados);
        });
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
          title: "Disco Usado GB",
          viewWindow: {
            min: 0,
            max: maximo,
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

export default ChartDisco;
