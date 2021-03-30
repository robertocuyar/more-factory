import React from 'react';
import {useSelector} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Machine from "./machines/Machine";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));

const MachinesMenu = ()=>{
    const classes = useStyles();
    const machineList = useSelector(state => state.machines);
    const machineDisplay = ()=>{
        return machineList.machines.map(machine => {
            return(
                <Grid key={machine.content} item xs={12}>
                    <Machine machine={machine}/>
                </Grid>
            )
        });
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {machineDisplay()}
            </Grid>
        </div>
    )
}

export default MachinesMenu;