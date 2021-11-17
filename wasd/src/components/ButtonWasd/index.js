import { Button } from "@material-ui/core";

function ButtonWasd(props) {
    return(
        <>
            <Button type="submit" variant="contained" color={props.colorButton} style={{color:'white', width:'11vw', height:'5vh', background: `${props.back}`}}>{props.content}</Button>
        </>
    );
}

export default ButtonWasd;