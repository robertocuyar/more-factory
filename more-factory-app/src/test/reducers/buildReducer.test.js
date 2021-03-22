import {expect} from "@jest/globals";
import buildReducer from "../../reducers/buildReducer";
import {buildRender} from "../../actions";
import {defaultBuild} from "../../reducers/initialStates";

test("buildReducer.js is defined", ()=>{
   expect(buildReducer).toBeDefined();
});

test("buildReducer changes current state from null to a different value", ()=>{
    expect(buildReducer(null, buildRender(defaultBuild))).toEqual(defaultBuild);
});