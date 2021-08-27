import React, {useEffect, useState} from "react";
import {Switch, Route, NavLink, useHistory} from 'react-router-dom';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import clsx from "clsx";
import {Typography, Button} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ListItemText from "@material-ui/core/ListItemText";
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ViewTeam from "./pages/ViewTeam";
import ViewPlayers from './pages/ViewPlayers';
import AddPlayer from "./pages/AddPlayer";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

function App() {
    const classes = useStyles();
    const history = useHistory();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const userType = JSON.parse(localStorage.getItem('user'));
    console.log(userType)
    // let userType;
    // useEffect(() => {
    //     userType = JSON.parse(localStorage.getItem('user'));
    // }, [])
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const logout = () => {
        localStorage.removeItem('user');
        history.push("/login");
    }

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar style={{justifyContent: 'space-between'}}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Circket Management System
                    </Typography>
                    <div>
                        {
                            userType && userType.role ?
                                (<Button
                                    color="inherit"
                                    endIcon={<PowerSettingsNewIcon/>}
                                    onClick={logout}
                                >
                                    Logout
                                </Button>) :
                                <>
                                    <Button endIcon={<PersonAddIcon/>} onClick={() => history.push('/register')}
                                            color="inherit">Register</Button>
                                    <Button endIcon={<ExitToAppIcon/>} onClick={() => history.push('/login')}
                                            color="inherit">Login</Button>
                                </>
                        }
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>
                </div>
                <Divider/>
                {
                    userType && userType.role === 'team' ?
                        <List>
                            {[{name: "add team", link: "/add-team"}, {
                                name: "view team",
                                link: "/view-teams"
                            }, {name: "view players", link: "/view-players"}].map((ele, index) => (
                                <NavLink to={ele.link}>
                                    <ListItem button key={index}>
                                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                                        <ListItemText primary={ele.name}/>
                                    </ListItem>
                                </NavLink>
                            ))}
                        </List> : <List>
                            {[{name: "add player", link: "/add-player"}, {
                                name: "view players",
                                link: "/view-players"
                            }].map((ele, index) => (
                                <NavLink to={ele.link}>
                                    <ListItem button key={index}>
                                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                                        <ListItemText primary={ele.name}/>
                                    </ListItem>
                                </NavLink>
                            ))}
                        </List>
                }
                <Divider/>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader}/>
                <div style={{display: 'flex', justifyContent: "center"}}>
                    <Switch>
                        <Route exact path={'/register'}>
                            <Register/>
                        </Route>
                        <Route exact path={'/login'}>
                            <Login/>
                        </Route>
                        <Route exact path={'/view-teams'}>
                            <ViewTeam/>
                        </Route>
                        <Route exact path={'/view-players'}>
                            <ViewPlayers/>
                        </Route>
                        <Route exact path={'/add-player'}>
                            <AddPlayer/>
                        </Route>
                        <Route exact path={'/'}>
                            <Home/>
                        </Route>
                    </Switch>
                </div>
            </main>
        </div>
    );
}

export default App;
