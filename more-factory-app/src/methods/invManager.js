export default (item, inventory)=>{
    return inventory.slots.map(slot =>{
        if ((slot.content === null || slot.content === item.content) && item.numContent > 0) {
            slot.content = item.content;
            slot.numContent += item.numContent;
            slot.imgUrl = item.imgUrl;
            item.numContent = -100;
            if (slot.numContent > 100){
                item.numContent = slot.numContent - 100;
                slot.numContent = 100;
            }
            if(item.numContent < 0){
                item.numContent = 0;
            }
        }
        return slot;

    });
}