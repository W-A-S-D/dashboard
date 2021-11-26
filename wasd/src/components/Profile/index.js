import MenuIcon from "@material-ui/icons/Menu";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { styles } from "./style";
import MiniCardSetor from "../MiniCardSetor";
import { AuthContext } from "../../contexts/auth";
import { useContext, useEffect, useState } from "react";
import api from "../../service/api";

function Profile() {
  const { user } = useContext(AuthContext);
  const [sectors, setSector] = useState([]);

  useEffect(() => {
    api.get("/sectors/company").then((response) => {
      setSector(response.data);
    });
  }, []);

  return (
    <>
      <div style={styles.container}>
        <div style={styles.menuIcon}>
          <MenuIcon fontSize="large"></MenuIcon>
        </div>
        <div style={styles.contentHolder}>
          <div style={styles.profile}>
            <div style={styles.profileBorder}>
              <div
                style={{
                  ...styles.profilePhoto,
                  backgroundImage: `url(${user.avatar})`,
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
            <div style={styles.profileName}>Olá, {user.nome}</div>
            <div style={styles.profileStatus}>
              {user.nivelAcesso === 1 ? "ADM" : "Funcionário"}
            </div>
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
            {sectors.map((sector) => {
              return (
                <MiniCardSetor
                  key={sector.setor_id}
                  status="normal"
                  label={sector.jogo}
                  img={sector.jogo_avatar}
                />
              );
            })}
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
