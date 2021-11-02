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

    let machineAlert = [
        "../../img/icones/PC1.svg",
        "#D12F2F",
        "Alerta",
        "../../img/icones/Ellipse1.svg",
        "linear-gradient(113.96deg, rgba(209, 47, 47, 0.38) 0%, rgba(255, 255, 255, 0.38) 98.96%)"
    ]

    let machineAttention = [
        "../../img/icones/PC2.svg",
        "#D1902F",
        "Atenção",
        "../../img/icones/Ellipse2.svg",
        "linear-gradient(114.39deg, rgba(209, 144, 47, 0.38) 1.37%, rgba(255, 255, 255, 0.38) 98.13%)"
    ]

    let machineNormal = [
        "../../img/icones/PC3.svg",
        "#7FB8C4",
        "Normal",
        "../../img/icones/Ellipse3.svg",
        "linear-gradient(114.7deg, rgba(127, 184, 196, 0.38) 0%, rgba(255, 255, 255, 0.38) 97.69%)"
    ]

    const [machines, setMachine] = React.useState(machineAlert)
    const [machines2, setMachine2] = React.useState(machineAttention)
    const [machines3, setMachine3] = React.useState(machineAlert)

    const [titleSetor, setTitleSetor] = React.useState("Minecraft");

    const changeDetails = () => {
        setMachine(machineAlert);
        setMachine2(machineAttention);
        setMachine3(machineAlert);

        setTitleSetor("Minecraft");
    };

    const changeDetails2 = () => {
        setMachine(machineAttention);
        setMachine2(machineAlert);
        setMachine3(machineAttention);

        setTitleSetor("Fortnite");
    };

    const changeDetails3 = () => {
        setMachine(machineNormal);
        setMachine2(machineNormal);
        setMachine3(machineAttention);

        setTitleSetor("League of Legends");
    };

    return (
        <DashboardHolder>
            <MainContainer>
                <div id="Setor" style={styles.Setor}>
                    <div id="Titulo" style={styles.Titulo}>Setor</div>
                    <img onClick={() => {
                        setModalState(true);
                    }} id="Adicionar" src="img/icones/mais.svg" alt="" style={styles.Adicionar} />
                    <div className="corpo" style={styles.corpo}>
                        <div onClick={changeDetails}>
                            <Card imagens="../../img/minecraft.png" descricao="minecraft" nomeJogo="Minecraft" nomeFunc="Carla Fracisca" bgColor="#5BD7F4" />
                        </div>
                        <div onClick={changeDetails2}>
                            <Card imagens="../../img/fortnite.png" descricao="fortnite" nomeJogo="Fortnite" nomeFunc="Carla Francisca" bgColor="#D2B6DE" />
                        </div>
                        <div onClick={changeDetails3}>
                            <Card imagens="../../img/lol.png" descricao="lol" nomeJogo="League of Legends" nomeFunc="Carla Francisca" bgColor="#B28BC1" />
                        </div>
                    </div>
                </div>
                <div id="Maquinas" style={styles.Maquinas}>
                    <div id="Titulo" style={styles.Titulo}>{titleSetor}</div>
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