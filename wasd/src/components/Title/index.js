import {styles} from './styles';


const Title = (props) => {
    return (
        <>
            <div style={styles.tituloHolder}>
                <div style={styles.titulo}>
                    {props.value}
                </div>
            </div>
        </>
    )
}

export default Title;