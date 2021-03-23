import React from "react";
import {makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import MineInventoryContainer from "../mines/MineInventoryContainer";
import {useSelector, useDispatch} from "react-redux";

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

const BuildOption = ({option})=>{
    const classes = useStyles();

    const imageDisplay = ()=>{
        return(
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

    const requireDisplay = ()=>{
        const buildReq = ()=>{
            return option.build.map(req => {
                return (
                    <Grid item container xs={12}>
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

    const inputDisplay = ()=> {
        return option.build.map(item => {
            return (
                <Grid item container justify={'center'} alignItems={'center'} spacing={1}>

                </Grid>
            )
        })
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
                <Grid item container xs={12} justify={'center'}>
                    {inputDisplay()}
                </Grid>
                <Grid item container xs={12} justify={'center'}>
                    Button
                </Grid>
            </Grid>
        </div>
    )
}

export default BuildOption;