import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import AppsIcon from '@material-ui/icons/Apps';
import { styles } from './style';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import { Link } from 'react-router-dom';

function MenubarAdm() {
    return (
        <>
            <div id="Menubar" style={styles.Menubar}>
                <Link to="/admin" >
                    <HomeIcon sx={{ fontSize: 40, marginTop: '5vh' }} color="primary" />
                </Link>
                <Link to="/setor" >
                    <AppsIcon sx={{ fontSize: 40, marginTop: '5vh' }} color="primary" />
                </Link>
                <div onClick={() => { window.location.href = "https://wasdenterprise.atlassian.net/servicedesk/customer/user/login?destination=portals" }} >
                    <ContactSupportIcon sx={{ fontSize: 40, marginTop: '5vh' }} color="primary" />
                </div>
                <Link to="/" >
                    <ExitToAppOutlinedIcon sx={{ fontSize: 40, marginTop: '53vh' }} color="primary" />
                </Link>
            </div>
        </>
    )
}

export default MenubarAdm