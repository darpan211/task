import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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

export default function Login() {
    const history = useHistory();
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    console.log(">>>>>>>>>>>>   :::", userData);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserData({...userData, [name]: value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("ffffffffffffffffff ::::", userData);
        userData.role = "player";
        localStorage.setItem("user", JSON.stringify(userData));
        setUserData({
            email: " ",
            password: ' '
        });
        history.push("/");
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
                            </div>
                            <Button variant="contained" onClick={(e) => handleSubmit(e)} color="primary">Login</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
