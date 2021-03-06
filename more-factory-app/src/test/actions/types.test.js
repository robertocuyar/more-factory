import {expect} from "@jest/globals";
import {INVENTORY_SLOTS, SLOT_FILL, SLOT_EMPTY, MINE_COAL, MINE_IRON, MINE_COPPER, MINE_LIMESTONE, MACHINE_RENDER, OPERATE_MACHINE, BUILD_RENDER, REMOVE_OPTION, ADD_MACHINE, STAT_RENDER, CLIENT_PAY, MONEY_TAKE, UPGRADE_TIER, CHANGE_CLIENTS, ADD_SLOTS} from "../../actions/types";

test("INVENTORY_SLOTS returns correct string", ()=>{
    expect(INVENTORY_SLOTS).toBe("INVENTORY_SLOTS");
});

test("SLOT_FILL returns correct string", ()=>{
    expect(SLOT_FILL).toBe("SLOT_FILL");
});

test("SLOT_EMPTY returns correct string", ()=>{
    expect(SLOT_EMPTY).toBe("SLOT_EMPTY");
});

test("MINE_COAL returns correct string", ()=>{
    expect(MINE_COAL).toBe("MINE_COAL");
});

test("MINE_IRON returns correct string", ()=>{
    expect(MINE_IRON).toBe("MINE_IRON");
});

test("MINE_COPPER returns correct string", ()=>{
    expect(MINE_COPPER).toBe("MINE_COPPER");
});

test("MINE_LIMESTONE returns correct string", ()=>{
    expect(MINE_LIMESTONE).toBe("MINE_LIMESTONE");
});

test("MACHINE_RENDER returns correct string", ()=>{
    expect(MACHINE_RENDER).toBe("MACHINE_RENDER");
});

test("OPERATE_MACHINE returns correct string", ()=>{
   expect(OPERATE_MACHINE).toBe("OPERATE_MACHINE");
});

test("BUILD_RENDER returns correct string", ()=>{
   expect(BUILD_RENDER).toBe("BUILD_RENDER");
});

test("REMOVE_OPTION returns correct string", ()=>{
    expect(REMOVE_OPTION).toBe("REMOVE_OPTION");
});

test("ADD_MACHINE returns correct string", ()=> {
   expect(ADD_MACHINE).toBe("ADD_MACHINE");
});

test("STAT_RENDER returns correct string", ()=>{
   expect(STAT_RENDER).toBe("STAT_RENDER");
});

test("UPGRADE_TIER returns correct string", ()=>{
   expect(UPGRADE_TIER).toBe("UPGRADE_TIER");
});

test("CLIENT_PAY returns correct string", ()=>{
   expect(CLIENT_PAY).toBe("CLIENT_PAY");
});

test("MONEY_TAKE returns correct string", ()=>{
   expect(MONEY_TAKE).toBe("MONEY_TAKE");
});

test("CHANGE_CLIENTS returns correct string", ()=>{
   expect(CHANGE_CLIENTS).toBe("CHANGE_CLIENTS");
});