import React from 'react';
import Box from '@material-ui/core/Box'
import {useSelector} from "react-redux";
import InventoryItem from "./InventoryItem";

const UserInventory = ()=> {
    const slots = useSelector(state => state.slots);

    const slotDisplay = ()=> {
        let numDisplay = [];
        for(let n = 1; n<= slots; n++){
            numDisplay.push(n);
        }
       return numDisplay.map(space=> {
          return <InventoryItem/>
       })
    }

    return (
        <Box display={"flex"}>
            {slotDisplay()}
        </Box>
    )
}

export default UserInventory;