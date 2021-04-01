import {expect} from "@jest/globals";
import userStatReducer from "../../reducers/userStatReducer";
import {defaultUser} from "../../reducers/initialStates";
import {statRender, upgradeTier} from "../../actions";


test("userStatReducer.js is defined", ()=>{
   expect(userStatReducer).toBeDefined();
});

test("userStatReducer changes state", ()=>{
   expect(userStatReducer({}, statRender(defaultUser))).toEqual(defaultUser);
});

test("userStatReducer changes state of the tier with upgradeTier", ()=>{
   expect(userStatReducer(defaultUser, upgradeTier()).tier).toEqual(2);
});