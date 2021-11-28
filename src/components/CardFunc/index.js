import { Grid, IconButton } from "@material-ui/core";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import { useState } from "react";
import api from "../../service/api";
import Delete from "../Delete";
import { styles } from "./style";

function CardFunc(props) {
  const [modalState, setModalState] = useState(false);

  const handleDeleteFunc = () => {
    api.put(`/delete/${props.idFunc}`)
    setModalState(false)
    window.location.reload();
  };

  return (
    <>
      <Grid item lg={3} md={2} sm={12} style={styles.container}>
        <div style={styles.profile}>
          <div style={styles.delete}>
            <IconButton
              onClick={() => {
                setModalState(true);
              }}
            >
              <DeleteForeverOutlinedIcon />
            </IconButton>
          </div>
          <div id={props.id} style={styles.profileBorder}>
            <div
              style={{
                ...styles.profilePhoto,
                backgroundImage: `url(${props.imagem})`,
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div style={styles.profileText}>{props.nome}</div>
          <div style={{ ...styles.profileText, color: "#808080" }}>
            {props.email}
          </div>
        </div>
      </Grid>
      <Delete
        open={modalState}
        onClick1={() => {
          setModalState(false);
        }}
        onClick2={handleDeleteFunc}
      />
    </>
  );
}

export default CardFunc;
