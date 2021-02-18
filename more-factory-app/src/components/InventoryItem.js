import React from 'react';
import {makeStyles} from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Badge from "@material-ui/core/Badge"
import Box from "@material-ui/core/Box"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(2),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
}));

const InventoryItem = props =>{
    const classes = useStyles();

    if (props.item.content === null){
        return (
            <div className={classes.root}>
                <Paper className={"inventory-box"}>
                </Paper>
            </div>
        );
    } else {
        return (
            <div className={classes.root}>
                <Paper className={"inventory-box"}>
                    <Box height={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                    <Badge badgeContent={props.item.numContent} color={"primary"}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    >
                        {props.item.content}
                    </Badge>
                    </Box>
                </Paper>
            </div>
        )
    }
}

export default InventoryItem;