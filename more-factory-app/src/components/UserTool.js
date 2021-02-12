import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import UserBag from "./UserBag";
import UserStats from "./UserStats";

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
    const [bag, setBag] = useState("closed")
    const classes = useStyles();

    const displayContent = bag =>{
        if (bag === "closed"){
            return (
                <React.Fragment>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <UserBag/>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <UserStats/>
                        </Paper>
                    </Grid>
                </React.Fragment>
            )
        }
    }

    return(
        <div className={classes.root}>
            <Grid container spacing={3}>
                {displayContent(bag)}
            </Grid>

        </div>
    )
}

export default UserTool;