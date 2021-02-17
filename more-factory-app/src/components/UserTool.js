import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import UserBag from "./UserBag";
import UserStats from "./UserStats";
import UserInventory from "./UserInventory";
import Box from "@material-ui/core/Box";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const UserTool = ()=> {
    const [bag, setBag] = useState("closed")
    const classes = useStyles();

    const displayContent = () =>{

        if (bag === "closed"){
            return (
                <React.Fragment>
                    <Grid item xs={6}>
                        <Paper onClick={()=> setBag("open")} id={"bag-container"} className={classes.paper}>
                            <UserBag />
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <UserStats/>
                        </Paper>
                    </Grid>
                </React.Fragment>
            )
        } else {
            return (
            <React.Fragment>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Box display={"flex"} justifyContent={"flex-end"}>
                           <Box display={"flex"} alignItems={"center"} m={1} id={"back-arrow"} onClick={()=>{setBag("closed")}}><ArrowBackIcon/></Box>
                           <Box onClick={()=>{setBag("closed")}} m={1}><p>Close Bag</p></Box>
                        </Box>
                        <div id={"user-inventory"}>
                            <UserInventory/>
                        </div>
                    </Paper>
                </Grid>
            </React.Fragment>
            )
        }

    }

    return(
        <div className={classes.root}>
            <Grid container spacing={3}>
                {displayContent()}
            </Grid>

        </div>
    )
}

export default UserTool;