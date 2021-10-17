import * as React from 'react';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ModalInput from '../ModalInput';
import ButtonModal from '../ButtonModal';
import { styles } from './style.js';

const ModalComponent = (props) => {
    const [open, setOpen ] = React.useState(true);
    
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styles.boxContainer}>
                    <IconButton
                        sx={{position:'absolute', top: 0, right: 0}}
                        onClick={handleClose}
                    >
                        <HighlightOffIcon />
                    </IconButton>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 45 }}>
                        <h1 style={{ marginBottom: 2, marginTop: 5 }}>Cadastro de Funcionário</h1>
                        <div style={{ height: '2px', width: '85%', backgroundColor: 'rgba(136, 136, 136, 0.54)' }}></div>
                    </div>

                    <ModalInput width={'100%'} label="Nome do Funcionário" />
                    <ModalInput width={'100%'} label="Senha" pass={true} />
                    <div style={{ margin: '20px 32px' }}>
                        <div style={{ color: 'rgba(0, 0, 0, 0.4)', marginBottom: '5px' }}>Setor</div>
                        <select style={{ padding: '0 10px', width: '100%', minHeight: '54px', borderRadius: 10, outline: 'none', border: 0, boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.24)', }}>

                        </select>
                    </div>
                    <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <ButtonModal content="Confirmar" />

                    </div>

                </Box>
            </Modal>
        </>
    )
}

export default ModalComponent;