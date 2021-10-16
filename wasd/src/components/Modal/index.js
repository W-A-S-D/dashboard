import * as React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import ModalInput from '../ModalInput'
import {styles} from './style.js'; 

const ModalComponent = (props) => {
    return (
        <>
            <Modal
                keepMounted
                open={true}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styles.boxContainer}>
                    <div style={{display:'flex',flexDirection:'column' ,justifyContent: 'center', alignItems:'center', marginBottom: 45}}>
                        <h1 style={{marginBottom: 2, marginTop: 5}}>Cadastro de Funcionário</h1>
                        <div style={{ height: '2px', width: '85%', backgroundColor: 'rgba(136, 136, 136, 0.54)'}}></div>
                    </div>

                  <ModalInput width={'100%'} label="Nome do Funcionário" />
                  <ModalInput width={'100%'} label="Senha" pass={true} />
                  <ModalInput width={'100%'} label="Setor" />
                  
                  
                </Box>
            </Modal>
        </>
    )
}

export default ModalComponent;