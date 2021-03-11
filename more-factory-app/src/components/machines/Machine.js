import React from 'react';
import {makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import MineInventoryContainer from "../mines/MineInventoryContainer";

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

    const inventoryDisplay = item =>{
        return item.numContent === 0 ? null : <MineInventoryContainer content={item.content} numContent={item.numContent} imgUrl={item.imgUrl}/>
    }

    const inputDisplay = ()=>{
        return machine.input.map(item =>{
            return(
            <Grid item container justify={'center'} alignItems={'center'} direction={'column'} spacing={1}>
                <Grid item xs={12}>
                    <Button variant={"outlined"}>Add {item.content}</Button>
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

    return (
        <div className={classes.root}>
            <Grid container alignItems={'center'}>
                <Grid item container xs={3} justify={'center'} alignItems={'center'} direction={"column"} spacing={2}>
                    {inputDisplay()}
                </Grid>
                <Grid item container xs={6} justify={'center'}>
                    Content
                </Grid>
                <Grid item container xs={3} justify={'center'}>
                    Output
                </Grid>
            </Grid>
        </div>
    )
}

export default Machine;