import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import React from "react";

function SelectEstado(props) {

  return (
    <>
      <FormControl variant="filled" sx={{ width: "100vw", maxWidth: "100%" }}>
        <InputLabel id="demo-simple-select-standard-label">Estado</InputLabel>
        <Select value={props.valor} onChange={props.onChange} label="Age">
          <MenuItem value="AC">AC</MenuItem>
          <MenuItem value="AL">AL</MenuItem>
          <MenuItem value="AM">AM</MenuItem>
          <MenuItem value="AP">AP</MenuItem>
          <MenuItem value="BA">BA</MenuItem>
          <MenuItem value="CE">CE</MenuItem>
          <MenuItem value="DF">DF</MenuItem>
          <MenuItem value="ES">ES</MenuItem>
          <MenuItem value="GO">GO</MenuItem>
          <MenuItem value="MA">MA</MenuItem>
          <MenuItem value="MG">MG</MenuItem>
          <MenuItem value="MS">MS</MenuItem>
          <MenuItem value="MT">MT</MenuItem>
          <MenuItem value="PA">PA</MenuItem>
          <MenuItem value="PB">PB</MenuItem>
          <MenuItem value="PE">PE</MenuItem>
          <MenuItem value="PI">PI</MenuItem>
          <MenuItem value="PR">PR</MenuItem>
          <MenuItem value="RJ">RJ</MenuItem>
          <MenuItem value="RN">RN</MenuItem>
          <MenuItem value="RO">RO</MenuItem>
          <MenuItem value="RR">RR</MenuItem>
          <MenuItem value="RS">RS</MenuItem>
          <MenuItem value="SC">SC</MenuItem>
          <MenuItem value="SE">SE</MenuItem>
          <MenuItem value="SP">SP</MenuItem>
          <MenuItem value="TO">TO</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

export default SelectEstado;
