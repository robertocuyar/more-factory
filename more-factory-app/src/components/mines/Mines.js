import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import pickImg from "../../img/pickaxe.png"
import Paper from "@material-ui/core/Paper";
import limeImg from "../../img/limestone.png";
import coalImg from "../../img/coal.png";
import ironImg from "../../img/iron.png"
import copperImg from "../../img/copper.png";
import {useSelector, useDispatch} from "react-redux";
import {firstCoal, firstLimestone, firstCopper, firstIron} from "../../reducers/initialStates";
import {mineLimestone, inventorySlots, mineCoal, mineIron, mineCopper} from "../../actions";
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

const Mines = ({type})=>{

    const classes = useStyles();
    const dispatch = useDispatch();
    const inv = useSelector(state=> state.slotsInv);
    const lime = useSelector(state => state.limeMined);
    const coal = useSelector(state => state.coalMined);
    const iron = useSelector(state => state.ironMined);
    const copper = useSelector( state => state.copperMined);

    let item, itemImg, itemStr, firstItem, actionFirst, actionFull, actionNew, actionZero;

    const itemSetup = itemCheck => {
        if (itemCheck !== null && itemCheck.numContent < 20){
            const newItem = JSON.parse(JSON.stringify(itemCheck));
            newItem.numContent++;
            return newItem;
        }
    }

    switch(type){
        case "Limestone":
            item = lime;
            itemImg = limeImg;
            itemStr = "Limestone";
            firstItem = firstLimestone;
            actionFirst = mineLimestone(firstItem);
            actionFull = mineLimestone(item);
            actionNew = mineLimestone(itemSetup(item));
            actionZero = mineLimestone(null);
            break;

        case "Coal":
            item = coal;
            itemImg = coalImg;
            itemStr = "Coal";
            firstItem = firstCoal;
            actionFirst = mineCoal(firstItem);
            actionFull = mineCoal(item);
            actionNew = mineCoal(itemSetup(item));
            actionZero = mineCoal(null);
            break;

        case "Iron":
            item = iron;
            itemImg = ironImg;
            itemStr = "Iron";
            firstItem = firstIron;
            actionFirst = mineIron(firstItem);
            actionFull = mineIron(item);
            actionNew = mineIron(itemSetup(item));
            actionZero = mineIron(null);
            break;

        case "Copper":
            item = copper;
            itemImg = copperImg;
            itemStr = "Copper";
            firstItem = firstCopper;
            actionFirst = mineCopper(firstItem);
            actionFull = mineCopper(item);
            actionNew = mineCopper(itemSetup(item));
            actionZero = mineCopper(null);
            break;
        default:
            return;
    }

    const containerDisplay = () => {
        return item === null ? null : <MineInventoryContainer content={item.content} numContent={item.numContent} imgUrl={item.imgUrl}/>
    }

    const mine = () =>{
        if(item === null){
            firstItem.numContent = 1;
            return dispatch(actionFirst);
        } else if (item.numContent === 20) {
            return dispatch(actionFull);
        } else {
            return dispatch(actionNew);
        }
    }

    const inventoryMove = () => {
        if (item === null){
            return;
        }
        let newInv = {
            slots: invManager(item, inv)
        }
        dispatch(inventorySlots(newInv));
        if(item.numContent === 0){
           return dispatch(actionZero);
        }
    }

    const header = () => {
        switch(type){
            case "Limestone":
                return <h1>Limestone</h1>;
            case "Coal":
                return <h1>Coal</h1>;
            case "Iron":
                return <h1>Iron</h1>;
            case "Copper":
                return <h1>Copper</h1>;
            default:
                return;
        }
    }

    return (
        <div className={classes.root}>
            <Grid container alignItems={'center'}>
                <Grid item container xs={12} justify={'center'}>
                    <Avatar alt={itemStr} src={itemImg} className={classes.large}/>
                    <Box display={"flex"} alignContent={"center"}>
                        {header()}
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

export default Mines;