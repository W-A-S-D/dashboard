import React from "react";

import DashboardHolder from "../../components/DashboardHolder";
import DefaultGraph from "../../components/DefaultGraph";
import DetailGraph from "../../components/DetailGraph";
import MainContainer from "../../components/MainContainer";
import Maquina from "../../components/Machine";
import Profile from "../../components/Profile";
import { styles, images } from "./style";
import api from "../../service/api";

function Func() {
  const [machines, setMachines] = React.useState([]);

  React.useEffect(() => {
    api
      .get("sectors/user")
      .then((response) => {
        console.log(response)
        api
          .get(`/machines/sector/${response.data.setor_id}`)
          .then((response) => {
            console.log(response)
            setMachines(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <DashboardHolder>
      <MainContainer>
        <div style={styles.title}>Setor</div>

        <div id="Maquinas" style={styles.maquinasContainer}>
          <div className="corpo_maquina" style={styles.corpoMaquina}>
            {machines.length === 0 ? (
              <div style={{ marginLeft: "5%", marginBottom: "3%" }}>
                Não há máquinas cadastradas
              </div>
            ) : (
              machines.map((machine) => {
                return (
                  <Maquina
                    key={machine.machine_id}
                    computador={machine.nome}
                    alertas={machine.status}
                  />
                );
              })
            )}
          </div>
        </div>
        <div style={styles.detalhesContainer}>
          <div style={styles.identificacao}>
            <DetailGraph img={images.ImagemPc} />
          </div>
          <div style={styles.containerGrafico}>
            <DefaultGraph />
          </div>
        </div>
      </MainContainer>
      <Profile />
    </DashboardHolder>
  );
}

export default Func;
