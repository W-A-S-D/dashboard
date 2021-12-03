import { Button, Grid } from "@material-ui/core";
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
          <div style={styles.search}>
            <Button variant="contained" color='primary' onClick={() => {
                setModalState(true);
              }}>Cadastrar</Button>
          </div>
        </div>
        <Grid container style={styles.container}>
          {users.map(user => {
            return (
              <CardFunc idFunc={user.usuario_id} key={user.usuario_id} nome={user.nome} email={user.email} imagem={`https://wasdapi.herokuapp.com/${user.avatar}`} />
            );
          })}
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
