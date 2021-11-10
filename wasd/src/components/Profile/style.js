import imageMine from '../../img/icon-mine.png';
import imageFort from '../../img/icon-fortnite.png';
import imageLol from '../../img/icon-lol.png';
import Imagem from '../../img/maisa.png'

export const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '22.5vw',
        height: '90vh',
        backgroundColor: '#F8F8F8',
        borderRadius: '8px'
    },
    menuIcon: {
        marginRight: '6px',
        marginTop: '6px',
        alignSelf: 'end',
        color: 'rgba(136,136,136, 0.54)'
    },
    contentHolder: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    profile: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        height: '50%'
    },
    profileBorder: {
        padding: '4px',
        background: 'linear-gradient(90deg, rgba(128, 184, 197, 0.6) 0%, rgba(162, 157, 253, 0.6) 100%)',
        borderRadius: '50%',
        lineHeight: '0'
    },
    profilePhoto: {
        padding: '5px',
        width: '155px',
        height: '155px',
        borderRadius: '300px',
        border: '2px solid #FFF',
        backgroundImage: `url(${Imagem})`,
        backgroundSize: 'cover',
    },
    profileName: {
        marginTop: '30px',
        fontSize: '22px',
        fontWeight: '800'
    },
    profileStatus: {
        marginTop: '5px',
        fontSize: '22px',
        fontWeight: '700',
        color: '#8E73DF'
    },
    setor: {
        width: `70%`,
        paddingTop: '10px',
        paddingBottom: '25px',
        borderTop: '2px solid rgba(136,136,136, 0.54)',
        borderBottom: '2px solid rgba(136,136,136, 0.54)',
        marginBottom: '8%',
        marginTop: '2%'
    },
    arrowDown: {
        color: 'rgba(136,136,136, 0.54)'
    }

}

export const images = {
    imageMine: `${imageMine}`,
    imageFort: `${imageFort}`,
    imageLol: `${imageLol}`
}