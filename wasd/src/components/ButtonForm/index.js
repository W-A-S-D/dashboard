import { Button } from "@material-ui/core";

function ButtonForm(props) {
    return(
        <>
            <Button variant="contained" color='primary' style={{color:'white', width:'11vw', height:'5vh'}}>{props.content}</Button>
        </>
    );
}

export default ButtonForm;