import React, {useEffect} from 'react';
import {makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {useSelector} from "react-redux";
import {genClients} from "../util/genClients";
import {changeClients} from "../actions";
import {useDispatch} from "react-redux";
import Order from "./orders/Order";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));

const OrdersMenu = ()=>{
    const classes = useStyles();
    const stats = useSelector(state => state.userStats);
    const dispatch = useDispatch();

       const clientDisplay = ()=> {
               return stats.clients.map(client => {
                   return (
                       <Grid key={client.pay} item xs={12}>
                           <Order info={client}/>
                       </Grid>
                   )
               });
       };

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {clientDisplay()}
            </Grid>
        </div>
    )
}

export default OrdersMenu;