const ModalInput = (props) => {
  return (
    <>
      <div style={{ margin: "20px 32px" }}>
        <div style={{ color: "rgba(0, 0, 0, 0.4)", marginBottom: "5px" }}>
          {props.label}
        </div>
        <input
          type={props.type}
          style={{
            padding: "0 10px",
            width: props.width,
            minHeight: "54px",
            borderRadius: 10,
            outline: "none",
            border: 0,
            boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.24)",
          }}
          type={props.pass ? "password" : "text"}
          onChange={props.onChange}
        />
        
      </div>
    </>
  );
};

export default ModalInput;
