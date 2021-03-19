export const machProcess = (machContent, machineCur) => {
    const newMachines = machineCur.machines.map(mach => {
       if (mach.content === machContent){
       } else {
           return mach;
       }
    });

    return { machines: newMachines };
}