import { Container, Grid, Button } from "@material-ui/core"
import ChartFuncionario from "../../components/Chart"
import * as React from 'react';

export default function HomeFunc() {
    const [title, setTitle] = React.useState('CPU');
    const [TemDes, setTemDes] = React.useState('Temperatura');
    const [Minimo, setMinimo] = React.useState();
    const [Maximo, setMaximo] = React.useState();
    
    let styleBtn = ''

    function CPU() {
        setTitle("CPU")
        setTemDes("Desempenho %")
        setMinimo(0)
        setMaximo(100)
        styleBtn = 'secondary'
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
                    <div style={{ display: 'flex', flexDirection: 'rows' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent:'center'}}>
                            <Button color={styleBtn} id="btn_1" onClick={CPU}>CPU</Button>
                            <Button style= {{color: '#000000', backgroundColor: styleBtn}} id="btn_2" onClick={GPU}>GPU</Button>
                            <Button style= {{color: '#000000'}} id="btn_3" onClick={Disco}>Disco</Button>
                            <Button style= {{color: '#000000'}} id="btn_4" onClick={RAM}>RAM</Button>
                        </div>
                        <ChartFuncionario min={Minimo} max={Maximo} tipo={TemDes} titulo={title}></ChartFuncionario>
                    </div>
                </Grid>
            </Container>
        </div>
    )
}