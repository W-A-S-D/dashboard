import { Modal } from "@material-ui/core";
import ButtonWasd from "../ButtonWasd";
import { styles } from "./style";

function Delete(props) {
  return (
    <Modal open={props.open}>
      <div style={styles.deleteContent}>
        <div style={styles.deleteContentWrapper}>
          <h3>Deseja deletar o funcionário permanentemente?</h3>
          <div style={styles.deleteButton}>
            <ButtonWasd content="Cancelar" colorButton="fourth" onClick={props.onClick}></ButtonWasd>
          </div>
          <div style={styles.deleteButton}>
            <ButtonWasd content="Confirmar" colorButton="primary"></ButtonWasd>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default Delete;
