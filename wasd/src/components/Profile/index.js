import MenuIcon from "@material-ui/icons/Menu";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { styles, images } from "./style";
import MiniCardSetor from "../MiniCardSetor";

function Profile() {
  return (
    <>
      <div style={styles.container}>
        <div style={styles.menuIcon}>
          <MenuIcon fontSize="large"></MenuIcon>
        </div>
        <div style={styles.contentHolder}>
          <div style={styles.profile}>
            <div style={styles.profileBorder}>
              <div style={styles.profilePhoto}></div>
            </div>
            <div style={styles.profileName}>Olá, Maria Silva</div>
            <div style={styles.profileStatus}>ADM</div>
          </div>

          <div style={styles.setor}>
            <div style={styles.contentHolder}>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "800",
                  marginTop: "14px",
                }}
              >
                Meus Setores
              </div>
            </div>
            <MiniCardSetor
              status="alert"
              label="Minecraft"
              img={images.imageMine}
            />
            <MiniCardSetor
              status="warning"
              label="Fortnite"
              img={images.imageFort}
            />
            <MiniCardSetor
              status="normal"
              label="League of Legends"
              img={images.imageLol}
            />
          </div>
          <div style={styles.arrowDown}>
            <KeyboardArrowDownIcon fontSize="large"></KeyboardArrowDownIcon>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
