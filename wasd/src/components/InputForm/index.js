import { FilledInput, FormControl, InputLabel } from "@material-ui/core";
import React from "react";

function InputForm(props) {
  const [name, setName] = React.useState();

  const handleChange = (event) => {
    setName(event.target.value);
  };

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
          value={name}
          type={props.type}
          onChange={handleChange}
          fullWidth
          required
        />
      </FormControl>
    </>
  )
}

export default InputForm;