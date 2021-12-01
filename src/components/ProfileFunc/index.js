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
import ModalUpdate from "../ModalUpdate";
import PedidoCard from "../PedidoCard";

function ProfileFunc() {
  const { user } = useContext(AuthContext);
  const [pedidos, setPedidos] = useState([]);
  const [edit, setEdit] = useState(false);
  const [modal, setModal] = useState(false);
  const [imagem, setImagem] = useState();
  const [email, setEmail] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [senha, setSenha] = useState("");


  useEffect(() => {
    api.get("requests").then((response) => {
      setPedidos(response.data);
    });
  });

  const uploadFile = (event) => {
    setImagem(event.target.files[0]);
    setModal(false);
  };

  async function handleEditUser(event, imagem, email, confirmSenha, senha) {
    event.preventDefault();

    let formData = new FormData();

    formData.append("productImage", imagem);


    if (!email || !imagem) {
      return;
    }

    if (senha !== confirmSenha) {
      alert("Senhas Não Correspondem")
      return;
    }

    await api.put("update", {
      email,
      senha
    })

    api.put(`upload/user/${user.usuario_id}`, formData);

    window.location.reload();
  }

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
              <form onSubmit={(event) => handleEditUser(event, imagem, email, confirmSenha, senha)}>
                <div style={styles.contentHolder}>
                  <div style={styles.profile}>
                    <div style={styles.profileBorder}>
                      <IconButton style={styles.profilePhoto} onClick={() => setModal(true)}>
                        <CameraAltIcon fontSize="large" />
                      </IconButton>
                    </div>

                    <div style={styles.profileName}>Olá, {user.nome}</div>

                    <div style={{ ...styles.profileStatus }}>Editar Perfil</div>

                    <div style={{ ...styles.profileEmail }}>
                      <TextField id="standard-basic" label="Atualizar Email" variant="standard" onChange={(event) => setEmail(event.target.value)} />
                    </div>

                    <div style={{ ...styles.profileEmail }}>
                      <TextField id="standard-basic" label="Nova Senha" variant="standard" onChange={(event) => setSenha(event.target.value)} />
                    </div>

                    <div style={{ ...styles.profileEmail }}>
                      <TextField id="standard-basic" label="Confirmar Senha" variant="standard" onChange={(event) => setConfirmSenha(event.target.value)} />
                    </div>

                  </div>

                  <div style={styles.profileButton}>
                    <ButtonWasd content="Atualizar" />
                  </div>

                </div>
              </form>
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
                        backgroundImage: `url(${`https://wasdapi.herokuapp.com/uploads/${user.avatar}`})`,
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
                  {pedidos.length === undefined ||  pedidos.length === 0?
                    <div>Não há pedidos pendentes</div>
                    : pedidos.map((pedido) => {
                      return (
                        <PedidoCard nome={pedido.hostname} idRequest={pedido.pedido_id}/>
                      );
                    })}
                </div>
                <div style={styles.arrowDown}>
                  <KeyboardArrowDownIcon fontSize="large"></KeyboardArrowDownIcon>
                </div>
              </div>

            </>
        }
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

export default ProfileFunc;
