import { Button } from "@material-ui/core";
import api from "../../service/api";
import { styles } from "./style";

const PedidoCard = (props) => {

  const handleRequest = (event, request) => {
    event.preventDefault()
    api.put("request/update", {
      id: props.idRequest,
      status: request
    }).then(
      window.location.reload()
    )
  }
  
  
  return (
    <>
      <div style={styles.cardContainer}>
        <div style={styles.textContainer}>
          <div
            style={{ fontWeight: "800", fontSize: "14px", margin: "0 auto" }}
          >
            {props.nome}
          </div>
          <div style={styles.buttonContainer}>
            <div style={{marginRight: '5%'}}>
              <Button size="small" variant="contained" onClick={(event) => handleRequest(event, 1)}>
                Aceitar
              </Button>
            </div>
            <div>
              <Button size="small" variant="outlined" onClick={(event) => handleRequest(event, 2)}>
                Negar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PedidoCard;
