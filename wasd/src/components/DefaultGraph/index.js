import { Button } from "@material-ui/core"
import ChartFuncionario from "../Chart"
import * as React from 'react';
import api from "../../service/api";

export default function DefaultGraph() {
    const [TemDes, setTemDes] = React.useState('Desempenho %');
    const [Minimo, setMinimo] = React.useState(0);
    const [Maximo, setMaximo] = React.useState(100);
    const [maximoRam, setMaximoRam] = React.useState(32);
    const [Cor, setCor] = React.useState('#A29BFE');
    const [Cor1, setCor1] = React.useState('#FFF');
    const [Cor2, setCor2] = React.useState('#FFF');
    const [Cor3, setCor3] = React.useState('#FFF');
    const [CorFont, setCorFont] = React.useState('#FFF');
    const [CorFont1, setCorFont1] = React.useState('#000000');
    const [CorFont2, setCorFont2] = React.useState('#000000');
    const [CorFont3, setCorFont3] = React.useState('#000000');

    React.useEffect(() => {
        api.get("/log/3").then((response) => {
          response.data.forEach((log) => {
            setMaximoRam(parseInt(log.maquina.ram))
          });
        });
      }, []);
    
    function CPU() {
        setTemDes("Desempenho %")
        setMaximo(100)
        setCor('#A29BFE')
        setCor1('#FFF')
        setCor2('#FFF')
        setCor3('#FFF')
        setCorFont('#FFF')
        setCorFont1('#000000')
        setCorFont2('#000000')
        setCorFont3('#000000')
    }

    function GPU() {
        setTemDes("Temperatura Cº")
        setMaximo(100)
        setCor('#FFF')
        setCor1('#A29BFE')
        setCor2('#FFF')
        setCor3('#FFF')
        setCorFont('#000000')
        setCorFont1('#FFF')
        setCorFont2('#000000')
        setCorFont3('#000000')
    }

    function Disco() {
        setTemDes("Desempenho %")
        setMaximo(100)
        setCor('#FFF')
        setCor1('#FFF')
        setCor2('#A29BFE')
        setCor3('#FFF')
        setCorFont('#000000')
        setCorFont1('#000000')
        setCorFont2('#FFF')
        setCorFont3('#000000')
    }

    function RAM() {
        setTemDes("Memória Usada GB")
        setMaximo(maximoRam)
        setCor('#FFF')
        setCor1('#FFF')
        setCor2('#FFF')
        setCor3('#A29BFE')
        setCorFont('#000000')
        setCorFont1('#000000')
        setCorFont2('#000000')
        setCorFont3('#FFF')
    }

    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'row', margin: '0 auto'}}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginRight: '1%', width: '20%'}}>
                    <Button style={{ color: CorFont, backgroundColor: Cor, fontSize: '1rem' }} onClick={CPU}>Desempenho CPU</Button>
                    <Button style={{ color: CorFont1, backgroundColor: Cor1, fontSize: '1rem' }} onClick={GPU}>Temperatura GPU</Button>
                    <Button style={{ color: CorFont2, backgroundColor: Cor2, fontSize: '1rem' }} onClick={Disco}>Disco</Button>
                    <Button style={{ color: CorFont3, backgroundColor: Cor3, fontSize: '1rem' }} onClick={RAM}>Uso RAM</Button>
                </div>
                <ChartFuncionario min={Minimo} max={Maximo} tipo={TemDes}></ChartFuncionario>
            </div>
        </div>
    )
}