import * as React from 'react';
import DashboardHolder from '../../components/DashboardHolder';
import MainContainer from '../../components/MainContainer';
import Profile from '../../components/Profile';
import Title from '../../components/Title';
import { styles } from './styles';

const DadosSetor = () => {
    return (
        <>
            <DashboardHolder>
                <MainContainer>
                    <Title value='Detalhamento'/>
                    <div style={styles.container}>
                        
                    </div>
                </MainContainer>
                <Profile />
            </DashboardHolder>
        </>
    )
}


export default DadosSetor;