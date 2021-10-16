import imageMine from '../../img/icon-mine.png';

export const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '416px',
        height: '80vh',
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
        height: '300px'
    },
    profilePhoto: {
        padding: '5px',
        width: '155px',
        height: '155px',
        borderRadius: '300px',
        backgroundColor: '#000000'
    },
    profileName: {
        marginTop: '14px',
        fontSize: '22px',
        fontWeight: '800'
    },
    profileStatus: {
        font: '22px',
        fontWeight: '600',
        color: '#8E73DF'
    },
    setor: {
        paddingBottom: '14px',
        borderTop: '2px solid rgba(136,136,136, 0.54)',
        borderBottom: '2px solid rgba(136,136,136, 0.54)'
    },
    arrowDown: {
        color: 'rgba(136,136,136, 0.54)'
    },
    miniCardSetor: {
        height: '64px',
        width: '332px',
        left: '1497px',
        top: '484px',
        borderRadius: '5px',
        rgba: '(255, 255, 255, 1)',
        borderTop: '1px solid rgba(211, 211, 211, 1)',
        borderRight: '1px solid rgba(211, 211, 211, 1)',
        borderBottom: '1px solid rgba(211, 211, 211, 1)',
        borderLeft: '6px solid rgba(209, 47, 47, 1)',
        boxShadow: '4px 4px 8px 0px rgba(0, 0, 0, 0,24)',
        paddingLeft: '24px',
        paddingTop: '8px',
        paddingBottom: '10px'
    },
    gameSetor: {
        fontWeight: 'bold',
        fontSize: '12px',
        lineHeight: '16px',
        paddingLeft: '94px',
        paddingTop: '13px',
        paddingBottom: '16px'
    },
    setorImages: {
        width: '46px',
        height: '46px'
    }
}
export const images = {
    imageMine: `${imageMine}`
}