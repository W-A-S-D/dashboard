import * as React from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

import Card from "../../components/Card";
import Maquina from "../../components/Machine";
import DashboardHolder from "../../components/DashboardHolder";
import MainContainer from "../../components/MainContainer";
import { styles } from "./styles";
import Profile from "../../components/Profile";
import ModalSetor from "../../components/ModalSetor";
import ContentHolder from "../../components/ContentHolder";
import api from "../../service/api";

function Setor() {
  const [modalState, setModalState] = React.useState(false);
  const [sectors, setSectors] = React.useState([]);
  const [machines, setMachines] = React.useState([]);
  const [titleSetor, setTitleSetor] = React.useState("");

  React.useEffect(() => {
    api
      .get("sectors/company")
      .then((response) => {
        setSectors(response.data);
        setTitleSetor(response.data[0].jogo)
        changeMachines(response.data[0].setor_id)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const changeMachines = (idSetor) => {
    api
      .get(`machines/sector/${idSetor}`)
      .then((response) => {
        setMachines(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleChange = (nome) => {
    setTitleSetor(nome)
  }

  return (
    <DashboardHolder>
      <MainContainer>
        <ContentHolder minHeight="45%" title="Setor">
          <AddCircleOutlineIcon
            onClick={() => {
              setModalState(true);
            }}
            style={styles.Adicionar}
          />
          {sectors.length === undefined ? (
            <div style={{ marginLeft: '5%' }}>Não há setores cadastrados</div>
          ) : (
            sectors.map((sector) => {
              return (
                <Card
                  key={sector.setor_id}
                  imagens={`https://wasdapi.herokuapp.com/uploads/${sector.avatar_jogo}`}
                  descricao="lol"
                  nomeJogo={sector.jogo}
                  nomeFunc={sector.nome}
                  status={sector.status}
                  onClick={() => {
                    handleChange(sector.jogo)
                    changeMachines(sector.setor_id)
                  }}
                />
              );
            })
          )}
        </ContentHolder>

        <ContentHolder title={titleSetor}>
          {machines.length === undefined ? (
            <div style={{ marginLeft: '5%', marginBottom: '3%' }}>Não há máquinas cadastradas</div>
          ) : (
            machines.map((machine) => {
              return (
                <Maquina
                  idMaq={machine.maquina_id}
                  key={machine.maquina_id}
                  computador={machine.nome}
                  alertas={machine.status}
                />
              );
            })
          )}
        </ContentHolder>
      </MainContainer>
      <Profile />
      <ModalSetor
        open={modalState}
        onClick={() => {
          setModalState(false);
        }}
      />
    </DashboardHolder>
  );
}

export default Setor;
