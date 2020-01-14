import React from 'react';
import TextField from '@material-ui/core/TextField';

const inputNumberProps = {
    step: 300,
};

class RenderTextField extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props)
    }

    render() {
        const { id, error, name, label, type, defaultValue, helperText, variant, onChange } = this.props
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
                        inputProps={inputNumberProps}
                        fullWidth={true}
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default RenderTextField;