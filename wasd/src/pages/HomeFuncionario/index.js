import { Container, Grid, Button } from "@material-ui/core"
import ChartFuncionario from "../../components/Chart"
import * as React from 'react';



export default function HomeFunc() {
    const [title, setTitle] = React.useState('CPU');
    const [TemDes, setTemDes] = React.useState('Temperatura');
    const [Minimo, setMinimo] = React.useState();
    const [Maximo, setMaximo] = React.useState();
    function CPU() {
        setTitle("CPU")
        setTemDes("Temperatura Cº")
        setMinimo()
        setMaximo()
    }
    function GPU() {
        setTitle("GPU")
        setTemDes("Temperatura Cº")
        setMinimo()
        setMaximo()
    }
    function Disco() {
        setTitle("Disco")
        setTemDes("Desempenho %")
        setMinimo(0)
        setMaximo(100)
    }
    function RAM() {
        setTitle("RAM")
        setTemDes("Desempenho %")
        setMinimo(0)
        setMaximo(100)
    }
    return (
        <div>
            <Container maxWidth="xl">
                <Grid container lg={4} md={5} xs={12} justifyContent="flex-start" alignItems="flex-start" spacing={2}>
                    <div flexDirection column  >
                        <Button onClick={CPU}>CPU</Button>
                        <Button onClick={GPU}>GPU</Button>
                        <Button onClick={Disco}>Disco</Button>
                        <Button onClick={RAM}>RAM</Button>
                        <ChartFuncionario min={Minimo} max={Maximo} tipo={TemDes} titulo={title}></ChartFuncionario>
                    </div>
                </Grid>
            </Container>
        </div>
    )
}