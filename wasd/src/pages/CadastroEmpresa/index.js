import { Container, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import ButtonWasd from "../../components/ButtonWasd";
import InputCnpj from "../../components/InputCnpj";
import InputTelefone from "../../components/InputPhone";
import SelectEstado from "../../components/SelectState";
import { styles, item } from "../Login/styles";
import { Box } from "@material-ui/system";
import InputForm from "../../components/InputForm";
import api from "../../service/api";

export default function CadastroEmpresa() {
  const [cnpj, setCnpj] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [cep, setCep] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleChangeTelefone = (event) => {
    if (event.target.value.length === 14) {
      setTelefone(event.target.value);
    }
  };

  const handleChangeCnpj = (event) => {
    if (event.target.value.length === 18) {
      setCnpj(event.target.value);
    }
  };

  async function handleCreateCompany(event) {
    event.preventDefault();

    let cnpj_replaced = cnpj
      .replaceAll(".", "")
      .replace("/", "")
      .replace("-", "");

      let telefone_replaced = telefone
      .replace("(", "")
      .replace(")", "")
      .replace("-", "");
      
    const numeroCerto = parseInt(numero)

    if (
      !nome.trim() ||
      !email.trim() ||
      !cnpj.trim() ||
      !endereco.trim() ||
      !bairro.trim() ||
      !cidade.trim() ||
      !estado.trim() ||
      !numero.trim() ||
      !cep.trim() ||
      !telefone.trim()
    ) {
      console.log("ue");
      return;
    }

    const response = await api.post("create/company", {
      nome: nome,
      email: email,
      cnpj: cnpj_replaced,
      logradouro: endereco,
      numero: numeroCerto,
      bairro: bairro,
      cidade: cidade,
      uf: estado,
      cep: cep,
      telefone: telefone_replaced,
    });

    console.log(response.data)

    localStorage.setItem("@wasd:idEmpresa", response.data.empresa_id);

    window.location.href = "/cadastro";


    setNome("");
    setEmail("");
    setCnpj("");
    setEndereco("");
    setBairro("");
    setNumero("");
    setCidade("");
    setEstado("");
    setTelefone("");
    setCep("");
  }

  return (
    <div style={styles.container}>
      <img
        style={{ height: "10vh", margin: "2rem 2rem 0 2rem" }}
        src={item.img}
        alt={item.title}
      />
      <Container maxWidth="xl">
        <form onSubmit={handleCreateCompany}>
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
              <InputCnpj
                title="CNPJ"
                onChange={handleChangeCnpj}
                value={cnpj}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <InputForm
                type="text"
                title="Nome Empresarial"
                onChange={(event) => setNome(event.target.value)}
                value={nome}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <InputForm
                type="email"
                title="Email empresarial"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <InputTelefone
                title="Telefone"
                onChange={handleChangeTelefone}
                value={telefone}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <InputForm
                type="text"
                title="CEP"
                onChange={(event) => setCep(event.target.value)}
                value={cep}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <SelectEstado
                onChange={(event) => setEstado(event.target.value)}
                valor={estado}
              />
            </Grid>
            <Grid item xs={12} md={9}>
              <InputForm
                type="text"
                title="Cidade"
                onChange={(event) => setCidade(event.target.value)}
                value={cidade}
              />
            </Grid>
            <Grid item xs={12} md={9}>
              <InputForm
                type="text"
                title="Endereco"
                onChange={(event) => setEndereco(event.target.value)}
                value={endereco}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <InputForm
                type="number"
                title="Numero"
                onChange={(event) => setNumero(event.target.value)}
                value={numero}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <InputForm
                type="text"
                title="Bairro"
                onChange={(event) => setBairro(event.target.value)}
                value={bairro}
              />
            </Grid>
          </Grid>
          <Box mt={6}>
            <ButtonWasd content="Continuar" />
          </Box>
        </form>
      </Container>
    </div>
  );
}
