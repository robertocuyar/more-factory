import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import pickImg from "../../img/pickaxe.png"
import Paper from "@material-ui/core/Paper";
import limeImg from "../../img/limestone.png";
import {useSelector, useDispatch} from "react-redux";
import {firstLimestone} from "../../reducers/initialStates";
import {mineLimestone, inventorySlots} from "../../actions";
import MineInventoryContainer from "./MineInventoryContainer";
import invManager from "../../methods/invManager";


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

const LimeStoneMine = ()=>{
    const classes = useStyles();
    const limestone = useSelector(state => state.limeMined);
    const inv = useSelector(state=> state.slotsInv);
    const dispatch = useDispatch();

    const containerDisplay = () => {
        return limestone === null ? null : <MineInventoryContainer content={limestone.content} numContent={limestone.numContent} imgUrl={limestone.imgUrl}/>
    }

    const mine = ()=>{
        if(limestone === null){
            firstLimestone.numContent = 1;
            return dispatch(mineLimestone(firstLimestone));
        } else if (limestone.numContent === 20) {
            return dispatch(mineLimestone(limestone));
        } else {
            let newLime = JSON.parse(JSON.stringify(limestone));
            newLime.numContent++;
            return dispatch(mineLimestone(newLime));
        }
    }
    const inventoryMove = ()=> {
        if (limestone === null){
            return;
        }
        let newInv = {
            slots: invManager(limestone, inv)
        }
        dispatch(inventorySlots(newInv));
        if(limestone.numContent === 0){
            dispatch(mineLimestone(null));
        }
    }

    return (
        <div className={classes.root}>
            <Grid container alignItems={'center'}>
                <Grid item container xs={12} justify={'center'}>
                    <Avatar alt={"Limestone"} src={limeImg} className={classes.large}/>
                    <Box display={"flex"} alignContent={"center"}>
                        <h1>Limestone</h1>
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

export default LimeStoneMine;