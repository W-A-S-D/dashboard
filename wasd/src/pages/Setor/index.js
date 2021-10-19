import * as React from 'react';
import Card from "../../components/Card"
import Maquina from "../../components/Maquina"
import DashboardHolder from "../../components/DashboardHolder";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import MainContainer from "../../components/MainContainer";
import { styles } from "./styles";
import Profile from "../../components/Profile";
import ModalComponent from "../../components/Modal";

function Setor() {
    const [modalState, setModalState] = React.useState(false)
    return (
        <DashboardHolder>
            <MainContainer>
                <div id="Setor" style={styles.Setor}>
                    <div id="Titulo" style={styles.Titulo}>Setor</div>
                    
                    <img onClick={() => {
                        setModalState(true);
                    }} id="Adicionar" src="img/icones/mais.svg" alt="" style={styles.Adicionar} />
                    <div class="corpo" style={styles.corpo}>
                        <Card imagens="../../img/minecraft.png" descricao="minecraft" nomeJogo="Minecraft" nomeFunc="Carla Fracisca" bgColor="#5BD7F4" />
                        <Card imagens="../../img/fortnite.png" descricao="fortnite" nomeJogo="Fortnite" nomeFunc="Carla Francisca" bgColor="#D2B6DE" />
                        <Card imagens="../../img/lol.png" descricao="lol" nomeJogo="League of Legends" nomeFunc="Carla Francisca" bgColor="#B28BC1" />
                    </div>
                </div>
                <div id="Maquinas" style={styles.Maquinas}>
                    <div id="Titulo" style={styles.Titulo}>Dashboard do Setor</div>
                    <div class="corpo_maquina" style={styles.corpoMaquina}>
                        <Maquina
                            imagens="../../img/icones/PC1.svg"
                            hoverColor="#D12F2F"
                            descricao="Pc1"
                            computador="Computador 001"
                            alertas="Alerta"
                            imagens2="../../img/icones/Ellipse1.svg"
                            descricao2="Bolinha1"
                            bgColorGrad="linear-gradient(113.96deg, rgba(209, 47, 47, 0.38) 0%, rgba(255, 255, 255, 0.38) 98.96%)"
                        />
                        <Maquina
                            imagens="../../img/icones/PC2.svg"
                            hoverColor="#D1902F"
                            descricao="Pc2"
                            computador="Computador 002"
                            alertas="Atenção"
                            imagens2="../../img/icones/Ellipse2.svg"
                            descricao2="Bolinha2"
                            bgColorGrad="linear-gradient(114.39deg, rgba(209, 144, 47, 0.38) 1.37%, rgba(255, 255, 255, 0.38) 98.13%)"
                        />
                        <Maquina
                            imagens="../../img/icones/PC3.svg"
                            hoverColor="#7FB8C4"
                            descricao="Pc3"
                            computador="Computador 003"
                            alertas="Normal"
                            imagens2="../../img/icones/Ellipse3.svg"
                            descricao2="Bolinha3"
                            bgColorGrad="linear-gradient(114.7deg, rgba(127, 184, 196, 0.38) 0%, rgba(255, 255, 255, 0.38) 97.69%)"
                        />
                    </div>
                </div>
                <div style={styles.arrowDown}><KeyboardArrowDownIcon fontSize='large'></KeyboardArrowDownIcon></div>
            </MainContainer>
            <Profile />
            <ModalComponent open={modalState} onClick={() => {
                setModalState(false);
            }} />
        </DashboardHolder>

    )
}

export default Setor