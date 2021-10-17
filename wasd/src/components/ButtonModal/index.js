import { Button } from "@material-ui/core";

function ButtonModal(props) {
    return(
        <>
            <Button variant="contained" color='primary' style={{backgroundColor: 'linear-gradient(90deg, #80B8C5 0%, #A29DFD 100%)',color:'white', width:'200px', height:'50px', marginTop:'30px'}}>{props.content}</Button>
        </>
    );
}

export default ButtonModal;