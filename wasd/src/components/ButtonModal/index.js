import { Button } from "@material-ui/core";

function ButtonModal(props) {
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        style={{
          background: "linear-gradient(90deg, rgba(128, 184, 197, 0.6) 0%, rgba(162, 157, 253, 0.6) 100%)",
          color: "white",
          width: "200px",
          height: "50px",
          marginTop: "30px",
        }}
      >
        {props.content}
      </Button>
    </>
  );
}

export default ButtonModal;