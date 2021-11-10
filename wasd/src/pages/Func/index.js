import React from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

import DashboardHolder from "../../components/DashboardHolder";
import DefaultGraph from "../../components/DefaultGraph";
import DetailGraph from "../../components/DetailGraph";
import MainContainer from "../../components/MainContainer";
import Maquina from "../../components/Maquina";
import Profile from "../../components/Profile";
import Title from "../../components/Title";
import { styles, images } from "./style";

function Func() {
  const [modalState, setModalState] = React.useState(false);

  let machineAlert = [
    "../../img/icones/PC1.svg",
    "#D12F2F",
    "Alerta",
    "../../img/icones/Ellipse1.svg",
    "linear-gradient(113.96deg, rgba(209, 47, 47, 0.38) 0%, rgba(255, 255, 255, 0.38) 98.96%)",
  ];

  let machineAttention = [
    "../../img/icones/PC2.svg",
    "#D1902F",
    "Atenção",
    "../../img/icones/Ellipse2.svg",
    "linear-gradient(114.39deg, rgba(209, 144, 47, 0.38) 1.37%, rgba(255, 255, 255, 0.38) 98.13%)",
  ];

  let machineNormal = [
    "../../img/icones/PC3.svg",
    "#7FB8C4",
    "Normal",
    "../../img/icones/Ellipse3.svg",
    "linear-gradient(114.7deg, rgba(127, 184, 196, 0.38) 0%, rgba(255, 255, 255, 0.38) 97.69%)",
  ];

  const [machines, setMachine] = React.useState(machineAlert);
  const [machines2, setMachine2] = React.useState(machineAttention);
  const [machines3, setMachine3] = React.useState(machineAlert);

  return (
    <DashboardHolder>
      <MainContainer>
        <Title value="Setor" />

        <div id="Maquinas" style={styles.maquinasContainer}>
          <AddCircleOutlineIcon
            onClick={() => {
              setModalState(true);
            }}
            style={styles.adicionar}
          />
          <div className="corpo_maquina" style={styles.corpoMaquina}>
            <Maquina
              imagens={machines[0]}
              hoverColor={machines[1]}
              descricao="Pc1"
              computador="Computador 001"
              alertas={machines[2]}
              imagens2={machines[3]}
              descricao2="Bolinha"
              bgColorGrad={machines[4]}
            />
            <Maquina
              imagens={machines2[0]}
              hoverColor={machines2[1]}
              descricao="Pc1"
              computador="Computador 002"
              alertas={machines2[2]}
              imagens2={machines2[3]}
              descricao2="Bolinha"
              bgColorGrad={machines2[4]}
            />
            <Maquina
              imagens={machines3[0]}
              hoverColor={machines3[1]}
              descricao="Pc3"
              computador="Computador 003"
              alertas={machines3[2]}
              imagens2={machines3[3]}
              descricao2="Bolinha"
              bgColorGrad={machines3[4]}
            />
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
