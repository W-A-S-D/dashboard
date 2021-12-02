import React from "react";
import ComputerIcon from "@material-ui/icons/Computer";
import { styles } from "./style";

function Maquina(props) {
  let [over, setOver] = React.useState(false);

  let hoverstyle = {
    border: `0.4px solid rgba(0,0,0,0)`,
  };

  if (over) {
    hoverstyle.border = `0.4px solid ${props.alertas === "Normal"
        ? "#7FB8C4"
        : props.alertas === "Alerta"
          ? "#D12F2F"
          : "#D1902F"
      }`;
  } else {
    hoverstyle.border = `0.4px solid rgba(0,0,0,0)`;
  }

  return (
    <div
      style={{
        ...styles.Maq,
        ...styles.MaqMaq1,
        ...hoverstyle,
        background: `${props.alertas === "Normal"
            ? "linear-gradient(114.7deg, rgba(127, 184, 196, 0.38) 0%, rgba(255, 255, 255, 0.38) 97.69%)"
            : props.alertas === "Alerta"
              ? "linear-gradient(113.96deg, rgba(209, 47, 47, 0.38) 0%, rgba(255, 255, 255, 0.38) 98.96%)"
              : "linear-gradient(114.39deg, rgba(209, 144, 47, 0.38) 1.37%, rgba(255, 255, 255, 0.38) 98.13%)"
          }`,
      }}
      onMouseOver={() => setOver(true)}
      onMouseOut={() => setOver(false)}
      onClick={props.onClick}
    >
      <ComputerIcon
        style={{
          color: `${props.alertas === "Normal"
              ? "#7FB8C4"
              : props.alertas === "Alerta"
                ? "#D12F2F"
                : "#D1902F"
            } `,
          fontSize: "60",
        }}
      />

      <h5 style={styles.MaqH5}>
        <b>{props.computador}</b>
      </h5>
      <div style={styles.alerta}>
        <svg
          width="8"
          height="9"
          viewBox="0 0 8 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ ...styles.Icone }}
        >
          <ellipse
            cx="4.07177"
            cy="4.60689"
            rx="3.85106"
            ry="3.74483"
            fill={
              props.alertas === "Normal"
                ? "#7FB8C4"
                : props.alertas === "Alerta"
                  ? "#D12F2F"
                  : "#D1902F"
            }
          />
        </svg>
        <p style={styles.MaqP}>{props.alertas}</p>
      </div>
    </div>
  );
}

export default Maquina;
