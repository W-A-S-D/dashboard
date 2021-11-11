import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import React from "react";

import CardFunc from "../../components/CardFunc";
import DashboardHolder from "../../components/DashboardHolder";
import MainContainer from "../../components/MainContainer";
import Profile from "../../components/Profile";
import { styles } from "./styles";

function CadastroFunc() {
    const [modalState, setModalState] = React.useState(false)

    return (
        <>
            <DashboardHolder>
                <MainContainer>
                    <div style={styles.title}>Funcionários</div>

                    <div style={styles.container}>
                        <CardFunc nome="Juliana da Silva" jogo="lol" />
                        <CardFunc nome="Juliana da Silva" jogo="lol" />
                        <CardFunc nome="Juliana da Silva" jogo="lol" />
                        <CardFunc nome="Juliana da Silva" jogo="lol" />

                        <div style={styles.addUser}>
                            <AddCircleOutlineIcon
                                onClick={() => {
                                    setModalState(true);
                                }}
                                sx={{ fontSize: 50 }}
                            />
                        </div>
                    </div>

                </MainContainer>
                <Profile />
            </DashboardHolder>
        </>
    )
}

export default CadastroFunc