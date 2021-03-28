import React, { useState } from 'react';
import { TextField, FormControl } from '@material-ui/core';
import Button from '@material-ui/core/Button';

type Props = {
    handleCommand: (expression:string) => void
}

const Command = React.memo(function Command(props: Props): React.ReactElement {
    const { handleCommand } = props;
    const [expression, setExpression] = useState<string>('');

    const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleCommand(expression);
        setExpression('');
    };

    const onChangeField = (func: React.Dispatch<React.SetStateAction<string>>) => (input: React.ChangeEvent<HTMLInputElement>): void => func(input.currentTarget.value);

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <FormControl fullWidth={true}>
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