import {expect} from "@jest/globals";
import {INVENTORY_SLOTS, SLOT_FILL, MINE_COAL, MINE_IRON, MINE_COPPER, MINE_LIMESTONE, MACHINE_RENDER} from "../../actions/types";

test("INVENTORY_SLOTS returns correct string", ()=>{
    expect(INVENTORY_SLOTS).toBe("INVENTORY_SLOTS");
});

test("SLOT_FILL returns correct string", ()=>{
    expect(SLOT_FILL).toBe("SLOT_FILL");
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
})