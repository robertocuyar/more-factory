import {expect} from "@jest/globals";
import {INVENTORY_SLOTS, SLOT_FILL, SLOT_EMPTY, MINE_COAL, MINE_IRON, MINE_COPPER, MINE_LIMESTONE, MACHINE_RENDER, REMOVE_ITEM, BUILD_RENDER, REMOVE_OPTION, ADD_MACHINE} from "../../actions/types";

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

test("REMOVE_ITEM returns correct string", ()=>{
   expect(REMOVE_ITEM).toBe("REMOVE_ITEM");
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