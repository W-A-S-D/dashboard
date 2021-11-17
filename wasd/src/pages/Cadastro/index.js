import { Container, FormHelperText, Grid, Typography } from "@material-ui/core";
import React from "react";
import ButtonWasd from "../../components/ButtonWasd";
import InputForm from "../../components/InputForm";
import InputPass from "../../components/InputPass";
import { styles, item } from "../Login/styles";
import { Box } from "@material-ui/system";

export default function Cadastro() {
  return (
    <div style={styles.container}>
      <img
        style={{ height: "10vh", margin: "2rem 2rem 2rem 2rem" }}
        src={item.img}
        alt={item.title}
      />
      <Container maxWidth='xl'>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            window.location.href = "/";
          }}
        >
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
              <InputForm type="text" title="Primeiro Nome" />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputForm type="text" title="Último Nome" />
            </Grid>
            <Grid item xs={12} md={12}>
              <InputForm type="email" title="Email" />
            </Grid>
            <Grid item xs={12} md={12}>
              <InputPass title="Senha" />
              <FormHelperText id="helper-text">
                Senha deve ter no mínimo 8 caracteres
              </FormHelperText>
            </Grid>
            <Grid item xs={12} md={12}>
              <InputPass title="Confirme sua senha" />
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
