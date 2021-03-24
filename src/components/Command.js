import React, { useState } from 'react';
import { FormControl, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const Command = React.memo(function Command(props) {
    const { handleCommand } = props;
    const [expression, setExpression] = useState('');

    const onFormSubmit = (event) => {
        event.preventDefault();
        handleCommand(expression);
        setExpression('');
    };

    const onChangeField = (func) => (input) => func(input.currentTarget.value);

    return (
        <form className="form" onSubmit={onFormSubmit} >
            <FormControl fullWidth={true} >
                <TextField
                    label="Command"
                    value={expression}
                    margin="normal"
                    fullWidth
                    onChange={onChangeField(setExpression)}
                    name="command"
                    required
                />
            </FormControl>
            <FormControl fullWidth={true} margin="normal">
                <Button variant="contained" color="primary" type="submit">Submit</Button>
            </FormControl>
        </form>
    );
});

export default Command;