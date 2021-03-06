import { FilledInput, FormControl, InputLabel } from "@material-ui/core";
import React from "react";
import { IMaskInput } from "react-imask";
import PropTypes from 'prop-types';

const TelefoneMaskCustom = React.forwardRef(
  function TelefoneMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="(00)00000-0000"
        inputRef={ref}
        onAccept={(value) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  });

TelefoneMaskCustom.propTypes = {
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
          name="telefoneMask"
          inputComponent={TelefoneMaskCustom}
          required
        />
      </FormControl>
    </>
  )
}

export default InputForm;