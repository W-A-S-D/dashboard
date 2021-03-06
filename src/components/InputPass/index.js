import { FilledInput, FormControl, IconButton, InputAdornment, InputLabel } from "@material-ui/core";
import React from "react";
import Visibility from '@material-ui/icons//Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

function InputPass(props) {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        showPassword: false,
    });


    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    return (
        <>
            <FormControl
                sx={{
                    width: '100vw',
                    maxWidth: '100%',
                }}
                variant="filled">

                <InputLabel htmlFor="filled-adornment-password">{props.title}</InputLabel>
                <FilledInput
                    id="filled-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={props.password}
                    onChange={props.onChange}
                    fullWidth
                    required
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                            >
                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        </>
    )
}

export default InputPass;