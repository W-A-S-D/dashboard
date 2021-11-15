import { styles } from './style'

function ContentHolder(props) {
    return (
        <>
            <div style={{
                 position: 'relative',
                 margin: '20px auto',
                 width: '90%',
                 background: '#FFFFFF',
                 /* Destaque - Home - Instável/Estável */
                 boxShadow: '0px 0px 24px rgba(0, 0, 0, 0.22)',
                 borderRadius: '24px',
                 display: 'flex',
                 minHeight: props.minHeight,
                 flexDirection: 'column',
            }}>
                <div style={styles.title}>{props.title}</div>
                <div style={{
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'row',
                    overflowX: 'auto',
                    paddingTop: '5px',
                    overflowY: 'hidden',
                    paddingBottom: '20px',
                }}>
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default ContentHolder