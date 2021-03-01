import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import coalImg from "../img/coal.png";
import pickImg from "../img/pickaxe.png"
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    large: {
        width: theme.spacing(8),
        height: theme.spacing(8),
        margin: theme.spacing(2)
    },
    containerRoot: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(2),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    }
}));

const CoalMine = ()=>{
    const classes = useStyles();

    const containerDisplay = coal => {
        return (
            <div className={classes.containerRoot}>
                <Paper className={"inventory-box"}>
                </Paper>
            </div>
        )
    }

    return (
        <div className={classes.root}>
            <Grid container alignItems={'center'}>
                <Grid item container xs={12} justify={'center'}>
                   <Avatar alt={"Coal"} src={coalImg} className={classes.large}/>
                   <Box display={"flex"} alignContent={"center"}>
                    <h1>Coal</h1>
                   </Box>
                </Grid>
                <Grid item container xs={12} justify={'center'}>
                    <Button variant={"outlined"}>
                        <span className={"button-text"}>Mine</span>
                        <img className={"button-image"} src={pickImg} alt="Pickaxe"/>
                    </Button>
                </Grid>
                <Grid item container xs={12} justify={'center'}>
                    {containerDisplay()}
                </Grid>
            </Grid>
        </div>
    )
}

export default CoalMine;