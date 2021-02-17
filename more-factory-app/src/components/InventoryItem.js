import React from 'react';
import {makeStyles} from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(2),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
}));

const InventoryItem = ()=>{
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Paper className={"inventory-box"}>
            InventoryItem
        </Paper>
        </div>
    )
}

export default InventoryItem;