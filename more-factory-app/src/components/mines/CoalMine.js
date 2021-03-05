import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import coalImg from "../../img/coal.png";
import pickImg from "../../img/pickaxe.png"
import Paper from "@material-ui/core/Paper";
import {useSelector, useDispatch} from "react-redux";
import {firstCoal} from "../../reducers/initialStates";
import {mineCoal, inventorySlots} from "../../actions";
import invManager from "../../methods/invManager";
import MineInventoryContainer from "./MineInventoryContainer";

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
    const coal = useSelector(state => state.coalMined);
    const inv = useSelector(state => state.slotsInv);
    const dispatch = useDispatch();

    const containerDisplay = () => {
        return coal === null ? null : <MineInventoryContainer content={coal.content} numContent={coal.numContent} imgUrl={coal.imgUrl}/>
    }

    const mine = ()=>{
        if (coal === null){
            return dispatch(mineCoal(firstCoal));
        } else if(coal.numContent === 20){
            return dispatch(mineCoal(coal));
        } else {
            let newCoal = JSON.parse(JSON.stringify(coal));
            newCoal.numContent++;
            return dispatch(mineCoal(newCoal));
        }
    }

    const inventoryMove = ()=> {
        if (coal === null){
            return;
        }
        let newInv = {
            slots: invManager(coal, inv)
        }
        dispatch(inventorySlots(newInv));
        if(coal.numContent === 0){
            dispatch(mineCoal(null));
        }
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
                    <Button variant={"outlined"} onClick={()=> mine()}>
                        <span className={"button-text"}>Mine</span>
                        <img className={"button-image"} src={pickImg} alt="Pickaxe"/>
                    </Button>
                </Grid>
                <Grid item container xs={12} justify={'center'}>
                    <div className={classes.containerRoot} onDoubleClick={()=> inventoryMove()}>
                        <Paper className={"inventory-box"}>
                            {containerDisplay()}
                        </Paper>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default CoalMine;