import {expect} from "@jest/globals";
import {INVENTORY_SLOTS} from "../../actions/types";

test("INVENTORY_SLOTS returns correct string", ()=>{
    expect(INVENTORY_SLOTS).toBe("INVENTORY_SLOTS");
})