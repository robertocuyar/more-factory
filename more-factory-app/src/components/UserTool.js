import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const UserTool = ()=> {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid xs={6}>
                    <Paper className={classes.paper}>
                        UserTool
                    </Paper>
                </Grid>
            </Grid>

        </div>
    )
}

export default UserTool;