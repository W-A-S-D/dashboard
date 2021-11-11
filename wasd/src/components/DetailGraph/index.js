import { styles } from './style'

const DetailGraph = (props) => {
  return (
    <>
      <div style={{
        width: '99%',
        borderRadius: '5px',
        rgba: '(255, 255, 255, 1)',
        paddingLeft: '24px',
        paddingTop: '8px',
        margin: '15px auto',
        marginBottom: '0'
      }}>
        <div style={styles.alertaSetor}>
          <img src={props.img} style={styles.setorImages} alt="Icone de um computador"></img>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={styles.gameSetorName}>Computador 001 - LoL</div>
            <div style={styles.linediv}>Windows</div>
            <div style={styles.alinhamento}>
              <div style={{
                width: '6px',
                height: '6px',
                borderRadius: '50px',
                marginLeft: '24px',
              }}></div>
              <div style={{
                marginLeft: '10px',
                fontSize: '12px',
                lineHeight: '16px',
              }}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailGraph