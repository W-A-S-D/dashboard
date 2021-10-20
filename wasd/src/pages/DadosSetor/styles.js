import Imagem from '../../img/icon-pc.png'

export const styles = {
    container: {
        position: 'relative',
        marginTop: '20px',
        width: '90%',
        height: '50%',
        margin: '20px auto',
        background: '#FFFFFF',
        padding: '20px',
        paddingTop: '5px',
        /* Destaque - Home - Instável/Estável */
        boxShadow: '0px 0px 24px rgba(0, 0, 0, 0.22)',
        borderRadius: '24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    stylesPc: {
        position: 'relative',
        marginTop: '20px',
        width: '93%',
        height: '10%',
        margin: '20px auto',
        background: ' rgba(255, 255, 255, 1)',
        padding: '20px',
        paddingTop: '5px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }

}
export const images = {
    ImagemPc: `${Imagem}`,
}