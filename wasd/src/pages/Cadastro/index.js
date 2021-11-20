import { Container, FormHelperText, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import ButtonWasd from "../../components/ButtonWasd";
import InputForm from "../../components/InputForm";
import InputPass from "../../components/InputPass";
import { styles, item } from "../Login/styles";
import { Box } from "@material-ui/system";
import api from "../../service/api";

export default function Cadastro() {
  const [primeiroNome, setPrimeiroNome] = useState("");
  const [ultimoNome, setUltimoNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");

  async function handleCreateUser(event) {
    event.preventDefault();

    const empresa = 11
    // localStorage.getItem("@wasd:idEmpresa");
    console.log(empresa);

    if (senha != confirmSenha) {
      return;
    }

    if (
      !primeiroNome.trim() ||
      !ultimoNome.trim() ||
      !email.trim() ||
      !senha.trim()
    ) {
      return;
    }

    const response = await api.post("create", {
      fk_empresa: empresa,
      nome: primeiroNome + " " + ultimoNome,
      email: email,
      pass: senha,
    });

    console.log(response)

    // window.location.href = "/";

    setPrimeiroNome("");
    setUltimoNome("");
    setEmail("");
    setSenha("");
    setConfirmSenha("");
  }

  return (
    <div style={styles.container}>
      <img
        style={{ height: "10vh", margin: "2rem 2rem 2rem 2rem" }}
        src={item.img}
        alt={item.title}
      />
      <Container maxWidth="xl">
        <form onSubmit={handleCreateUser}>
          <Grid
            container
            item
            lg={5}
            md={6}
            xs={12}
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={2}
          >
            <Grid item xs={12} md={12} mb={5}>
              <Typography
                variant="h3"
                component="div"
                color="primary"
                style={{ fontWeight: "bold" }}
              >
                Cadastro
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <InputForm
                type="text"
                title="Primeiro Nome"
                onChange={(event) => setPrimeiroNome(event.target.value)}
                value={primeiroNome}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputForm
                type="text"
                title="Último Nome"
                onChange={(event) => setUltimoNome(event.target.value)}
                value={ultimoNome}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <InputForm
                type="email"
                title="Email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <InputPass
                title="Senha"
                onChange={(event) => setSenha(event.target.value)}
                value={senha}
              />
              <FormHelperText id="helper-text">
                Senha deve ter no mínimo 8 caracteres
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={12}>
              <InputPass
                title="Confirme sua senha"
                onChange={(event) => setConfirmSenha(event.target.value)}
                value={confirmSenha}
              />
            </Grid>
          </Grid>
          <Box mt={8}>
            <ButtonWasd content="Cadastrar" />
          </Box>
        </form>
      </Container>
    </div>
  );
}
