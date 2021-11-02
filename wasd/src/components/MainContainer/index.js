import MenubarAdm from "../MenubarAdm";
import { styles } from "./styles"


const MainContainer = (props) => {
    return (
        <>
            <div id="Dashboard" style={styles.container}>
                <MenubarAdm />
                <div style={{ flex: 1, padding: '10px' }}>
                    {props.children}

                </div>
            </div>
        </>
    )
}

export default MainContainer;