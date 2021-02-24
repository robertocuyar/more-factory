import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import coalImg from "../img/coal2.png";
import pickImg from "../img/pickaxe.png"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    large: {
        width: theme.spacing(8),
        height: theme.spacing(8),
        margin: theme.spacing(2)
    }
}));

const CoalMine = ()=>{
    const classes = useStyles();

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
                    <Typography>
                        Container
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default CoalMine;