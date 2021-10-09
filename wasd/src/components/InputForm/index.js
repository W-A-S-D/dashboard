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
          width: 450,
          maxWidth: '100%',
        }}
      >
        <InputLabel htmlFor="component-filled">{props.title}</InputLabel>
        <FilledInput
          id="component-filled"
          value={name}
          onChange={handleChange}
          fullWidth
        />
      </FormControl>
    </>
  )
}

export default InputForm;