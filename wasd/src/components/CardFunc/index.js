import { Grid, IconButton } from "@material-ui/core";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import { useState } from "react";
import Delete from "../Delete";
import { styles } from "./style";

function CardFunc(props) {
  const [modalState, setModalState] = useState(false);

  return (
    <>
      <Grid item lg={3} md={2} sm={12} style={styles.container}>
        <div style={styles.profile}>
          <div style={styles.delete}>
            <IconButton>
              <DeleteForeverOutlinedIcon
                onClick={() => {
                  setModalState(true);
                }}
              />
            </IconButton>
          </div>
          <div style={styles.profileBorder}>
            <div
              style={{
                ...styles.profilePhoto,
                backgroundImage: `url(${props.imagem})`,
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div style={styles.profileText}>{props.nome}</div>
          <div style={styles.profileTextGame}>{props.jogo}</div>
        </div>
      </Grid>
      <Delete
        open={modalState}
        onClick={() => {
          setModalState(false);
        }}
      />
    </>
  );
}

export default CardFunc;
