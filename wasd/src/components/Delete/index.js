import { Button, Modal } from "@material-ui/core";
import { styles } from "./style";

function Delete(props) {
  return (
    <Modal open={props.open}>
      <div style={styles.deleteContent}>
        <div style={styles.deleteContentWrapper}>
          <h3>Deseja deletar o funcionário permanentemente?</h3>
          <div style={styles.deleteButton}>
            <Button variant="contained" color="fourth" style={{color:'white', width:'11vw', height:'5vh'}} onClick={props.onClick1}>Cancelar</Button>
          </div>
          <div style={styles.deleteButton}>
            <Button variant="contained" color="primary" style={{color:'white', width:'11vw', height:'5vh'}} onClick={props.onClick2}>Confirmar</Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default Delete;
