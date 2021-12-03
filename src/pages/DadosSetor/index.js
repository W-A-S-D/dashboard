import * as React from 'react';
import DashboardHolder from '../../components/DashboardHolder';
import MainContainer from '../../components/MainContainer';
import Profile from '../../components/Profile';
import Title from '../../components/Title';
import { styles, images } from './styles';
import DefaultGraph from '../../components/DefaultGraph';
import DetailGraph from '../../components/DetailGraph';

const DadosSetor = () => {
  return (
    <>
      <DashboardHolder>
        <MainContainer>
          <Title value='Detalhamento' />
          <div style={styles.stylesPc}>
            <DetailGraph img={images.ImagemPc} />
          </div>
          <div style={styles.container}>
            <DefaultGraph />
          </div>
        </MainContainer>
        <Profile />
      </DashboardHolder>
    </>
  )
}


export default DadosSetor;