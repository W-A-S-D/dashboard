import React from "react";
import { styles } from "./style"

function Maquina(props) {
    let [over, setOver] = React.useState(false);

    let hoverstyle = {
        border: ``
    }

    if (over) {
        hoverstyle.border = `0.4px solid ${props.hoverColor}`;
    } else {
        hoverstyle.border = ``;
    }

    return (
        <div
            id="Maq"
            className="maq1"
            style={{ ...styles.Maq, ...styles.MaqMaq1, ...hoverstyle, background: props.bgColorGrad }}
            onMouseOver={() => setOver(true)}
            onMouseOut={() => setOver(false)}
            onClick={() => window.location.href = "/detail"}
        >
            <img src={props.imagens} alt={props.descricao} />
            <h5 style={styles.MaqH5}><b>{props.computador}</b></h5>
            <div style={styles.alerta}>
                <img id="Icone" src={props.imagens2} alt={props.descricao2} style={styles.Icone} />
                <p style={styles.MaqP}>{props.alertas}</p>
            </div>
        </div>
    )
}

export default Maquina