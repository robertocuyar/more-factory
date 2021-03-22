export const invManager = (item, inventory)=>{
    return inventory.slots.map(slot =>{
        if ((slot.content === null || slot.content === item.content) && item.numContent > 0) {
            slot.content = item.content;
            slot.numContent += item.numContent;
            slot.imgUrl = item.imgUrl;
            item.numContent = -80;
            if (slot.numContent > 80){
                item.numContent = slot.numContent - 80;
                slot.numContent = 80;
            }
            if(item.numContent < 0){
                item.numContent = 0;
            }
        }
        return slot;

    });
}