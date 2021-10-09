import { FilledInput, FormControl, InputLabel } from "@material-ui/core";
import React from "react";
import { IMaskInput } from "react-imask";
import PropTypes from 'prop-types';

const CnpjMaskCustom = React.forwardRef(function CnpjMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="00.000.000/0000-00"
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

CnpjMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

function InputForm(props) {
  const [name, setName] = React.useState("");
  const [values, setValues] = React.useState();

  const handleChange = (event) => {
    setName(event.target.value);
    console.log(event)
    setValues({ 
      ...values,
      [event.target.name]: event.target.name,
    });
  };

  return (
    <>
      <FormControl
        sx={{
          width: 450,
          maxWidth: '100%',
        }}
        variant="filled"
      >
        <InputLabel htmlFor="component-filled">{props.title}</InputLabel>
        <FilledInput
          id="component-filled"
          value={name}
          onChange={handleChange}
          name="cnpjmask"
          inputComponent={CnpjMaskCustom}
        />
      </FormControl>
    </>
  )
}

export default InputForm;