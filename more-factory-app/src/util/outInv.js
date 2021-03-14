export const outInv = (itemReq, inventoryCur, machineCur)=>{

    let numReq = 80 - itemReq.numContent;

    if(numReq === 0){
       return {inventory: inventoryCur, machine: machineCur};
    }

    const resultInv = inventoryCur.slots.map(slot =>{
        if (itemReq.content === slot.content){
        }
    });

    return {inventory: resultInv, machine: machineCur};

}