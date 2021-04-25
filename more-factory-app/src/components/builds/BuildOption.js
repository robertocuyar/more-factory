import React from "react";
import {makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import {useSelector, useDispatch} from "react-redux";
import {invDisplay} from "../../util/invDisplay";
import {outInv} from "../../util/outInv";
import {inventorySlots, buildRender, removeOption, addMachine} from "../../actions";

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

const BuildOption = ({option}) => {
    const classes = useStyles();
    const inv = useSelector(state => state.slotsInv);
    const opt = useSelector(state => state.buildOpt);
    const dispatch = useDispatch();

    const imageDisplay = () => {
        return (
            <React.Fragment>
                <Grid item container xs={12} justify={'center'}>
                    <img src={option.imgUrl} alt={option.content}/>
                </Grid>
                <Grid item container xs={12} justify={'center'}>
                    <p>{option.description}</p>
                </Grid>
            </React.Fragment>
        )
    }

    const requireDisplay = () => {
        const buildReq = () => {
            return option.build.map(req => {
                return (
                    <Grid key={req.content} item container xs={12}>
                        <Grid item xs={4} container justify={'center'}>
                            <img src={req.imgUrl} alt={req.content}/>
                        </Grid>
                        <Grid item xs={4} container justify={'center'}>
                            <p>{req.content}</p>
                        </Grid>
                        <Grid item xs={4} container justify={'center'}>
                            <p>{req.need}</p>
                        </Grid>
                    </Grid>
                )
            })
        }
        return (
            <React.Fragment>
                <Grid item container xs={12} justify={'center'}>
                    <h2>Requirements</h2>
                </Grid>
                <Grid item container xs={12} justify={'center'}>
                    {buildReq()}
                </Grid>
            </React.Fragment>
        )
    }

    const inputChange = buildReq => {
        let res = outInv(buildReq, option.content, inv, opt, buildReq.need);
        dispatch(inventorySlots(res.inventory));
        dispatch(buildRender(res.machine));
    }

    const inputDisplay = () => {
        return option.build.map(item => {
            return (
                <Grid key={item.content} item container justify={'center'} alignItems={'center'} xs spacing={1}>
                    <Grid item container justify={'center'} xs={12}>
                        <Button variant={"outlined"} onClick={() => inputChange(item)}>Add {item.content}</Button>
                    </Grid>
                    <Grid item container justify={'center'} xs={12}>
                        <div className={classes.containerRoot}>
                            <Paper className={"inventory-box"}>
                                {invDisplay(item)}
                            </Paper>
                        </div>
                    </Grid>
                </Grid>
            )
        })
    }

    const build = () => {
        let confirm = true;
        for (let req of option.build) {
            if (req.numContent !== req.need) {
                confirm = false;
                break;
            }
        }
        if (confirm) {
            dispatch(addMachine(option));
            dispatch(removeOption(option));
        }
    }

    return (
        <div className={classes.root}>
            <Grid container alignItems={'center'}>
                <Grid item container xs={12} justify={'center'}>
                    <Grid item container xs={7} justify={'center'}>
                        {imageDisplay()}
                    </Grid>
                    <Grid item container xs={5} justify={'center'}>
                        {requireDisplay()}
                    </Grid>
                </Grid>
                <Grid item container xs={12} direction={'row'} alignItems={'center'} justify={'center'}>
                    {inputDisplay()}
                </Grid>
                <Grid item container xs={12} justify={'center'}>
                    <Button variant={'outlined'} onClick={() => build()}>Build</Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default BuildOption;