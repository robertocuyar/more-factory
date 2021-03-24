import {expect} from "@jest/globals";
import buildReducer from "../../reducers/buildReducer";
import {buildRender, removeOption} from "../../actions";
import {defaultBuild} from "../../reducers/initialStates";

test("buildReducer.js is defined", ()=>{
   expect(buildReducer).toBeDefined();
});

test("buildReducer changes current state from null to a different value", ()=>{
    expect(buildReducer(null, buildRender(defaultBuild))).toEqual(defaultBuild);
});

test("buildReducer changes current state by removing option and returning new state without that specific option",()=>{
   expect(buildReducer(defaultBuild, removeOption(defaultBuild.machines[0]))).toEqual({machines: []});
});