import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import AppsIcon from '@material-ui/icons/Apps';
import { styles } from './style';

function MenubarAdm() {
    return (
        <>
            <div id="Menubar" style={styles.Menubar}>
                <HomeIcon sx={{ fontSize: 56, marginTop: '5vh' }} color="primary"/>
                <AppsIcon sx={{ fontSize: 56, marginTop: '5vh' }} color="primary"/>
                <ContactSupportIcon sx={{ fontSize: 56, marginTop: '5vh' }} color="primary"/>  
            </div>
         </>
     )
}

export default MenubarAdm