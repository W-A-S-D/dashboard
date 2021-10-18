import { styles, images } from './style'

const MiniCardSetor = (props) => {
  const statusEnum = {
    Alert: 'alert',
    Warning: 'warning',
    Normal: 'normal'
  }
  return (
    <>
      <div style={{
        height: '64px',
        width: '100%',
        borderRadius: '5px',
        rgba: '(255, 255, 255, 1)',
        borderTop: '1px solid rgba(211, 211, 211, 1)',
        borderRight: '1px solid rgba(211, 211, 211, 1)',
        borderBottom: '1px solid rgba(211, 211, 211, 1)',
        borderLeft: `6px solid ${props.status == statusEnum.Alert ? '#D12F2F' : props.status == statusEnum.Warning ? '#D1902F' : '#36ADC6'}`,
        boxShadow: '4px 4px 8px 0px rgba(0, 0, 0, 0,24)',
        paddingLeft: '24px',
        paddingTop: '8px',
        paddingBottom: '10px'
      }}>
        <div style={styles.alertaSetor}>
          <img src={props.img} style={styles.setorImages}></img>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={styles.gameSetorName}>`{props.label}</div>
            <div style={styles.alinhamento}>
              <div style={{
                width: '6px',
                height: '6px',
                borderRadius: '50px',
                marginLeft: '24px',
                backgroundColor: props.status == statusEnum.Alert ? '#D12F2F' : props.status == statusEnum.Warning ? '#D1902F' : '#36ADC6'
              }}></div>
              <div style={{
                marginLeft: '10px',
                fontSize: '12px',
                lineHeight: '16px',
                color: props.status == statusEnum.Alert ? '#D12F2F' : props.status == statusEnum.Warning ? '#D1902F' : '#36ADC6'
              }}>{props.status == statusEnum.Alert ? 'Alerta' : props.status == statusEnum.Warning ? 'Atenção' : 'Normal'}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MiniCardSetor