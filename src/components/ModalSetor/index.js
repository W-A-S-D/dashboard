import * as React from "react";
import Box from "@material-ui/core/Box";
import Modal from "@material-ui/core/Modal";
import IconButton from "@material-ui/core/IconButton";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import ModalInput from "../ModalInput";
import { styles } from "./style.js";
import ButtonWasd from "../ButtonWasd";
import api from "../../service/api";
import { Button, MenuItem, Select } from "@material-ui/core";


const ModalSetor = (props) => {
  const [users, setUsers] = React.useState([]);
  const [nome, setNome] = React.useState();
  const [imagem, setImagem] = React.useState();
  const [responsavel, setResponsavel] = React.useState();
  let modalState = props.open;

  React.useEffect(() => {
    api
      .get("users/company")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const uploadFile = (event) => {
    setImagem(event.target.files[0]);
  };

  async function handleCreateSector(event, imagem, nome, responsavel) {
    event.preventDefault();
    console.log(imagem)

    let formData = new FormData();
    formData.append("productImage", imagem);

    if (!nome || !imagem) {
      return;
    }

    const response = await api.post("sectors/create", {
      jogo: nome,
      fk_usuario: responsavel,
    })

    api.put(`sectors/upload/${response.data.setor_id}`, formData);

    modalState = false;
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
            <h1 style={{ marginBottom: 2, marginTop: 5 }}>Cadastro de Setor</h1>
            <div
              style={{
                height: "2px",
                width: "85%",
                backgroundColor: "rgba(136, 136, 136, 0.54)",
              }}
            ></div>
          </div>
          <form onSubmit={(event) => handleCreateSector(event, imagem, nome, responsavel)} encType="multipart/form-data">
            <ModalInput
              width={"100%"}
              label="Nome do Setor"
              onChange={(event) => setNome(event.target.value)}
              value={nome}
            />
            <div style={{ margin: "20px 32px" }}>
              <div style={{ color: "rgba(0, 0, 0, 0.4)", marginBottom: "5px" }}>
                Setor
              </div>
              <Select
                style={{
                  padding: "0 10px",
                  width: "100%",
                  minHeight: "54px",
                  borderRadius: 10,
                  outline: "none",
                  border: 0,
                  boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.24)",
                }}
                onChange={(event) => setResponsavel(event.target.value)}
              >
                {users.map((user) => {
                  return <MenuItem value={user.usuario_id}>{user.nome}</MenuItem>;
                })}
              </Select>
            </div>

            <div
              style={{
                display: "flex",
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                marginTop: "10%",
              }}
            >
              <label htmlFor="btn-upload">
                <input
                  id="btn-upload"
                  name="productImage"
                  style={{ display: "none" }}
                  type="file"
                  onChange={uploadFile}
                />
                <Button
                  className="btn-choose"
                  variant="outlined"
                  component="span"
                >
                  Escolha a imagem
                </Button>
              </label>
            </div>

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

export default ModalSetor;
