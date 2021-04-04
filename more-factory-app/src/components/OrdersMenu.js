import React from 'react';
import {makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));

const OrdersMenu = ()=>{
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                OrdersMenu
            </Grid>
        </div>
    )
}

export default OrdersMenu;