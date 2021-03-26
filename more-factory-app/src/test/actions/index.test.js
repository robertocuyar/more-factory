import {expect} from "@jest/globals";
import {inventorySlots, mineCoal, mineIron, mineCopper, mineLimestone, machineRender, removeItem, buildRender, addMachine, removeOption, statRender} from "../../actions";
import {
    INVENTORY_SLOTS,
    MINE_COAL,
    MINE_IRON,
    MINE_COPPER,
    MINE_LIMESTONE,
    MACHINE_RENDER,
    REMOVE_ITEM,
    BUILD_RENDER,
    ADD_MACHINE,
    REMOVE_OPTION, STAT_RENDER
} from "../../actions/types";
import {
    firstCoal,
    firstIron,
    firstCopper,
    firstLimestone,
    defaultMachine,
    defaultBag,
    defaultBuild,
    defaultUser
} from "../../reducers/initialStates";

test("inventorySlots to be defined", ()=>{
    expect(inventorySlots).toBeDefined();
});

test("inventorySlots to return payload with slot number", ()=>{
    expect(inventorySlots(5)).toEqual({
        type: INVENTORY_SLOTS,
        payload: 5
    });
});

test("mineCoal to be defined", ()=>{
   expect(mineCoal).toBeDefined();
});

test("mineCoal to return correct payload", ()=>{
    expect(mineCoal(firstCoal)).toEqual({
        type: MINE_COAL,
        payload: firstCoal
    });
});

test("mineIron to be defined", ()=>{
    expect(mineIron).toBeDefined();
});

test("mineIron to return correct payload", ()=>{
    expect(mineIron(firstIron)).toEqual({
        type: MINE_IRON,
        payload: firstIron
    });
});

test("mineCopper to be defined", ()=>{
    expect(mineCopper).toBeDefined();
});

test("mineCopper to return correct payload", ()=>{
    expect(mineCopper(firstCopper)).toEqual ({
        type: MINE_COPPER,
        payload: firstCopper
    });
});

test ("mineLimestone to be defined", ()=>{
    expect(mineLimestone).toBeDefined();
});

test("mineLimestone to return correct payload", ()=>{
    expect(mineLimestone(firstLimestone)).toEqual({
        type: MINE_LIMESTONE,
        payload: firstLimestone
    });
});

test("machineRender to be defined", ()=>{
    expect(machineRender).toBeDefined();
});

test("machineRender to return correct payload", ()=>{
    expect(machineRender(defaultMachine)).toEqual({
        type: MACHINE_RENDER,
        payload: defaultMachine
    });
});

test("removeItem to be defined", ()=>{
    expect(removeItem).toBeDefined();
});

test("removeItem to return correct payload", ()=>{
    expect(removeItem(defaultBag)).toEqual({
        type: REMOVE_ITEM,
        payload: defaultBag
    });
});

test("buildRender to be defined", ()=>{
    expect(buildRender).toBeDefined();
});

test("buildRender to return correct payload", ()=>{
    expect(buildRender(defaultBuild)).toEqual({
        type: BUILD_RENDER,
        payload: defaultBuild
    });
});

test("addMachine to be defined", ()=>{
   expect(addMachine).toBeDefined();
});

test("addMachine to return correct payload", ()=>{
   expect(addMachine(defaultBuild.machines[0])).toEqual({
       type: ADD_MACHINE,
       payload: defaultBuild.machines[0]
   });
});

test("removeOption to be defined", ()=>{
   expect(removeOption).toBeDefined();
});

test("removeOption to return correct payload", ()=> {
    expect(removeOption(defaultBuild.machines[0])).toEqual({
        type: REMOVE_OPTION,
        payload: defaultBuild.machines[0]
    });
});

test("statRender to be defined", ()=>{
   expect(statRender).toBeDefined();
});

test("statRender to return correct payload", ()=> {
    expect(statRender(defaultUser)).toEqual({
        type: STAT_RENDER,
        payload: defaultUser
    });
});