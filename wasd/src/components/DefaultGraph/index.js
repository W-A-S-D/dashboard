import { Container, Grid, Button } from "@material-ui/core"
import ChartFuncionario from "../Chart"
import * as React from 'react';

export default function DefaultGraph() {
    const [title, setTitle] = React.useState('CPU');
    const [TemDes, setTemDes] = React.useState('Temperatura');
    const [Minimo, setMinimo] = React.useState();
    const [Maximo, setMaximo] = React.useState();
    const [Cor, setCor] = React.useState('#A29BFE');
    const [Cor1, setCor1] = React.useState('#FFF');
    const [Cor2, setCor2] = React.useState('#FFF');
    const [Cor3, setCor3] = React.useState('#FFF');

    function CPU() {
        setTitle("CPU")
        setTemDes("Desempenho %")
        setMinimo(0)
        setMaximo(100)
        setCor('#A29BFE')
        setCor1('#FFF')
        setCor2('#FFF')
        setCor3('#FFF')
    }

    function GPU() {
        setTitle("GPU")
        setTemDes("Temperatura Cº")
        setMinimo()
        setMaximo()
        setCor('#FFF')
        setCor1('#A29BFE')
        setCor2('#FFF')
        setCor3('#FFF')
    }

    function Disco() {
        setTitle("Disco")
        setTemDes("Desempenho %")
        setMinimo(0)
        setMaximo(100)
        setCor('#FFF')
        setCor1('#FFF')
        setCor2('#A29BFE')
        setCor3('#FFF')
    }

    function RAM() {
        setTitle("RAM")
        setTemDes("Desempenho %")
        setMinimo(0)
        setMaximo(100)
        setCor('#FFF')
        setCor1('#FFF')
        setCor2('#FFF')
        setCor3('#A29BFE')
    }

    return (
        <div>
            <Container maxWidth="xl">
                <Grid container lg={4} md={5} xs={12} justifyContent="flex-start" alignItems="flex-start" spacing={2}>
                    <div style={{ display: 'flex', flexDirection: 'rows' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Button style={{ color: '#000000', backgroundColor: Cor }} onClick={CPU}>CPU</Button>
                            <Button style={{ color: '#000000', backgroundColor: Cor1 }} onClick={GPU}>GPU</Button>
                            <Button style={{ color: '#000000', backgroundColor: Cor2 }} onClick={Disco}>Disco</Button>
                            <Button style={{ color: '#000000', backgroundColor: Cor3 }} onClick={RAM}>RAM</Button>
                        </div>
                        <ChartFuncionario min={Minimo} max={Maximo} tipo={TemDes} titulo={title}></ChartFuncionario>
                    </div>
                </Grid>
            </Container>
        </div>
    )
}