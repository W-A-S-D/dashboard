const ProgressBar = (props) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          overflowX: "hidden",
        }}
      >
        <div
          style={{
            fontFamily: "Noto Sans",
            fontWeight: "400",
            fontSize: "20px",
            marginRight: "5%",
            overflowX: "hidden",
            marginTop: "5%",
          }}
        >
          {props.label}
        </div>

        <div
          style={{
            position: "relative",
            height: "4.8vh",
            width: "70%",
            boxShadow: "inset 0px 0px 18px rgba(0, 0, 0, 0.25)",
            borderRadius: "22px 22px 22px 22px",
            marginTop: "45px",
            overflowX: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              height: "4.8vh",
              background: "linear-gradient(90deg, #A29BFE 0%, #7FB8C4 100%)",
              boxShadow: "inset 0px 0px 18px rgba(0, 0, 0, 0.25)",
              borderRadius: "22px 0px 0px 22px",
              width: props.barValue,
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
