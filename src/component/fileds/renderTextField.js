import React from 'react';
import TextField from '@material-ui/core/TextField';


class RenderTextField extends React.Component {

        
    handleChange = (event) => {
        this.props.onChange(event.target.value)
    }

    render() {
        const { id, error, label, defaultValue, helperText, variant } = this.props
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
                        onChange={this.handleChange}
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default RenderTextField;