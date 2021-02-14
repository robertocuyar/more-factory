import React from 'react';
import Box from '@material-ui/core/Box'
import {useSelector} from "react-redux";

const UserInventory = ()=> {
    const slots = useSelector(state => state.slots);



    return (
        <Box display={"flex"}>
        </Box>
    )
}

export default UserInventory;