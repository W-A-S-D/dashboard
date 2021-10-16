/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './DashboardAdmin.css';
import { Chart } from "react-google-charts";  // terminal "npm i react-google-charts"

export default props =>
    <div className="DashboardAdmin">
        <div className="TituloHolder">
            <div className="titulo">Home
            </div>
        </div>
        <div className="CardHolder">

            <div className="Card1">
                <Chart
                    width={'190px'}
                    height={'190px'}

                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Task', 'Hours per Day'],
                        ['', 50],
                        ['', 50],
                    ]}
                    options={{
                        title: '',
                        legend: 'none',
                        pieSliceText: 'none',
                        pieStartAngle: 90,
                        tooltip: { trigger: 'none' },
                        backgroundColor: 'none',
                        // Just add this option
                        pieHole: 0.8,
                        marginTop: 0,
                        slices: {
                            0: { color: '#D12F2F' },
                            1: { color: '#F9A4A4' },
                        },
                    }}
                    rootProps={{ 'data-testid': '3' }}
                />
                <div className="CardNum" style={{ color:`#D12F2F`}}>50%</div>
                <div className="CardTxt" style={{ color:`#D12F2F`}}>Alerta</div>
            </div>

            <div className="Card2">
                <Chart
                    width={'190px'}
                    height={'210px'}

                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Task', 'Hours per Day'],
                        ['', 50],
                    ]}
                    options={{
                        title: '',
                        legend: 'none',
                        pieSliceText: 'none',
                        pieStartAngle: 90,
                        tooltip: { trigger: 'none' },
                        backgroundColor: 'none',
                        // Just add this option
                        pieHole: 0.8,
                        marginTop: 0,
                        slices: {
                            0: { color: '#D1902F' },
                        },
                    }}
                    rootProps={{ 'data-testid': '3' }}
                />
                <div className="CardNum" style={{ color:`#D1902F`, marginLeft:`60px`}}>100%</div>
                <div className="CardTxt" style={{ color:`#D1902F`}}>Atenção</div>
            </div>

            <div className="Card3">
                <Chart
                    width={'190px'}
                    height={'210px'}

                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Task', 'Hours per Day'],
                        ['', 50],
                    ]}
                    options={{
                        title: '',
                        legend: 'none',
                        pieSliceText: 'none',
                        pieStartAngle: 90,
                        tooltip: { trigger: 'none' },
                        backgroundColor: 'none',
                        // Just add this option
                        pieHole: 0.8,
                        marginTop: 0,
                        slices: {
                            0: { color: '#36ADC6' },
                        },
                    }}
                    rootProps={{ 'data-testid': '3' }}
                />
                <div className="CardNum" style={{ color:`#36ADC6`, marginLeft:`60px`}}>100%</div>
                <div className="CardTxt" style={{ color:`#36ADC6`}}>Normal</div>
            </div>
        </div>
        <div className="Grafico">
            <div className="GraficoHolder">
                <div className="DadosHolder">
                    <div className="DadosTxt">Estável</div>
                    <div className="DadosTxt">Instável</div>
                </div>
            </div>
            <div className="Layout">
                <div className="GameHolder">
                    <div className="NomeGame">League of Legends  </div>
                    <div className="BarraGame">
                        <div className="InnerBarraGame" style={{ width: "35%" }}> </div>
                    </div>
                </div>

                <div className="GameHolder">
                    <div className="NomeGame"> Valorant   </div>
                    <div className="BarraGame">
                        <div className="InnerBarraGame" style={{ width: "50%" }}> </div>
                    </div>
                </div>

                <div className="GameHolder">
                    <div className="NomeGame"> TFTs   </div>
                    <div className="BarraGame">
                        <div className="InnerBarraGame" style={{ width: "75%" }}> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>