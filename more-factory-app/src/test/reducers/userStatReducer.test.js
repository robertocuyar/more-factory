import {expect} from "@jest/globals";
import userStatReducer from "../../reducers/userStatReducer";
import {statRender} from "../../actions";
import {defaultUser} from "../../reducers/initialStates";


test("userStatReducer.js is defined", ()=>{
   expect(userStatReducer).toBeDefined();
});

test("userStatReducer changes state", ()=>{
   expect(userStatReducer({}, statRender(defaultUser))).toEqual(defaultUser);
});