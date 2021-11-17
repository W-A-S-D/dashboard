import { Checkbox, Container, FormControlLabel, Grid, Typography } from "@material-ui/core"
import { Box } from "@material-ui/system"
import * as React from "react"
import { Link } from "react-router-dom"
import ButtonWasd from "../../components/ButtonWasd"
import InputForm from "../../components/InputForm"
import InputPass from "../../components/InputPass"
import { styles, item } from "./styles"
import api from '../../service/api';

export default function Login() {
    const [login, setLogin] = React.useState('');
    const [senha, setSenha] = React.useState('');

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
                    event.preventDefault();

                    api.post('authenticate', {
                        email: login,
                        password: senha
                    }).then(response => {
                        console.log(response);
                        localStorage.setItem('@wasd:token', response.data.token);
                        api.defaults.headers.common.authorization = `Bearer ${response.data.token}`
                        window.location.href='/cadastro-func'
                    }).catch(error => {
                        if (error.response.status === 401) {
                            console.log('usuário ou senha coisados');
                        }
                           return error;
                    })
                }}>
                    <Grid container item lg={4} md={5} xs={12} justifyContent="flex-start" alignItems="flex-start" spacing={2}>
                        <Grid item xs={12} md={12} mb={15}>
                            <Typography variant="h3" component="div" color="primary" style={{ fontWeight: 'bold' }}>Login</Typography>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <InputForm name="email" value={login} onChange={handleChangeEmail} type="email" title="Email" />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <InputPass name="senha" password={senha} onChange={handleChangeSenha} title="Senha" />
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
                        <ButtonWasd content="Entrar" />
                    </Box>
                </form>
            </Container>
        </div>
    )
}

