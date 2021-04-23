import {expect} from "@jest/globals";
import {defaultUser} from "../../data/defaultUser";

test("defaultUser to be defined", () => {
    expect(defaultUser).toBeDefined();
});
test("defaultUser has correct default values", () => {
    expect(defaultUser.currency).toEqual(0);
    expect(defaultUser.tier).toEqual(1);
    expect(defaultUser.clients.length).toEqual(5);
});