import * as React from "react";
import Box from "@material-ui/core/Box";
import Modal from "@material-ui/core/Modal";
import IconButton from "@material-ui/core/IconButton";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { styles } from "./style.js";
import { Button } from "@material-ui/core";


const ModalUpdate = (props) => {
  return (
    <>
      <Modal
        open={props.open}
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
                onChange={props.onChange}
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
        </Box>
      </Modal>
    </>
  );
};

export default ModalUpdate;
