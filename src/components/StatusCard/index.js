import React from "react";
import { Chart } from "react-google-charts";

const StatusCard = (props) => {
  let [over, setOver] = React.useState(false);

  let hoverstyle = {
    border: "",
  };

  if (over) {
    hoverstyle.border = `1px solid ${props.hoverColor}`;
  } else {
    hoverstyle.border = "";
  }

  const statusEnum = {
    alert: "alert",
    warning: "warning",
    normal: "normal",
  };

  return (
    <>
      <div
        style={{
          ...hoverstyle,
          position: "relative",
          marginRight: "15px",
          marginLeft: "5px",
          marginTop: "4vh",
          overflowY: 'hidden',
          width: "50%",
          background:
            props.type === statusEnum.alert
              ? "linear-gradient(113.96deg, rgba(209, 47, 47, 0.38) 0%, rgba(255, 255, 255, 0.38) 98.96%)"
              : props.type === statusEnum.warning
              ? "linear-gradient(114.39deg, rgba(209, 144, 47, 0.38) 1.37%, rgba(255, 255, 255, 0.38) 98.13%)"
              : "linear-gradient(114.7deg, rgba(127, 184, 196, 0.38) 0%, rgba(255, 255, 255, 0.38) 97.69%)",
          boxShadow: "2px 2px 15px rgba(0, 0, 0, 0.1)",
          borderRadius: "14px",
          display: "flex",
          alignItems: 'center',
        }}
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
      >
        <div style={{ width: "50%" }}>
          <Chart
            width={"10vw"}
            height={"19vh"}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ["Task", "Hours per Day"],
              ["", props.value],
              ["", 100 - props.value],
            ]}
            options={{
              title: "",
              legend: "none",
              pieSliceText: "none",
              pieStartAngle: 90,
              tooltip: { trigger: "none" },
              backgroundColor: "none",
              pieHole: 0.8,
              marginTop: 0,
              slices: {
                0: {
                  color:
                    props.type === statusEnum.alert
                      ? `#D12F2F`
                      : props.type === statusEnum.warning
                      ? `#D1902F`
                      : `#36ADC6`,
                },
                1: {
                  color:
                    props.type === statusEnum.alert
                      ? `#F9A4A4`
                      : props.type === statusEnum.warning
                      ? `#E4C494`
                      : `#87C8D6`,
                },
              },
            }}
            rootProps={{ "data-testid": "3" }}
          />
        </div>

        <div style={{ position: "absolute", marginLeft: "22%"}}>
          <div
            style={{
              color:
                props.type === statusEnum.alert
                  ? `#D12F2F`
                  : props.type === statusEnum.warning
                  ? `#D1902F`
                  : `#36ADC6`,
              fontWeight: "400",
              fontSize: "2.4ch",
            }}
          >
            {parseInt(props.value)}%
          </div>
        </div>

        <div
          style={{
            fontFamily: "Noto sans",
            fontSize: "20px",
            marginLeft: "5%",
            color:
              props.type === statusEnum.alert
                ? `#D12F2F`
                : props.type === statusEnum.warning
                ? `#D1902F`
                : `#36ADC6`,
          }}
        >
          {props.type === statusEnum.alert
            ? "Alerta"
            : props.type === statusEnum.warning
            ? "Atenção"
            : "Normal"}{" "}
        </div>
      </div>
    </>
  );
};

export default StatusCard;
