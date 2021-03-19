export const machProcess = (machContent, machineCur) => {
    const newMachines = machineCur.machines.map(mach => {
       if (mach.content === machContent){
           mach.input = mach.input.map(input => {
               input.numContent -= input.use;
               return input;
           });
           mach.output = mach.output.map(output => {
               output.numContent += output.give;
               return output;
           });
       }
           return mach;
    });

    return { machines: newMachines };
}