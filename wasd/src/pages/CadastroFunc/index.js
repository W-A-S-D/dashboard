import { Grid } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import React from "react";

import CardFunc from "../../components/CardFunc";
import DashboardHolder from "../../components/DashboardHolder";
import MainContainer from "../../components/MainContainer";
import Profile from "../../components/Profile";
import SelectSector from "../../components/SelectSector";
import { styles } from "./styles";

function CadastroFunc() {
    const [modalState, setModalState] = React.useState(false)

    return (

        <DashboardHolder>
            <MainContainer>
                <div style={styles.header}>
                    <div style={styles.title}>Funcionários</div>
                    <div style={styles.search}>
                        <SelectSector />
                    </div>
                </div>
                <Grid container lg={12} md={8} xs={3} style={styles.container}>
                    {[1, 1, 1, 1, 1].map(e => {
                        return <CardFunc nome="Juliana da Silva" jogo="League of Legends" />
                    })}

                    <Grid item lg={3} md={3} style={styles.addUser}>
                        <AddCircleOutlineIcon
                            onClick={() => {
                                setModalState(true);
                            }}
                            sx={{ fontSize: 50 }}
                        />
                    </Grid>
                </Grid>
            </MainContainer>
            <Profile />
        </DashboardHolder>
    )
}

export default CadastroFunc