import React from "react";
import { styles } from "./style"

function Card(props) {
    let [over, setOver] = React.useState(false);

    let hoverstyle = {
        backgroundColor: ''
    }

    if (over) {
        hoverstyle.borderRadius = '25px 25px 25px 25px';
        hoverstyle.boxShadow = `0 8px 16px 0 ${props.bgColor}`;
    }
    else {
        hoverstyle.backgroundColor = '';
    }

    return (
        <div onClick={props.onClick}>
            <div
                style={{ ...styles.Card, ...hoverstyle }}
                onMouseOver={() => setOver(true)}
                onMouseOut={() => setOver(false)}
            >
                <div>
                    <img style={styles.cardImage} src={props.imagens} alt={props.descricao} />
                </div>
                <div style={{ ...styles.container1, backgroundColor: props.bgColor }}>
                    <h4 style={{margin: '0', paddingTop: '5%'}}><b>{props.nomeJogo}</b></h4>
                    <p style={{margin: '0', paddingTop: '5%'}}>
                        {props.nomeFunc}
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Card