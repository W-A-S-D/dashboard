import { Grid } from '@material-ui/core'
import { styles } from './style'

function CardFunc(props) {
    return (
        <Grid item lg={3} md={2} sm={12} style={styles.container}>
            <div style={styles.profile}>
                <div style={styles.profileBorder}>
                    <div style={styles.profilePhoto}></div>
                </div>
                <div style={styles.profileText}>{props.nome}</div>
                <div style={styles.profileTextGame}>{props.jogo}</div>
            </div>
        </Grid>
    )
}

export default CardFunc