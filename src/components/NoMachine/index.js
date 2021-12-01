import { Button, Modal } from "@material-ui/core";
import { styles } from "./style";

function NoMachine(props) {
  return (
    <Modal open={props.open}>
      <div style={styles.deleteContent}>
        <div style={styles.deleteContentWrapper}>
          <h3>Sem dados Cadastrados!</h3>
          <h4>Cadastre seu primeiro funcionário</h4>
          <div style={styles.deleteButton}>
            <Button variant="contained" color="fourth" style={{color:'white', width:'11vw', height:'5vh'}} onClick={() => window.location.href="/funcionarios"}>Cadastrar</Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default NoMachine;
