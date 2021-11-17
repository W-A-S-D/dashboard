import { Grid } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import React, { useEffect, useState } from "react";

import CardFunc from "../../components/CardFunc";
import DashboardHolder from "../../components/DashboardHolder";
import Delete from "../../components/Delete";
import MainContainer from "../../components/MainContainer";
import Profile from "../../components/Profile";
import SelectSector from "../../components/SelectSector";
import api from "../../service/api";
import { styles } from "./styles";

function CadastroFunc() {
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
            <SelectSector />
          </div>
        </div>
        <Grid container lg={12} md={8} xs={3} style={styles.container}>
          {users.map(user => {
            return (
              <CardFunc nome={user.nome} imagem={user.avatar} jogo="League of Legends" />
            );
          })}

          <Grid item lg={3} md={3} style={styles.addUser}>
            <AddCircleOutlineIcon
              sx={{ fontSize: 50, color: "#888888", cursor: "pointer" }}
            />
          </Grid>
        </Grid>
      </MainContainer>
      <Profile />
    </DashboardHolder>
  );
}

export default CadastroFunc;
