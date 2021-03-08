import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Mines from "./mines/Mines";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));

const MiningMenu = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Mines type={"Coal"}/>
                </Grid>
                <Grid item xs={6}>
                    <Mines type = {"Iron"}/>
                </Grid>
                <Grid item xs={6}>
                   <Mines type={"Copper"}/>
                </Grid>
                <Grid item xs={6}>
                    <Mines type={"Limestone"}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default MiningMenu;