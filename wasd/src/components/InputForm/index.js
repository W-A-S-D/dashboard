import { FilledInput, FormControl, InputLabel } from "@material-ui/core";
import React from "react";

function InputForm(props) {
  

  return (
    <>
      <FormControl
        variant="filled"
        sx={{
          width: '100vw',
          maxWidth: '100%',
        }}
      >
        <InputLabel htmlFor="component-filled">{props.title}</InputLabel>
        <FilledInput
          id="component-filled"
          value={props.value}
          type={props.type}
          onChange={props.onChange}
          fullWidth
          required
        />
      </FormControl>
    </>
  )
}

export default InputForm;