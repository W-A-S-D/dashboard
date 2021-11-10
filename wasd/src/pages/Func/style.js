import Imagem from '../../img/icon-pc.png'

export const styles = {
    maquinasContainer: {
        display: 'flex',
        position: 'relative',
        margin: '20px auto',
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
        margin: '20px 10px 0 10px'
    },
    containerGrafico: {
        margin: '0 auto',
        marginBottom: '30px'
    }
}

export const images = {
    ImagemPc: `${Imagem}`,
}