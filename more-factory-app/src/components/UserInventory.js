import React from 'react';
import Box from '@material-ui/core/Box'
import {useSelector} from "react-redux";

const UserInventory = ()=> {
    const slots = useSelector(state => state.slots);

    const slotDisplay = ()=> {

    }

    return (
        <Box display={"flex"}>
            {slotDisplay()}
        </Box>
    )
}

export default UserInventory;