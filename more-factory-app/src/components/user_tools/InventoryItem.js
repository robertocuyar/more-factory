import React from 'react';
import {makeStyles} from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import MineInventoryContainer from "../mines/MineInventoryContainer";

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

const InventoryItem = ({item}) => {
    const classes = useStyles();

    if (item.content === null) {
        return (
            <div className={classes.root}>
                <Paper className={"inventory-box"}>
                </Paper>
            </div>
        );
    } else {
        return (
            <div className={classes.root}>
                <Paper className={"inventory-box"}>
                    <MineInventoryContainer content={item.content} numContent={item.numContent} imgUrl={item.imgUrl}/>
                </Paper>
            </div>
        )
    }
}

export default InventoryItem;