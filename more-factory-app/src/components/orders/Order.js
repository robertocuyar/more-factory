import React from "react";
import {makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import {invDisplay} from "../../util/invDisplay";
import {outInv} from "../../util/outInv";
import {inventorySlots, changeClients, clientPay} from "../../actions";
import {useSelector, useDispatch} from "react-redux";
import {genClients} from "../../util/genClients";

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

const Order = ({info}) => {
    const classes = useStyles();
    const inv = useSelector(state => state.slotsInv);
    const user = useSelector(state => state.userStats);
    const dispatch = useDispatch();

    const reqDisplay = () => {
        return info.input.map((item, index) => {
            return (
                <Grid key={item.content + item.need + index} item container xs={12} alignItems={'center'}>
                    {item.need + " " + item.content}
                </Grid>
            )
        });
    }

    const inputDisplay = () => {
        return info.input.map((item, index) => {
            return (
                <Grid key={item.content + index} item container xs justify={'center'} alignItems={'center'} spacing={1}>
                    <Grid item container justify={'center'} alignItems={'center'} xs={12}>
                        <div className={classes.containerRoot}>
                            <Paper className={"inventory-box"}>
                                {invDisplay(item)}
                            </Paper>
                        </div>
                    </Grid>
                    <Grid item container justify={'center'} alignItems={'center'} xs={12}>
                        <Button variant={"outlined"} onClick={() => inputChange(item)}>Add {item.content}</Button>
                    </Grid>
                </Grid>
            )
        });
    }

    const inputChange = inputReq => {
        let res = outInv(inputReq, info.id, inv, user.clients, inputReq.need);
        dispatch(inventorySlots(res.inventory));
        dispatch(changeClients(res.machine.machines));
    }

    const placeDisplay = () => {
        return (
            <React.Fragment>
                <Grid item container xs={12} justify={'center'} alignItems={'center'} spacing={1}>
                    <Grid item container xs={12} alignItems={'center'} justify={'center'} spacing={2}>
                        {inputDisplay()}
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }

    const completeSale = pay => {
        let isComplete = true;
        info.input.forEach(req => {
            if (req.numContent !== req.need) {
                isComplete = false;
            }
        })
        if (isComplete) {
            const remClients = genClients(user.clients.filter(client => client.id !== info.id), user.tier);
            dispatch(clientPay(pay, remClients));
        }
    }

    return (
        <div className={classes.root}>
            <Grid container alignItems={'center'}>
                <Grid item container xs={3} justify={'center'} alignItems={'center'} spacing={2}>
                    <AccountCircleOutlinedIcon style={{fontSize: 160}}/>
                </Grid>
                <Grid item container xs={2} justify={'center'} alignItems={'center'} direction={'column'}>
                    <Grid item container xs={12} alignItems={'center'}>
                        Buying:
                    </Grid>
                    {reqDisplay()}
                </Grid>
                <Grid item container xs={5} justify={'center'} alignItems={'center'} spacing={2}>
                    {placeDisplay()}
                </Grid>
                <Grid item container xs={2} justify={'center'} alignItems={'center'} direction={'column'} spacing={2}>
                    <Button onClick={() => completeSale(info.pay)}
                            variant={"outlined"}>{"Sell for $" + info.pay}</Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Order;