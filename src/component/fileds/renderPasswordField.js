import React from 'react';

import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const styles = theme => ({
    fullWidth: {
        width: '100%',
    },
});


class RenderPasswordField extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showPassword: false
        }
    }

    handleClickShowPassword = () => {
        const { showPassword } = this.state
        this.setState({ showPassword: !showPassword })
    };

    render() {
        const { classes } = this.props
        const { id, error, name, label, defaultValue, isRequired, showHelperText, helperText, onChange } = this.props
        const { showPassword } = this.state
        return (
            <React.Fragment>
                <div>
                    <FormControl error={error} className={classes.fullWidth}>
                        <InputLabel htmlFor="standard-adornment-password">{label}</InputLabel>
                        <Input
                            id={id}
                            name={name}
                            type={showPassword ? 'text' : 'password'}
                            defaultValue={defaultValue}
                            onChange={onChange}
                            fullWidth={true}
                            required={isRequired}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={this.handleClickShowPassword}
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        {showHelperText && <FormHelperText id="standard-password-helper-text">{helperText}</FormHelperText>}
                    </FormControl>
                </div>
            </React.Fragment>
        );
    }
}

RenderPasswordField = withStyles(styles)(RenderPasswordField);
export default RenderPasswordField;