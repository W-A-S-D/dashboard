import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import HomeIcon from "@material-ui/icons/HomeOutlined";
import AppsIcon from "@material-ui/icons/Apps";
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import { styles } from "./style";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import { Link } from "react-router-dom";

function MenubarAdm() {
  return (
    <>
      <div id="Menubar" style={styles.Menubar}>
        <Link to="/admin">
          <HomeIcon
            sx={{ fontSize: "2.5em", marginTop: "5vh" }}
            color="primary"
          />
        </Link>
        <Link to="/setor">
          <AppsIcon
            sx={{ fontSize: "2.5em", marginTop: "5vh" }}
            color="primary"
          />
        </Link>
        <Link to="/cadastro-func">
          <PersonAddOutlinedIcon
            sx={{ fontSize: "2.5em", marginTop: "5vh" }}
            color="primary"
          />
        </Link>
        <div
          onClick={() => {
            window.location.href =
              "https://wasdenterprise.atlassian.net/servicedesk/customer/user/login?destination=portals";
          }}
        >
          <ContactSupportIcon
            sx={{ fontSize: "2.5em", marginTop: "5vh" }}
            color="primary"
          />
        </div>
        <Link to="/" style={{position: 'absolute', bottom: 20}}>
          <ExitToAppOutlinedIcon
            sx={{ fontSize: "2.5em"}}
            color="secondary"
          />
        </Link>
      </div>
    </>
  );
}

export default MenubarAdm;
