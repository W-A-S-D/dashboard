import { styles } from './style'

function CardFunc(props) {
    return (
        <>
            <div style={styles.container}>
                <div style={styles.profile}>
                    <div style={styles.profileBorder}>
                        <div style={styles.profilePhoto}></div>
                    </div>
                    <div style={styles.profileText}>{props.nome}</div>
                    <div style={styles.profileText}>{props.jogo}</div>
                </div>
            </div>
        </>
    )
}

export default CardFunc