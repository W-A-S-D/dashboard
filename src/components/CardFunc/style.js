
export const styles = {
    container: {
        position: 'relative',
        margin: '3vh 2vh',
        overflow: 'auto',
        background: '#FFFFFF',
        padding: '1% 15px 4% 15px',
        /* Destaque - Home - Instável/Estável */
        boxShadow: '0px 0px 24px rgba(0, 0, 0, 0.22)',
        borderRadius: '24px',
        display: 'flex',
        flexDirection: 'column'
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
    },
    profileText: {
        marginTop: '5%',
        textAlign: 'center',
        fontSize: '2.2ch'
    },
    profileTextGame: {
        marginTop: '5%',
        textAlign: 'center',
        fontSize: '2.2ch',
        color: 'rgba(128, 184, 197)'
    },
    delete: {
        position: 'absolute',
        top: 10,
        left: 10,
        color: '#888888',
    }
}