import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function Register() {
    const history = useHistory();
    const [userData, setUserData] = useState({
        email: "",
        password: "",
        role: "team"
    });

    console.log(">>>>>>>>>>>>   :::", userData);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserData({...userData, [name]: value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (userData.email === "" || userData.password === "") {
            alert("Please fill input field");
            return null;
        }
        console.log("ffffffffffffffffff ::::", userData);
        setUserData({
            email: "",
            password: "",
            role: "team"
        });
        history.push("/login");
    }
    const classes = useStyles();

    return (
        <>
            <div>
                <Card className={classes.root}>
                    <CardContent>
                        <form className={classes.root} noValidate autoComplete="off">
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <TextField
                                    error={userData.email === ""}
                                    id="outlined-error-helper-text"
                                    label="Email"
                                    helperText={userData.email === "" ? "Required!" : " "}
                                    variant="outlined"
                                    required
                                    value={userData.email}
                                    name={'email'}
                                    onChange={(e) => handleChange(e)}
                                />
                                <TextField
                                    error={userData.password === ""}
                                    id="outlined-error-helper-text"
                                    label="Password"
                                    helperText={userData.password === "" ? "Required!" : " "}
                                    variant="outlined"
                                    required
                                    value={userData.password}
                                    name={'password'}
                                    onChange={(e) => handleChange(e)}
                                />
                                <FormLabel component="legend">Role</FormLabel>
                                <RadioGroup style={{flexDirection: 'row'}} aria-label="role" name="role"
                                            value={userData.role} onChange={handleChange}>
                                    <FormControlLabel value="team" control={<Radio/>} label="Team"/>
                                    <FormControlLabel value="player" control={<Radio/>} label="Player"/>
                                    <FormControlLabel value="admin" disabled control={<Radio/>} label="Admin"/>
                                </RadioGroup>
                            </div>
                            <Button variant="contained" onClick={(e) => handleSubmit(e)}
                                    color="primary">Register</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
