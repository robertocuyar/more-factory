import React from "react";
import {makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import Button from "@material-ui/core/Button";

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

const Order = ({info})=>{
    const classes = useStyles();

    const inputDisplay = ()=>{
        return info.input.map(item =>{
            return (
                <Grid item container xs justify={'center'} alignItems={'center'} spacing={2}>
                    <Grid item container xs={12}>
                        {item.need + " " + item.content}
                    </Grid>
                </Grid>
            )
        });
    }
    const reqDisplay = ()=>{
        return (
          <React.Fragment>
              <Grid item container xs={8} justify={'center'} alignItems={'center'} spacing={2}>
                  <Grid item container xs={12} alignItems={'center'} spacing={2}>
                      Buying:
                  </Grid>
                 <Grid item container xs ={12} alignItems={'center'} justify={'center'} spacing={2}>
                     {inputDisplay()}
                 </Grid>
              </Grid>
              <Grid item container xs={4} justify={'center'} alignItems={'center'} spacing={2}>
                  {"$" + info.pay}
              </Grid>
          </React.Fragment>
        )
    }
    return (
        <div className={classes.root}>
            <Grid container alignItems={'center'}>
                <Grid item container xs={3} justify={'center'} alignItems={'center'} direction={'column'} spacing={2}>
                    <AccountCircleOutlinedIcon style={{ fontSize: 80}}/>
                </Grid>
                <Grid item container xs={6} justify={'center'} alignItems={'center'} spacing={2}>
                    {reqDisplay()}
                </Grid>
                <Grid item container xs={3} justify={'center'} alignItems={'center'} direction={'column'} spacing={2}>
                    <Button variant={"outlined"}>Sell</Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Order;