import React from 'react';
import {makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import MineInventoryContainer from "../mines/MineInventoryContainer";
import green from "../../img/green_light.png";
import red from "../../img/red_light.png";
import {useSelector, useDispatch} from "react-redux";
import {outInv} from "../../util/outInv";
import {inventorySlots, machineRender} from "../../actions";

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

const Machine = ({machine})=> {
    const classes = useStyles();
    const inv = useSelector(state=> state.slotsInv);
    const mach = useSelector(state=> state.machines);
    const dispatch = useDispatch();

    const inputChange = inputReq => {
        let res = outInv(inputReq, machine.content, inv, mach);
        dispatch(inventorySlots(res.inventory));
        dispatch(machineRender(res.machine));
    }

    const inventoryDisplay = item =>{
        return item.numContent === 0 ? null : <MineInventoryContainer content={item.content} numContent={item.numContent} imgUrl={item.imgUrl}/>
    }

    const ioDisplay = (machArr, type)=>{
        const buttonType = (content, inputReq)=> {
            return type === 'input' ? <Button variant={"outlined"} onClick={()=> inputChange(inputReq)}>Add {content}</Button> : <Button variant={"outlined"}>Take {content}</Button>
        }

        return machArr.map(item =>{
            return(
            <Grid item container justify={'center'} alignItems={'center'} direction={'column'} spacing={1}>
                <Grid item xs={12}>
                    {buttonType(item.content, item)}
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.containerRoot}>
                        <Paper className={"inventory-box"}>
                            {inventoryDisplay(item)}
                        </Paper>
                    </div>
                </Grid>
            </Grid>
            )
        });
    }

    const contentDisplay = ()=>{
        const light = ()=>{
            if (machine.isOn){
                return (
                    <React.Fragment>
                    <Grid item>
                        <Button variant={"outlined"} disabled>Turn on</Button>
                    </Grid>
                <Grid item>
                    <img src={green} alt={"Green Light"}/>
                </Grid>
                    </React.Fragment>
                )
            } else{
                return (
                <React.Fragment>
                    <Grid item>
                        <Button variant={"outlined"}>Turn on</Button>
                    </Grid>
                    <Grid item>
                        <img src={red} alt = "Red Light"/>
                    </Grid>
                </React.Fragment>
                )
            }
        }
        return (
            <React.Fragment>
                <Grid item xs={12}>
                    <img src={machine.imgUrl} alt={machine.content}/>
                </Grid>
                <Grid item xs={12}>
                    <h1>
                        {machine.content}
                    </h1>
                </Grid>
                <Grid item xs={12}>
                    <p>
                        {machine.description}
                    </p>
                </Grid>
                <Grid item container alignItems={"center"} justify={"center"} spacing={2} xs={12}>
                    {light()}
                </Grid>
            </React.Fragment>
        )
    }

    return (
        <div className={classes.root}>
            <Grid container alignItems={'center'}>
                <Grid item container xs={3} justify={'center'} alignItems={'center'} direction={"column"} spacing={2}>
                    {ioDisplay(machine.input, 'input')}
                </Grid>
                <Grid item container xs={6} justify={'center'} alignItems={'center'} direction={'column'} spacing={0}>
                    {contentDisplay()}
                </Grid>
                <Grid item container xs={3} justify={'center'}>
                    {ioDisplay(machine.output, 'output')}
                </Grid>
            </Grid>
        </div>
    )
}

export default Machine;