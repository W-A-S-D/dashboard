import { Chart } from "react-google-charts";

const StatusCard = (props) => {
    const statusEnum = {
        alert: 'alert',
        warning: 'warning',
        normal: 'normal',
    }

    return (
        <>
            <div style={{
                position: 'relative',
                marginLeft: '71px',
                marginTop: '71px',
                width: '312px',
                height: '208px',
                background: props.type === statusEnum.alert ? 'linear-gradient(113.96deg, rgba(209, 47, 47, 0.38) 0%, rgba(255, 255, 255, 0.38) 98.96%)' : props.type === statusEnum.warning ? 'linear-gradient(114.39deg, rgba(209, 144, 47, 0.38) 1.37%, rgba(255, 255, 255, 0.38) 98.13%)' : 'linear-gradient(114.7deg, rgba(127, 184, 196, 0.38) 0%, rgba(255, 255, 255, 0.38) 97.69%)',
                boxShadow: '2px 2px 15px rgba(0, 0, 0, 0.1)',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
            }}>
                <Chart
                    width={'190px'}
                    height={'190px'}

                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Task', 'Hours per Day'],
                        ['', props.value],
                        ['', 100 - props.value],
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
                            0: { color: props.type === statusEnum.alert ? `#D12F2F` : props.type === statusEnum.warning ? `#D1902F` : `#36ADC6` },
                            1: { color: props.type === statusEnum.alert ? `#F9A4A4` : props.type === statusEnum.warning ? `#000` : `#000` },
                        },
                    }}
                    rootProps={{ 'data-testid': '3' }}
                />
                
                <div style={{
                    color: props.type === statusEnum.alert ? `#D12F2F` : props.type === statusEnum.warning ? `#D1902F` : `#36ADC6`,
                    position: 'absolute',
                    marginLeft: props.type === statusEnum.alert ? '70px': '20%',
                    fontWeight: '400',
                    fontSize: '30px',
                }}>{props.value}%
                </div>

                <div style={{ 
                    fontFamily: 'Noto sans',
                    fontSize: '22px',
                    color: props.type === statusEnum.alert ? `#D12F2F` : props.type === statusEnum.warning ? `#D1902F` : `#36ADC6` }}>{props.type === statusEnum.alert ? 'Alerta' : props.type === statusEnum.warning ? 'Atenção' : 'Normal'} </div>
            </div>
        </>
    )
}

export default StatusCard