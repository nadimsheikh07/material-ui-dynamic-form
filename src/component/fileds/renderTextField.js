import React from 'react';
import TextField from '@material-ui/core/TextField';


class RenderTextField extends React.Component {

    render() {
        const { id, error, label, defaultValue, helperText, variant, onChange } = this.props
        return (
            <React.Fragment>
                <div>
                    <TextField
                        error={error}
                        id={id}
                        label={label}
                        defaultValue={defaultValue}
                        helperText={error ? helperText : ''}
                        variant={variant}
                        onChange={onChange}
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default RenderTextField;