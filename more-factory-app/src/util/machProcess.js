export const machProcess = (machContent, machInput, machOutput, machineCur) => {

    let continueIn = true;
    let continueOut = true;
    let newMachines = {};

    for(let input of machInput){
        if (input.numContent < input.use){
            continueIn = false;
            break;
        }
    }

    for(let output of machOutput){
        if (output.numContent === 80){
            continueOut = false;
            break;
        }
    }

    if(continueIn && continueOut){
         newMachines = machineCur.machines.map(mach => {
            if (mach.content === machContent){
                mach.isOn = true;
                mach.input = mach.input.map(input => {
                    input.numContent -= input.use;
                    return input;
                });
                mach.output = mach.output.map(output => {
                    if(output.content === "Current Power Production"){
                        output.numContent = output.give;
                    } else {
                        output.numContent += output.give;
                    }
                    return output;
                });
            }
            return mach;
        });

    } else {
        newMachines = machineCur.machines.map(mach => {
            if (mach.content === machContent){
                mach.isOn = false;
                if(mach.output[0].content === "Current Power Production"){
                    mach.output[0].numContent = 0;
                }
            }
            return mach;
        });
    }
    return { machines: newMachines }
}