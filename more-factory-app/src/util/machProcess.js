export const machProcess = (machContent, machInput, machOutput, machineCur, powCur) => {

    let continueIn = true;
    let continueOut = true;
    let newMachines = {};
    let newPow = powCur.current;
    const powerTitle = "Current Power Production";

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
                if(mach.needsPower){
                    newPow-= mach.consume;
                    if (newPow < 0){
                        newPow = powCur.current;
                        return mach;
                    }
                }
                mach.input = mach.input.map(input => {
                    input.numContent -= input.use;
                    return input;
                });
                mach.output = mach.output.map(output => {
                    if(output.content === powerTitle){
                        output.numContent = output.give;
                        newPow += output.give;
                        if(newPow >= powCur.capacity){
                            newPow = powCur.capacity;
                        }
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
                if(mach.output[0].content === powerTitle){
                    mach.output[0].numContent = 0;
                }
            }
            return mach;
        });
    }
    return { machines: newMachines, power: newPow }
}