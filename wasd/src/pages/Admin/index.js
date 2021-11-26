/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { styles } from "./style.js";

import ProgressBar from "../../components/ProgressBar/index.js";
import StatusCard from "../../components/StatusCard/index.js";
import DashboardHolder from "../../components/DashboardHolder/index.js";
import MainContainer from "../../components/MainContainer/index.js";
import Profile from "../../components/Profile/index.js";
import Title from "../../components/Title/index";
import api from "../../service/api.js";

const AdminPage = (props) => {
  const [machines, setMachines] = React.useState([]);
  const [machinesStatus, setMachinesStatus] = React.useState({
    Normal: 0,
    Attention: 0,
    Alert: 0,
  });

  React.useEffect(() => {
    api.get("machines/").then((response) => {
      response.data.forEach((status) => {
        if (status.status == "ativo") {
          setMachinesStatus({ Normal: machinesStatus.Normal + 1 });
        } else if (status.status == "pendente") {
          setMachinesStatus({ Attention: machinesStatus.Attention + 1 });
        } else {
          setMachinesStatus({ Alert: machinesStatus.Alert + 1 });
        }
      });

      setMachines(response.data);
    });
  }, []);

  async function handleCreateCompany() {
    const response = await api.get("machines/");
  }

  console.log(machinesStatus.Attention);

  return (
    <>
      <DashboardHolder>
        <MainContainer>
          <Title value="Home" />
          <div style={styles.cardHolder}>
            <StatusCard
              hoverColor="#D12F2F"
              type="alert"
              value={machines.length * (machinesStatus.Alert / 100)}
            />
            <StatusCard
              hoverColor="#D1902F"
              type="warning"
              value={machines.length * (machinesStatus.Attention / 100)}
            />
            <StatusCard
              hoverColor="#7FB8C4"
              type="normal"
              value={machines.length * (machinesStatus.Normal / 100)}
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
              <ProgressBar label="League of Legends" barValue={"35%"} />
              <ProgressBar label="Fortnite" barValue="55%" />
              <ProgressBar label="Minecraft" barValue="75%" />
            </div>
          </div>
        </MainContainer>
        <Profile />
      </DashboardHolder>
    </>
  );
};

export default AdminPage;
