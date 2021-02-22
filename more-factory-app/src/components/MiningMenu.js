import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CoalMine from "./CoalMine";
import IronMine from "./IronMine";
import CopperMine from "./CopperMine";
import LimeStoneMine from "./LimeStoneMine";

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
                    <CoalMine/>
                </Grid>
                <Grid item xs={6}>
                    <IronMine/>
                </Grid>
                <Grid item xs={6}>
                   <CopperMine/>
                </Grid>
                <Grid item xs={6}>
                    <LimeStoneMine/>
                </Grid>
            </Grid>
        </div>
    )
}

export default MiningMenu;