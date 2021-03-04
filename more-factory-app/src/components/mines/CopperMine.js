import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import pickImg from "../../img/pickaxe.png"
import Paper from "@material-ui/core/Paper";
import copperImg from "../../img/copper.png";
import {useSelector, useDispatch} from "react-redux";
import MineInventoryContainer from "./MineInventoryContainer";
import {mineCopper} from "../../actions";
import {firstCopper} from "../../reducers/initialStates";

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

const CopperMine = ()=>{
    const classes = useStyles();
    const copper = useSelector(state => state.copperMined);
    const dispatch = useDispatch();

    const containerDisplay = () => {
        return copper === null ? null : <MineInventoryContainer content={copper.content} numContent={copper.numContent} imgUrl={copper.imgUrl}/>
    }

    const mine = ()=> {
        if (copper === null) {
            return dispatch(mineCopper(firstCopper));
        } else if (copper.numContent === 20){
            return dispatch(mineCopper(copper));
            } else {
            let newCopper = JSON.parse(JSON.stringify(copper));
            newCopper.numContent++;
            return dispatch(mineCopper(newCopper));
        }
    }

    return (
        <div className={classes.root}>
            <Grid container alignItems={'center'}>
                <Grid item container xs={12} justify={'center'}>
                    <Avatar alt={"Copper"} src={copperImg} className={classes.large}/>
                    <Box display={"flex"} alignContent={"center"}>
                        <h1>Copper Ore</h1>
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

export default CopperMine;