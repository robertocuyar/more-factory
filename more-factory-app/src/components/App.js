import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import NavBar from "./NavBar";
import UserTool from "./UserTool";
import Field from "./Field";
import TabOptions from "./TabOptions";
import UserOptions from "./UserOptions";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const App = ()=> {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <NavBar />
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                    <UserTool/>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Field/>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                        <TabOptions/>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <UserOptions/>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Footer/>
                </Grid>
            </Grid>
        </div>
    )
}

export default App;