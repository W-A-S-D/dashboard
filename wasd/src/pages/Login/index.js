import { Checkbox, Container, FormControlLabel, Grid, Typography } from "@material-ui/core"
import { Box } from "@material-ui/system"
import React from "react"
import { Link } from "react-router-dom"
import ButtonForm from "../../components/ButtonForm"
import InputForm from "../../components/InputForm"
import InputPass from "../../components/InputPass"
import { styles, item } from "./styles"

export default function Login() {
    const [login, setLogin] = React.useState();
    const [senha, setSenha] = React.useState();

    const handleChangeEmail = (event) => {
        setLogin(event.target.value);
    };

    const handleChangeSenha = (event) => {
        setSenha(event.target.value);
    };

    return (
        <div style={styles.container}>
            <img style={{ height: '10vh', margin: "2rem 2rem 2rem 2rem" }} src={item.img} alt={item.title} />
            <Container maxWidth="xl">
                <form onSubmit={(event) => {
                    // if (login === "maria@gmail.com" && senha === "1234") {
                    //     event.preventDefault();
                    //     window.location.href = "/admin"
                    // } else {
                    //     alert("Senha/Login incorreto")
                    // }
                }}>
                    <Grid container item lg={4} md={5} xs={12} justifyContent="flex-start" alignItems="flex-start" spacing={2}>
                        <Grid item xs={12} md={12} mb={15}>
                            <Typography variant="h3" component="div" color="primary" style={{ fontWeight: 'bold' }}>Login</Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <InputForm name="email" onChange={handleChangeEmail} type="email" title="Email" />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <InputPass name="senha" onChange={handleChangeSenha} title="Senha" />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6} >
                            <FormControlLabel control={<Checkbox />} label="Lembre-se de mim" />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6} mt={1}>
                            <Typography variant="subtitle1" component="span">
                                <Link to="/cadastro" style={{ fontWeight: 'bold', textDecoration: 'none', color: '#A29BFE' }}>
                                    Esqueceu a senha?
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Box mt={6}>
                        <ButtonForm content="Entrar" />
                    </Box>
                </form>
            </Container>
        </div>
    )
}

