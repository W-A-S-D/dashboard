import React from "react";
import { AuthContext } from "../../contexts/auth";
import MenubarAdm from "../MenubarAdm";
import MenuBarFunc from "../MenuBarFunc";
import { styles } from "./styles"


const MainContainer = (props) => {
    const { user } = React.useContext(AuthContext);

    return (
        <>
            <div id="Dashboard" style={styles.container}>
                { user.nivelAcesso == 1 ? <MenubarAdm /> : <MenuBarFunc /> }
                <div style={{flex: 1, maxWidth: '92.5%',padding: '10px', display: 'flex', flexDirection:'column', alignItems: 'center' }}>
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default MainContainer;