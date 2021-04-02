import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7)
    }
}));

const Field = ()=>{
    const classes = useStyles();
    const machines = useSelector(state => state.machines);

    const fieldDisplay = ()=> {
        return machines.machines.map(machine => {
            return <Avatar key={machine.content} alt={machine.content} src={machine.imgUrl} className={classes.large}/>
        })
    }

    return (
        <Box p={12} id={"field-img"}>
            <div className={classes.root}>
                {fieldDisplay()}
            </div>
        </Box>
    )
}

export default Field;