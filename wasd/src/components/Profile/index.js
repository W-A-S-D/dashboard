import MenuIcon from '@material-ui/icons/Menu';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { styles } from './style'
import MiniCardSetor from '../MiniCardSetor';
function Profile() {
	return (
		<>
			<div style={styles.container}>
				<div style={styles.menuIcon}><MenuIcon fontSize='large'></MenuIcon></div>
				<div style={styles.contentHolder}>
					<div style={styles.profile}>
						<div style={styles.profilePhoto}></div>
						<div style={styles.profileName}>Olá, Maria Silva</div>
						<div style={styles.profileStatus}>ADM</div>
					</div>

					<div style={styles.setor}>
						<div style={styles.contentHolder}>
							<div style={{ fontSize: '18px', fontWeight: '800', marginTop: '14px' }}>Meus Setores</div>
						</div>
						<MiniCardSetor/>
						<MiniCardSetor borderColor='#D1902F'/>
						<MiniCardSetor/>
					</div>
					<div style={styles.arrowDown}><KeyboardArrowDownIcon fontSize='large'></KeyboardArrowDownIcon></div>
				</div>
			</div>
		</>
	)
}

export default Profile