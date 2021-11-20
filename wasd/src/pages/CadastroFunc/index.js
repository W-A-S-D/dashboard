import { Grid } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import React, { useEffect, useState } from "react";

import CardFunc from "../../components/CardFunc";
import DashboardHolder from "../../components/DashboardHolder";
import MainContainer from "../../components/MainContainer";
import ModalComponent from "../../components/Modal";
import Profile from "../../components/Profile";
import api from "../../service/api";
import { styles } from "./styles";

function CadastroFunc() {
  const [modalState, setModalState] = React.useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/users/company").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <DashboardHolder>
      <MainContainer>
        <div style={styles.header}>
          <div style={styles.title}>Funcionários</div>
          {/* <div style={styles.search}>
            <SearchFunc />
          </div> */}
        </div>
        <Grid container style={styles.container}>
          {users.map(user => {
            console.log(user)
            return (
              <CardFunc key={user.id} nome={user.nome} email={user.email} imagem={user.avatar} jogo="League of Legends" />
            );
          })}

          <Grid item lg={3} md={3} style={styles.addUser}>
            <AddCircleOutlineIcon
              sx={{ fontSize: 50, color: "#888888", cursor: "pointer" }}
              onClick={() => {
                setModalState(true);
              }}
            />
          </Grid>
        </Grid>
      </MainContainer>
      <Profile />
      <ModalComponent
        open={modalState}
        onClick={() => {
          setModalState(false);
        }}
      />
    </DashboardHolder>
  );
}

export default CadastroFunc;
