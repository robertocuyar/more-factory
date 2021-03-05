import React from 'react';
import Box from '@material-ui/core/Box';
import {useSelector} from "react-redux";
import InventoryItem from "./InventoryItem";

const UserInventory = ()=> {
    const slots = useSelector(state => state.slotsInv);
    const slotDisplay = ()=> {

       return slots.slots.map(slot=> {
          return <InventoryItem key={"i" + slot.id } item={slot}/>
       })
    }

    return (
        <Box display={"flex"} flexWrap={"wrap"} alignItems={"center"} justifyContent={"left"}>
            {slotDisplay()}
        </Box>
    )
}

export default UserInventory;