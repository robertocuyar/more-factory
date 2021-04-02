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
    const tier = useSelector(state => state.userStats);

    const buildDisplay = ()=>{
        if(buildList.machines.length !== 0) {
            return buildList.machines.map(option => {
                if(tier.tier >= option.tier) {
                    return (
                        <Grid key={option.content} item xs={12}>
                            <BuildOption option={option}/>
                        </Grid>
                    )
                } else {
                    return (
                        <Grid item xs={12}>
                            Locked
                        </Grid>
                    )
                }
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