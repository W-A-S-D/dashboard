import imageMine from '../../img/icon-mine.png';
import imageFort from '../../img/icon-fortnite.png';
import imageLol from '../../img/icon-lol.png';

export const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '22.5vw',
        height: '90vh',
        backgroundColor: '#F8F8F8',
        borderRadius: '8px',
        overflowX: 'hidden',
        overflowY: 'hidden'
    },
    menuIcon: {
        marginRight: '5px',
        marginTop: '5px',
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
    },
    profileBorder: {
        padding: '4px',
        background: 'linear-gradient(90deg, rgba(128, 184, 197, 0.6) 0%, rgba(162, 157, 253, 0.6) 100%)',
        borderRadius: '50%',
        lineHeight: '0'
    },
    profilePhoto: {
        padding: '5px',
        width: '150px',
        height: '150px',
        borderRadius: '300px',
        border: '2px solid #FFF'
    },
    profileEdit: {
      padding: '5px',
      width: '150px',
      height: '150px',
      borderRadius: '300px',
      border: '2px solid #FFF'
  },
    profileName: {
        marginTop: '5%',
        fontSize: '22px',
        fontWeight: '800'
    },
    profileEdit: {
      marginTop: '8%',
      fontSize: '22px',
      fontWeight: '800',
      marginBottom: '5%'
  },
    profileEmail: {
      marginTop: '6%',
      fontSize: '22px',
      fontWeight: '400'
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
        marginTop: '2%',
    },
    arrowDown: {
        color: 'rgba(136,136,136, 0.54)'
    },
    profileButton: {
      marginTop: "10%"
    }

}

export const images = {
    imageMine: `${imageMine}`,
    imageFort: `${imageFort}`,
    imageLol: `${imageLol}`
}