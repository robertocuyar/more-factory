export const updateInv = (invCur, addSlot)=> {
    const invRes = {...invCur};
    let idChange = invCur.slots.length;
    for (let i = 1; i <= addSlot; i++){
        idChange++;
        invRes.slots.push({
            id: idChange,
            content: null,
            numContent: null,
            imgUrl: ""
        });
    }
return invRes
}