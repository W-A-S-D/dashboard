import { styles } from "./style"

function Maquina(props) {
    return (
        <div id="Maq" class="maq1" style={{...styles.Maq,...styles.MaqMaq1, background: props.bgColorGrad}}>
            <img src={props.imagens} alt={props.descricao} />
            <h5 style={styles.MaqH5}><b>{props.computador}</b></h5>
            <div style={styles.alerta}>
                <img id="Icone" src={props.imagens2} alt={props.descricao2} style={styles.Icone}/>
                <p style={styles.MaqP}>{props.alertas}</p>
            </div>
        </div>
    )
}

export default Maquina