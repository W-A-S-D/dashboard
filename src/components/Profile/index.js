import { useContext, useEffect, useState, useRef } from "react";

import EditIcon from "@material-ui/icons/Edit";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { IconButton, TextField } from "@material-ui/core";
import CameraAltIcon from "@material-ui/icons/CameraAlt";

import { styles } from "./style";
import MiniCardSetor from "../MiniCardSetor";
import ButtonWasd from "../ButtonWasd";
import { AuthContext } from "../../contexts/auth";
import api from "../../service/api";
import ModalUpdate from "../ModalUpdate";

function Profile() {
  const { user } = useContext(AuthContext);
  const [sectors, setSector] = useState([]);
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [imagem, setImagem] = useState();
  const [email, setEmail] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [senha, setSenha] = useState("");
  const [editingImg, setEditingImg] = useState(`url(https://wasdapi.herokuapp.com/${user.avatar})`);
  const inputFile = useRef(null)


  useEffect(() => {
    api.get("/sectors/company").then((response) => {
      setSector(response.data);
    });
  }, [editingImg]);

  const uploadFile = (event) => {
    event.stopPropagation();
    event.preventDefault();
 
    setImagem(event.target.files[0]);
    if (imagem != null || imagem != undefined || event.target.files.length != 0) {
      const objectUrl = URL.createObjectURL(event.target.files[0]);
      setEditingImg(`url(${objectUrl})`);
      console.log(objectUrl);
    }
  };

  async function handleEditUser(event, imagem, email, confirmSenha, senha) {
    event.preventDefault();

    let formData = new FormData();

    formData.append("productImage", imagem);

    if (!email || !imagem) {
      return;
    }

    if (senha !== confirmSenha) {
      alert("Senhas Não Correspondem");
      return;
    }

    await api.put("update", {
      email,
      senha,
    });

    await api.put(`upload/user/${user.usuario_id}`, formData);

    window.location.reload();
  }

  return (
    <>
      <div style={styles.container}>
        {edit ? (
          <>
            <div style={styles.menuIcon}>
              <IconButton onClick={() => setEdit(false)}>
                <CancelOutlinedIcon fontSize="medium" />
              </IconButton>
            </div>
            <form
              onSubmit={(event) =>
                handleEditUser(event, imagem, email, confirmSenha, senha)
              }
            >
              <div style={styles.contentHolder}>
                <div style={styles.profile}>
                  <div style={styles.profileBorder}>
                    <div
                      style={{
                        ...styles.profilePhoto,
                        backgroundImage: `${editingImg}`,
                        backgroundSize: "cover",
                        position: 'relative',
                      }}
                    >
                      <IconButton
                        style={{
                          ...styles.profilePhoto,
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          border: '0',
                        }}
                        onClick={() => inputFile.current.click()}
                      >
                        <input type='file' id='file' ref={inputFile} onChange={(e) => uploadFile(e)} style={{ display: 'none' }} />

                        <CameraAltIcon fontSize="large" />
                      </IconButton>
                    </div>

                  </div>

                  <div style={styles.profileName}>Olá, {user.nome}</div>

                  <div style={{ ...styles.profileStatus }}>Editar Perfil</div>

                  <div style={{ ...styles.profileEmail }}>
                    <TextField
                      id="standard-basic"
                      label="Atualizar Email"
                      variant="standard"
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>

                  <div style={{ ...styles.profileEmail }}>
                    <TextField
                      id="standard-basic"
                      label="Nova Senha"
                      type="password"
                      variant="standard"
                      onChange={(event) => setSenha(event.target.value)}
                    />
                  </div>

                  <div style={{ ...styles.profileEmail }}>
                    <TextField
                      id="standard-basic"
                      label="Confirmar Senha"
                      variant="standard"
                      type="password"
                      onChange={(event) => setConfirmSenha(event.target.value)}
                    />
                  </div>
                </div>

                <div style={styles.profileButton}>
                  <ButtonWasd content="Atualizar" />
                </div>
              </div>
            </form>
          </>
        ) : (
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
                      backgroundImage: `url(${`https://wasdapi.herokuapp.com/${user.avatar}`})`,
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
                  console.log(sector)
                  return (
                    <MiniCardSetor
                      key={sector.setor_id}
                      label={sector.jogo}
                      img={`https://wasdapi.herokuapp.com/${sector.avatar}`}
                      status={sector.status}
                    />
                  );
                })}
              </div>
              <div style={styles.arrowDown}>
                <KeyboardArrowDownIcon fontSize="large"></KeyboardArrowDownIcon>
              </div>
            </div>
          </>
        )}
        <ModalUpdate
          open={modal}
          onClick={() => {
            setModal(false);
          }}
          onChange={uploadFile}
        />
      </div>
    </>
  );
}

export default Profile;
