import Imagem from '../../img/icon-pc.png'

export const styles = {
    maquinasContainer: {
        display: 'flex',
        position: 'relative',
        margin: '2% auto',
        width: '90%',
        overflowX: 'hidden',
        background: '#FFFFFF',
        boxShadow: '0px 0px 24px rgba(0, 0, 0, 0.22)',
        borderRadius: '24px',
    },
    corpoMaquina: {
        display: 'flex',
        margin: '25px 15px'
    },
    title: {
        fontSize: '30px',
        fontWeight: 'bold',
        marginTop: '0',
        paddingTop: '1%',
        marginLeft: '5%'
    },
    adicionar: {
        position: 'absolute',
        top: 10,
        right: 10,
        cursor: 'pointer',
        color: '#888888'
    },
    detalhesContainer: {
        display: 'flex',
        margin: '20px auto',
        width: '90%',
        overflowX: 'hidden',
        overflowY: 'hidden',
        background: '#FFFFFF',
        boxShadow: '0px 0px 24px rgba(0, 0, 0, 0.22)',
        borderRadius: '24px',
        flexDirection: 'column',
    },
    identificacao: {
        margin: '20px 10px 0 10px',
        paddingLeft: '10px'
    },
    containerGrafico: {
        margin: '0 auto',
        marginBottom: '30px'
    },
    selected: {
        color: "#FFF",
        background: "#A29BFE",
        fontSize: "1rem"
    },
    default: {
        color: "#000000",
        background: "#FFF",
        fontSize: "1rem"
    },
    DetailGraph: {
        height: '64px',
        width: '90%',
        borderRadius: '5px',
        rgba: '(255, 255, 255, 1)',
        paddingLeft: '24px',
        paddingTop: '8px'
    },
    gameSetorName: {
        marginLeft: '24px',
        paddingBottom: '5%',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '16px',
    },
    gameSetorIcon: {
        width: '6px',
        height: '6px',
        borderRadius: '50px',
        marginLeft: '24px',
        backgroundColor: '#D12F2F'
    },
    alinhamento: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center'
    },
    gameSetorTittle: {
        marginLeft: '10px',
        fontSize: '12px',
        lineHeight: '5%',
    },
    linediv: {
        borderTop: '2px solid rgba(136, 136, 136, 0.54)',
        width: '90%',
        paddingTop: '5%',
        marginLeft: '24px',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '16px',
    },
    alertaSetor: {
        flexDirection: 'row',
        display: 'flex',
    }
}

export const images = {
    ImagemPc: `${Imagem}`,
}