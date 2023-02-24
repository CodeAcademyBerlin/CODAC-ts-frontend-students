/* eslint-disable prettier/prettier */
import { Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';

type Props = {
    type: string;
};

export default function Password({ type }: Props) {
    const [password, setPassword] = useState<string>('');
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const oldPassword = '';
    if (type === "reset") {

    }
    const regex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    const changeHandler = (e: any) => {
        if (e.target.id === 'password') {
            setPassword(e.target.value);
        } else {
            setPasswordConfirmation(e.target.value);
        };
    };

    const keyDown = (e: any) => {
        if (e.key === "Enter") {
            submit();
        };
    };

    const submit = () => {
        setError(null);
        if (password !== passwordConfirmation) {
            setError("Passwords do not match.");
        } if (!password.match(regex)) {
            setError("The password should be at least eight characters and contain 1 Uppercase, 1 Lowercase, 1 Digit and 1 Symbol.");
        } if (password === oldPassword) {
            setError("The new password cannot be the same sa the old password.");
        } else if (password.match(regex) && password === passwordConfirmation) {
            console.log('Go', password);
            // go there
        };
    };

    return (
        <div style={{ textAlign: 'center' }}>
            {type === 'set' ? (
                <Typography variant="h3">Welcome to the CODAC!</Typography>
            ) : (
                <Typography variant="h3">It seems you forgot your password</Typography>
            )}
            <br />
            {type === 'set' ? (
                <Typography variant="body1">Choose your first password:</Typography>
            ) : (
                <Typography variant="body1">Choose a new one:</Typography>
            )}
            <br />
            <Typography variant="body1">Password</Typography>
            <TextField
                type="text"
                id='password'
                autoFocus
                value={password}
                onChange={changeHandler}
            />
            <br /><br />
            <Typography variant="body1">Password Confirmation</Typography>
            <TextField
                type="text"
                id='passwordConfirmation'
                value={passwordConfirmation}
                onChange={changeHandler}
                onKeyDown={keyDown}
            />
            <br /><br />
            <Button onClick={submit}>Submit</Button>
            {error && (<Typography variant="body2" style={{ color: 'red' }}>{error}</Typography>)}
        </div>
    );
}
