import * as React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
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
                    <div style={{display:'flex',flexDirection:'column' ,justifyContent: 'center', alignItems:'center'}}>
                        <h1 style={{marginBottom: 2, marginTop: 5}}>Cadastro de Funcionário</h1>
                        <div style={{ height: '2px', width: '85%', backgroundColor: 'rgba(136, 136, 136, 0.54)'}}></div>
                    </div>
                    <div style={{margin:'35px 32px'}}>
                        <div style={{color: 'rgba(0, 0, 0, 0.4)', marginBottom: '15px'}}>props.label</div>
                        <input style={{padding:'0 15px',minHeight:'54px',borderRadius: 10,outline:'none' ,border: 0, boxShadow:'4px 4px 8px rgba(0, 0, 0, 0.24)'}} security={props.security} type="text" />
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default ModalComponent;