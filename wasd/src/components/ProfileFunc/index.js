import { useContext, useEffect, useState } from "react";

import EditIcon from '@material-ui/icons/Edit';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import { IconButton, TextField } from '@material-ui/core';

import { styles } from "./style";
import ButtonWasd from "../ButtonWasd"
import { AuthContext } from "../../contexts/auth";
import api from "../../service/api";

function ProfileFunc() {
  const { user } = useContext(AuthContext);
  const [pedidos, setPedidos] = useState([]);
  const [edit, setEdit] = useState(false);

  // useEffect(() => {
  //   api.get("/sectors/company").then((response) => {
  //     setSector(response.data);
  //   });
  // }, []);

  return (
    <>
      <div style={styles.container}>
        {
          edit ?
            <>
              <div style={styles.menuIcon}>
                <IconButton onClick={() => setEdit(false)}>
                  <CancelOutlinedIcon fontSize="medium" />
                </IconButton>
              </div>
              <div style={styles.contentHolder}>
                <div style={styles.profile}>
                  <div style={styles.profileBorder}>
                    <IconButton style={styles.profilePhoto}>
                      <CameraAltIcon fontSize="large"/>
                    </IconButton>
                  </div>

                  <div style={styles.profileName}>Olá, {user.nome}</div>

                  <div style={{ ...styles.profileStatus }}>Editar Perfil</div>

                  <div style={{ ...styles.profileEmail }}>
                    <TextField id="standard-basic" label="Atualizar Email" variant="standard" />
                  </div>

                  <div style={{ ...styles.profileEmail }}>
                    <TextField id="standard-basic" label="Nova Senha" variant="standard" />
                  </div>

                  <div style={{ ...styles.profileEmail }}>
                    <TextField id="standard-basic" label="Confirmar Senha" variant="standard" />
                  </div>

                </div>

                <div style={styles.profileButton}>
                  <ButtonWasd content="Atualizar" />
                </div>

              </div>
            </>
            :
            <>
              <div style={styles.menuIcon}>
                <IconButton onClick={() => setEdit(true)}>
                  <EditIcon fontSize="medium" />
                </IconButton>
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
                      Pedidos
                    </div>
                  </div>
                </div>
                <div style={styles.arrowDown}>
                  <KeyboardArrowDownIcon fontSize="large"></KeyboardArrowDownIcon>
                </div>
              </div>

            </>
        }


      </div>
    </>
  );
}

export default ProfileFunc;
