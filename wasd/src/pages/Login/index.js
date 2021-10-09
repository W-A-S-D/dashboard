import { Checkbox, Container, FormControlLabel, Grid, Typography } from "@material-ui/core"
import { Box } from "@material-ui/system"
import { Link } from "react-router-dom"
import ButtonForm from "../../components/ButtonForm"
import InputForm from "../../components/InputForm"
import InputPass from "../../components/InputPass"
import { styles, item } from "./styles"

export default function Login() {
    return (
        <div style={styles.container}>
            <img style={{ height: '10vh', margin: "2rem 2rem 2rem 2rem" }} src={item.img} alt={item.title} />
            <Container maxWidth="xl">
                <Grid container justifyContent="flex-start" alignItems="flex-start">
                    <Grid item xs={6} md={12}>
                        <Typography variant="h3" component="div" color="primary" style={{ fontWeight: 'bold' }}>Login</Typography>
                    </Grid>
                    <Grid item xs={6} md={12} mt={12}>
                        <InputForm title="Email" />
                    </Grid>
                    <Grid item xs={6} md={12} mt={4}>
                        <InputPass title="Senha" />
                    </Grid>
                    <Grid item mt={2} md={2.25} ml={1}>
                        <FormControlLabel control={<Checkbox />} label="Lembre-se de mim" />
                    </Grid>
                    <Grid item mt={3} md={2}>
                        <Typography variant="subtitle1" component="span">
                            <Link to="/Cadastro" style={{ fontWeight: 'bold', textDecoration: 'none', color: '#A29BFE' }}>
                                Esqueceu a senha?
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
                <Box mt={6}>
                    <ButtonForm content="Entrar" />
                </Box>
            </Container>
        </div>
    )
}