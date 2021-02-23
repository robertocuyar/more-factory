import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import coalImg from "../img/coal2.png";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    large: {
        width: theme.spacing(8),
        height: theme.spacing(8),
    }
}));

const CoalMine = ()=>{
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container alignItems={'center'}>
                <Grid item container xs={12} justify={'center'}>
                   <Avatar alt={"coal"} src={coalImg} className={classes.large}/>
                    <Typography>Coal</Typography>
                </Grid>
                <Grid item container xs={12} justify={'center'}>
                    <Typography>
                        Button
                    </Typography>
                </Grid>
                <Grid item container xs={12} justify={'center'}>
                    <Typography>
                        Container
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default CoalMine;