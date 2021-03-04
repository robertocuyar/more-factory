import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CoalMine from "./mines/CoalMine";
import IronMine from "./mines/IronMine";
import CopperMine from "./mines/CopperMine";
import LimeStoneMine from "./mines/LimeStoneMine";

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