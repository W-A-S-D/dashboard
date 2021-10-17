import { styles } from "./style"


function Card(props) {
    return (
        <>
            <div class="Card1" id="Card" style={{...styles.Card,...styles.Card1}}>
                <img src={props.imagens} alt={props.descricao} />
                <div class="container1" style={{...styles.container1, backgroundColor: props.bgColor}}>
                    <h4 style={styles.CardH4}><b>{props.nomeJogo}</b></h4>
                    <p style={styles.CardP}>{props.nomeFunc}</p>
                </div>
            </div>
        </>
    )
}

export default Card