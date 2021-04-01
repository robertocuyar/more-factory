export const outInv = (itemReq, machContent, inventoryCur, machineCur, limit)=>{

    let numReq = limit - itemReq.numContent;

    if(numReq === 0){
       return {inventory: inventoryCur, machine: machineCur};
    }

    const resultInv = inventoryCur.slots.map(slot =>{
        if (itemReq.content === slot.content){
            itemReq.numContent += slot.numContent;
            let remainder = itemReq.numContent - limit;
            if(remainder > 0){
                slot.numContent = remainder;
                itemReq.numContent = limit;
            }
            if (remainder <= 0 ){
                slot.numContent = null;
                slot.content = null;
                slot.imgUrl = null;
            }

        }
        return slot;
    });

    const resultMach = machineCur.machines.map(machine => {
        if (machine.content === machContent){
            machine.input.forEach(request => {
                if(itemReq.content === request.content) {
                    request.numContent = itemReq.numContent;
                }
            });
        }

       return machine;
    });

    return {inventory: {slots: resultInv}, machine: {power: machineCur.power, machines: resultMach}};

}