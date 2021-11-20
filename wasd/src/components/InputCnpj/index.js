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
      onAccept={(value) => onChange({ target: { name: props.content, value } })}
      overwrite
    />
  );
});

CnpjMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

function InputForm(props) {

  return (
    <>
      <FormControl
        sx={{
          width: '100vw',
          maxWidth: '100%',
        }}
        variant="filled"
      >
        <InputLabel htmlFor="component-filled">{props.title}</InputLabel>
        <FilledInput
          id="component-filled"
          value={props.value}
          onChange={props.onChange}
          name="cnpjmask"
          required
          inputComponent={CnpjMaskCustom}
        />
      </FormControl>
    </>
  )
}

export default InputForm;