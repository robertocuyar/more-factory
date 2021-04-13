import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Mines from "./mines/Mines";
import {defaultMines} from "../reducers/initialStates";
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));

const MiningMenu = () => {
    const classes = useStyles();
    const tier = useSelector(state => state.userStats);

    const mineDisplay = () => {
        return defaultMines.mines.map(mine => {
            if (tier.tier >= mine.tier) {
                return (
                    <Grid key={mine.content} item xs={6}>
                        <Mines type={mine.content}/>
                    </Grid>
                )
            } else {
                return null;
            }
        });

    }
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {mineDisplay()}
            </Grid>
        </div>
    )
}

export default MiningMenu;