import MineInventoryContainer from "../components/mines/MineInventoryContainer";
import React from "react";

export const invDisplay = item => {
    return item.numContent === 0 ? null :
        <MineInventoryContainer content={item.content} numContent={item.numContent} imgUrl={item.imgUrl}/>

}