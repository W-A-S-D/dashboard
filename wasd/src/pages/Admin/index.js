/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { styles } from './style.js';

import ProgressBar from '../../components/ProgressBar/index.js';
import StatusCard from '../../components/StatusCard/index.js';


const AdminPage = (props) => {

    return (
        <>
            <div style={styles.dashboardAdmin}>
                <div style={styles.tituloHolder}>
                    <div style={styles.titulo}>Home
                    </div>
                </div>
                <div style={styles.cardHolder}>
                    <StatusCard type='alert' value={50} />
                    <StatusCard type='warning' value={100} />
                    <StatusCard type='normal' value={100} />
                </div>
                <div style={styles.grafico}>
                    <div style={styles.gameHolder}>
                        <div style={styles.dadosHolder}>
                            <div style={styles.dadosTxt}>Estável</div>
                            <div style={styles.dadosTxt}>Instável</div>
                        </div>
                    </div>
                    <div style={styles.layout}>
                        <ProgressBar label='League of Legends' barValue='35%' />
                        <ProgressBar label='Valorant' barValue='55%' />
                        <ProgressBar label='TFTs' barValue='75%' />
                    </div>  
                </div>
            </div>
        </>)
}

export default AdminPage;