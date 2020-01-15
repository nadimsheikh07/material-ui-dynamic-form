import React from 'react';
import TextField from '@material-ui/core/TextField';

class RenderTextField extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { id, error, name, label, type, multiline, defaultValue, isRequired, helperText, variant, onChange, inputProps } = this.props
        return (
            <React.Fragment>
                <div>
                    <TextField
                        name={name}
                        error={error}
                        id={id}
                        label={label}
                        defaultValue={defaultValue}
                        helperText={error ? helperText : ''}
                        variant={variant}
                        onChange={onChange}
                        type={type}
                        inputProps={inputProps}
                        required={isRequired}
                        fullWidth={true}
                        multiline={multiline}
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default RenderTextField;