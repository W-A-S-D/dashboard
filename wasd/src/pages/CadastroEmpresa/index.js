import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import ButtonForm from "../../components/ButtonForm";
import InputCnpj from "../../components/InputCnpj";
import InputTelefone from "../../components/InputTelefone";
import SelectEstado from "../../components/SelectEstado";
import { styles, item } from "../Login/styles";
import { Box } from "@material-ui/system";
import InputForm from "../../components/InputForm";

export default function CadastroEmpresa() {
  return (
    <div style={styles.container}>
      <img
        style={{ height: "10vh", margin: "2rem 2rem 0 2rem" }}
        src={item.img}
        alt={item.title}
      />
      <Container maxWidth="xl">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            window.location.href = "/cadastro";
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
            <Grid item xs={12} md={12} mb={4}>
              <Typography
                variant="h3"
                component="div"
                color="primary"
                style={{ fontWeight: "bold" }}
              >
                Cadastre sua empresa
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <InputCnpj title="CNPJ" />
            </Grid>
            <Grid item xs={12} md={12}>
              <InputForm type="text" title="Nome Empresarial" />
            </Grid>
            <Grid item xs={12} md={12}>
              <InputForm type="email" title="Email empresarial" />
            </Grid>
            <Grid item xs={12} md={12}>
              <InputTelefone title="Telefone" />
            </Grid>
            <Grid item xs={12} md={12}>
              <InputForm type="text" title="CEP" />
            </Grid>
            <Grid item xs={12} md={3}>
              <SelectEstado />
            </Grid>
            <Grid item xs={12} md={9}>
              <InputForm type="text" title="Cidade" />
            </Grid>
            <Grid item xs={12} md={9}>
              <InputForm type="text" title="Endereco" />
            </Grid>
            <Grid item xs={12} md={3}>
              <InputForm type="text" title="Numero" />
            </Grid>
            <Grid item xs={12} md={12}>
              <InputForm type="text" title="Bairro" />
            </Grid>
          </Grid>
          <Box mt={6}>
            <ButtonForm content="Continuar" />
          </Box>
        </form>
      </Container>
    </div>
  );
}
