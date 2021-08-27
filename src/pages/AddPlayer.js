import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

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

export default function AddPlayer() {
    const history = useHistory();
    const [playerData, setPlayerData] = useState({
        name: "",
        team_id: "",
        skill: "WicketKeeper"
    });
    const data = ['one', 'two', 'three', "four"];

    const handleChange = (e) => {
        const {name, value} = e.target;
        setPlayerData({...playerData, [name]: value})
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("???????????????   :::", playerData);
    }

    console.log(playerData)
    const classes = useStyles();

    return (
        <>
            <div>
                <Card className={classes.root}>
                    <CardContent>
                        <form className={classes.root} noValidate autoComplete="off">
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <TextField
                                    error={playerData.name === ""}
                                    id="outlined-error-helper-text"
                                    label="Name"
                                    helperText={playerData.name === "" ? "Required!" : " "}
                                    variant="outlined"
                                    required
                                    value={playerData.name}
                                    name={'name'}
                                    onChange={(e) => handleChange(e)}
                                />
                                <Select
                                    labelId="demo-simple-select-autowidth-label"
                                    id="demo-simple-select-autowidth"
                                    value={playerData.team_id}
                                    label={'Select Team'}
                                    name={'team_id'}
                                    onChange={(e) => handleChange(e)}
                                    autoWidth
                                >
                                    <MenuItem value={'one'}>One</MenuItem>
                                </Select>
                                <FormLabel component="legend">Role</FormLabel>
                                <RadioGroup style={{flexDirection: 'row'}} aria-label="skill" name="skill"
                                            value={playerData.skill} onChange={(e) => handleChange(e)}>
                                    <FormControlLabel value="Bowler" control={<Radio/>} label="Bowler"/>
                                    <FormControlLabel value="AllRounder" control={<Radio/>} label="AllRounder"/>
                                    <FormControlLabel value="WicketKeeper" control={<Radio/>} label="WicketKeeper"/>
                                    <FormControlLabel value="Batsman" control={<Radio/>} label="Batsman"/>
                                </RadioGroup>
                            </div>
                            <Button variant="contained" onClick={(e) => handleSubmit(e)} color="primary">Login</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
