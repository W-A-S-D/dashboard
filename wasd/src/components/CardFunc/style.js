import Imagem from '../../img/maisa.png'

export const styles = {
    container: {
        position: 'relative',
        margin: '3vh auto',
        width: '20%',
        height: '30%',
        background: '#FFFFFF',
        padding: '1% 20px 4% 20px',
        /* Destaque - Home - Instável/Estável */
        boxShadow: '0px 0px 24px rgba(0, 0, 0, 0.22)',
        borderRadius: '24px',
        display: 'flex',
        flexDirection: 'column',
    },
    profile: {
        marginTop: '5%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    profileBorder: {
        padding: '4px',
        background: 'linear-gradient(90deg, rgba(128, 184, 197, 0.6) 0%, rgba(162, 157, 253, 0.6) 100%)',
        borderRadius: '50%',
        lineHeight: '0'
    },
    profilePhoto: {
        padding: '5px',
        width: '100px',
        height: '100px',
        borderRadius: '300px',
        border: '2px solid #FFF',
        backgroundImage: `url(${Imagem})`,
        backgroundSize: 'cover',
    },
    profileText: {
        marginTop: '5%',
        fontSize: '22px',
        fontWeight: '800'
    },
}