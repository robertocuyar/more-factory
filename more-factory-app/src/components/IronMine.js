import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import pickImg from "../img/pickaxe.png"
import Paper from "@material-ui/core/Paper";
import ironImg from "../img/iron.png";
import {useSelector, useDispatch} from "react-redux";
import MineInventoryContainer from "./MineInventoryContainer";
import {mineIron} from "../actions";
import {firstIron} from "../reducers/initialStates";

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

const IronMine = ()=>{
    const classes = useStyles();
    const iron = useSelector(state => state.ironMined);
    const dispatch = useDispatch();

    const containerDisplay = ()=> {
        return iron === null? null : <MineInventoryContainer content={iron.content} numContent={iron.numContent} imgUrl={iron.imgUrl}/>
    }

    const mine = ()=>{
        if(iron === null){
            return dispatch(mineIron(firstIron));
        } else {
            let newIron = JSON.parse(JSON.stringify(iron));
            newIron.numContent++;
            return dispatch(mineIron(newIron));
        }
    }

    return (
        <div className={classes.root}>
            <Grid container alignItems={'center'}>
                <Grid item container xs={12} justify={'center'}>
                    <Avatar alt={"Iron"} src={ironImg} className={classes.large}/>
                    <Box display={"flex"} alignContent={"center"}>
                        <h1>Iron Ore</h1>
                    </Box>
                </Grid>
                <Grid item container xs={12} justify={'center'}>
                    <Button variant={"outlined"} onClick={()=> mine()}>
                        <span className={"button-text"}>Mine</span>
                        <img className={"button-image"} src={pickImg} alt="Pickaxe"/>
                    </Button>
                </Grid>
                <Grid item container xs={12} justify={'center'}>
                    <div className={classes.containerRoot}>
                        <Paper className={"inventory-box"}>
                            {containerDisplay()}
                        </Paper>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default IronMine;