import React from "react";
import {useSelector} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import BuildOption from "./builds/BuildOption";

const useStyles = makeStyles((theme) => ({
   root: {
       flexGrow: 1,
   }
}));

const BuildMenu = ()=>{
    const classes = useStyles();
    const buildList = useSelector(state => state.buildOpt);

    const buildDisplay = ()=>{
        if(buildList.machines.length !== 0) {
            return buildList.machines.map(option => {
                return (
                    <Grid item xs={12}>
                        <BuildOption option={option}/>
                    </Grid>
                )
            });
        }
            return (
                <Grid item xs={12} container justify={'center'}>
                    <h2>All Buildings Built!</h2>
                </Grid>
            )

    }

    return (
        <div className={classes.root}>
           <Grid container spacing={3}>
               {buildDisplay()}
           </Grid>
        </div>
    )
}

export default BuildMenu;