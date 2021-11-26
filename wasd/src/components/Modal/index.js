import * as React from "react";
import Box from "@material-ui/core/Box";
import Modal from "@material-ui/core/Modal";
import IconButton from "@material-ui/core/IconButton";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import ModalInput from "../ModalInput";
import { styles } from "./style.js";
import ButtonWasd from "../ButtonWasd";
import api from "../../service/api";
import { AuthContext } from "../../contexts/auth";

const ModalComponent = (props) => {
  const { user } = React.useContext(AuthContext);
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  let modalState = props.open;

  async function handleCreateFunc(event) {
    event.preventDefault();

    if (!nome.trim() || !email.trim() || !senha.trim()) {
      return;
    }

    console.log(nome + email + senha);

    const response = await api.post("create/func", {
      nome,
      email,
      pass: senha,
      fkEmpresa: user.fk_empresa,
    });

    setNome("");
    setEmail("");
    setSenha("");

    modalState = false
    window.location.reload();
  }

  return (
    <>
      <Modal
        open={modalState}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.boxContainer}>
          <IconButton
            sx={{ position: "absolute", top: 0, right: 0 }}
            onClick={props.onClick}
          >
            <HighlightOffIcon />
          </IconButton>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 45,
            }}
          >
            <h1 style={{ marginBottom: 2, marginTop: 5 }}>
              Cadastro de Funcionário
            </h1>
            <div
              style={{
                height: "2px",
                width: "85%",
                backgroundColor: "rgba(136, 136, 136, 0.54)",
              }}
            ></div>
          </div>

          <form onSubmit={handleCreateFunc}>
            <ModalInput
              width={"100%"}
              type="text"
              label="Nome do Funcionário"
              onChange={(event) => setNome(event.target.value)}
              value={nome}
            />
            <ModalInput
              width={"100%"}
              type="email"
              label="Email do Funcionário"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
            <ModalInput
              width={"100%"}
              label="Senha"
              pass={true}
              onChange={(event) => setSenha(event.target.value)}
              value={senha}
            />
            <div
              style={{
                display: "flex",
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                marginTop: "10%",
              }}
            >
              <ButtonWasd
                content="Confirmar"
                back="linear-gradient(90deg, rgba(128, 184, 197, 0.6) 0%, rgba(162, 157, 253, 0.6) 100%)"
              />
            </div>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default ModalComponent;
