import React from 'react';
import {useSelector} from "react-redux";

const MachinesMenu = ()=>{

    const machineList = useSelector(state => state.machines);

    return (
        <div>
            MachinesMenu
        </div>
    )
}

export default MachinesMenu;