import React from 'react';
import Badge from "@material-ui/core/Badge";
import Box from "@material-ui/core/Box";

const MineInventoryContainer = ({content, numContent, imgUrl }) =>{
    return (
        <Box height={"100%"} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
            <div>{content}</div>
            <Badge badgeContent={numContent} color={"primary"}
                   anchorOrigin={{
                       vertical: 'bottom',
                       horizontal: 'right',
                   }}
            >
                <img src={imgUrl} alt={content}/>
            </Badge>
        </Box>
    )
}

export default MineInventoryContainer;