import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import HomeIcon from "@material-ui/icons/HomeOutlined";
import { styles } from "./style";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import React from "react";

function MenuBarAdm() {
  const { signOut } = React.useContext(AuthContext);

  const handleLogOut = () => {
    signOut();
  };
  return (
    <>
      <div id="Menubar" style={styles.Menubar}>
        <Link to="/">
          <HomeIcon sx={{ fontSize: 40, marginTop: "5vh" }} color="primary" />
        </Link>
        <div
          style={{cursor:'pointer'}}
          onClick={() => {
            window.location.href =
              "https://wasdenterprise.atlassian.net/servicedesk/customer/user/login?destination=portals";
          }}
        >
          <ContactSupportIcon
            sx={{ fontSize: 40, marginTop: "5vh" }}
            color="primary"
          />
        </div>
        <div
          onClick={() => handleLogOut()}
          style={{ position: "absolute", bottom: 20, cursor:'pointer' }}
        >
          <ExitToAppOutlinedIcon sx={{ fontSize: "2.5em" }} color="secondary" />
        </div>
      </div>
    </>
  );
}

export default MenuBarAdm;
