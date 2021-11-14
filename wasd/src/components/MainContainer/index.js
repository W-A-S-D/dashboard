import MenubarAdm from "../MenubarAdm";
import { styles } from "./styles"


const MainContainer = (props) => {
    return (
        <>
            <div id="Dashboard" style={styles.container}>
                <MenubarAdm />
                <div style={{flex: 1, maxWidth: '92.5%',padding: '10px', display: 'flex', flexDirection:'column', alignItems: 'center' }}>
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default MainContainer;