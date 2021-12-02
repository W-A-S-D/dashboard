import React from "react";
import { styles } from "./style.js";

import ProgressBar from "../../components/ProgressBar/index.js";
import StatusCard from "../../components/StatusCard/index.js";
import DashboardHolder from "../../components/DashboardHolder/index.js";
import MainContainer from "../../components/MainContainer/index.js";
import Profile from "../../components/Profile/index.js";
import Title from "../../components/Title/index";
import api from "../../service/api.js";
import NoMachine from "../../components/NoMachine/index.js";

const AdminPage = (props) => {
  const [machines, setMachines] = React.useState([]);
  const [sectors, setSectors] = React.useState([]);
  const [normalMachines, setNormalMachines] = React.useState();
  const [attentionMachines, setAttentionMachines] = React.useState();
  const [alertMachines, setAlertMachines] = React.useState();
  const [modal, setModal] = React.useState(false);

  React.useEffect(() => {
    api
      .get("sectors/company")
      .then((response) => {
        setSectors(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    api
      .get("machines")
      .then((response) => {
        setMachines(response.data.accountTotalMachines);
        setNormalMachines(response.data.accountNormalMachines);
        setAttentionMachines(response.data.accountAttentionMachines);
        setAlertMachines(response.data.accountAlertMachines);
      })
      .then(() => {
        if (machines === 0) {
          setModal(true)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <DashboardHolder>
        <MainContainer>
          {
            machines === 0 ?
              <NoMachine open={modal} />
              :
              <>
                <Title value="Home" />
                <div style={styles.cardHolder}>
                  <StatusCard
                    hoverColor="#D12F2F"
                    type="alert"
                    value={machines === 0 ? 0 : (alertMachines * 100) / machines}
                  />
                  <StatusCard
                    hoverColor="#D1902F"
                    type="warning"
                    value={machines === 0 ? 0 : (attentionMachines * 100) / machines}
                  />
                  <StatusCard
                    hoverColor="#7FB8C4"
                    type="normal"
                    value={machines === 0 ? 0 : (normalMachines * 100) / machines}
                  />
                </div>
                <div style={styles.grafico}>
                  <div style={styles.gameHolder}>
                    <div style={styles.dadosHolder}>
                      <div style={styles.dadosTxt}>Estável</div>
                      <div style={styles.dadosTxt}>Instável</div>
                    </div>
                  </div>
                  <div style={styles.layout}>
                    {
                      sectors.length === 0 ?
                        <div>Não há setores cadastrados</div>
                        :
                        sectors.map((s) => {
                          return <ProgressBar label={s.jogo} barValue={s.status === "normal" ? "10%" : s.status === "alert" ? "90%" : "50%"} />;
                        })
                    }
                  </div>
                </div>
              </>
          }
        </MainContainer>
        <Profile />
      </DashboardHolder>
    </>
  );
};

export default AdminPage;
