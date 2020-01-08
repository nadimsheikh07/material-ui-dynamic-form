import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Box from '@material-ui/core/Box';


export default function DynamicFormFooter(props) {
    console.log('DynamicFormFooter', props)
    return (
        <React.Fragment>
            <Box mt="5rem">
                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                    <Button>Save</Button>
                    <Button>Clear</Button>
                    <Button>Cancel</Button>
                </ButtonGroup>
            </Box>
        </React.Fragment>
    );
}