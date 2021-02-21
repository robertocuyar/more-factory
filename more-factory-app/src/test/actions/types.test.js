import {expect} from "@jest/globals";
import {INVENTORY_SLOTS, SLOT_FILL, USER_OPTION} from "../../actions/types";

test("INVENTORY_SLOTS returns correct string", ()=>{
    expect(INVENTORY_SLOTS).toBe("INVENTORY_SLOTS");
});

test("SLOT_FILL returns correct string", ()=>{
    expect(SLOT_FILL).toBe("SLOT_FILL");
});

test("USER_OPTION returns correct string", ()=>{
    expect(USER_OPTION).toBe("USER_OPTION")
});
