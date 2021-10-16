import { styles, images } from './style'

const MiniCardSetor = (props) => {
  return (
    <>
      <div style={{
        height: '64px',
        width: '332px',
        left: '1497px',
        top: '484px',
        borderRadius: '5px',
        rgba: '(255, 255, 255, 1)',
        borderTop: '1px solid rgba(211, 211, 211, 1)',
        borderRight: '1px solid rgba(211, 211, 211, 1)',
        borderBottom: '1px solid rgba(211, 211, 211, 1)',
        borderLeft: `6px solid ${props.borderColor == undefined ? 'rgba(209, 47, 47, 1)':props.borderColor}`,
        boxShadow: '4px 4px 8px 0px rgba(0, 0, 0, 0,24)',
        paddingLeft: '24px',
        paddingTop: '8px',
        paddingBottom: '10px'
      }}>
        <div style={styles.alertaSetor}>
          <img src={images.imageMine} style={styles.setorImages}></img>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={styles.gameSetorName}>Minecraft</div>
            <div style={styles.alinhamento}>
              <div style={styles.gameSetorIcon}></div>
              <div style={styles.gameSetorTittle}>Alerta</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MiniCardSetor