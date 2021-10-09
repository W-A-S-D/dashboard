import { Container, Grid, Typography } from "@material-ui/core"
import { Box } from "@material-ui/system"
import React from "react"
import ButtonForm from "../../components/ButtonForm"
import InputForm from "../../components/InputForm"
import InputCnpj from "../../components/InputCnpj"
import InputPass from "../../components/InputPass"
import { styles, item } from "../Login/styles"

export default function Cadastro() {
    return (
        <div style={styles.container}>
            <img style={{ height: '10vh', margin: "2rem 2rem 2rem 2rem" }} src={item.img} alt={item.title} />
            <Container maxWidth="xl">
                <Grid container justifyContent="flex-start" alignItems="flex-start">
                    <Grid item xs={6} md={12}>
                        <Typography variant="h3" component="div" color="primary" style={{ fontWeight: 'bold' }}>Cadastro</Typography>
                    </Grid>
                    <Grid item xs={6} md={1.8} mt={12} mr={2}>
                        <InputForm title="Primeiro Nome" />
                    </Grid>
                    <Grid item xs={6} md={1.7} mt={12}>
                        <InputForm title="Último Nome" />
                    </Grid>
                    <Grid item xs={6} md={12} mt={2}>
                        <InputForm title="Email" />
                    </Grid>
                    <Grid item xs={6} md={12} mt={2}>
                        <InputPass title="Senha" />
                    </Grid>
                    <Grid item xs={6} md={12} mt={2}>
                        <InputPass title="Confirme sua senha" />
                    </Grid>
                    <Grid item xs={6} md={12} mt={2}>
                        <InputCnpj title="CNPJ"/>
                    </Grid>
                </Grid>
                <Box mt={6}>
                    <ButtonForm content="Cadastrar" />
                </Box>
            </Container>
        </div >
    )
}