import {expect} from "@jest/globals";
import userStatReducer from "../../reducers/userStatReducer";
import {powerChange, statRender} from "../../actions";
import {defaultUser} from "../../reducers/initialStates";


test("userStatReducer.js is defined", ()=>{
   expect(userStatReducer).toBeDefined();
});

test("userStatReducer changes state", ()=>{
   expect(userStatReducer({}, statRender(defaultUser))).toEqual(defaultUser);
});

test("userStatReducer with powerChange will change state to have the new current available power.",()=>{
   const actualState = userStatReducer(defaultUser, powerChange(50));
   expect(actualState.power.current).toEqual(50);
});