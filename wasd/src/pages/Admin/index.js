/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { styles } from './style.js';

import ProgressBar from '../../components/ProgressBar/index.js';
import StatusCard from '../../components/StatusCard/index.js';
import DashboardHolder from '../../components/DashboardHolder/index.js';
import MainContainer from '../../components/MainContainer/index.js';
import Profile from '../../components/Profile/index.js';


const AdminPage = (props) => {

    return (
        <>
        <DashboardHolder>
            <MainContainer>
                <div style={styles.tituloHolder}>
                    <div style={styles.titulo}>Home
                    </div>
                </div>
                <div style={styles.cardHolder}>
                    <StatusCard hoverColor="#D12F2F" type='alert' value={40} />
                    <StatusCard hoverColor="#D1902F" type='warning' value={12} />
                    <StatusCard hoverColor="#7FB8C4" type='normal' value={48} />
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
                        <ProgressBar label='Fortnite' barValue='55%' />
                        <ProgressBar label='Minecraft' barValue='75%' />
                    </div>  
                </div>
            </MainContainer>
            <Profile/>

        </DashboardHolder>
        
        </>)
}

export default AdminPage;