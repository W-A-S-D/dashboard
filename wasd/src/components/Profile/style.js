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
        height: '290px'
    },
    profilePhoto: {
        padding: '5px',
        width: '155px',
        height: '155px',
        borderRadius: '300px',
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
        paddingTop: '20px',
        paddingBottom: '35px',
        borderTop: '2px solid rgba(136,136,136, 0.54)',
        borderBottom: '2px solid rgba(136,136,136, 0.54)',
        marginBottom: '30px'
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