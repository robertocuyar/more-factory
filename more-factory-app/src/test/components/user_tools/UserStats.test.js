import {expect} from "@jest/globals";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import {shallow, configure} from "enzyme";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {defaultUser} from "../../../reducers/initialStates";
import UserStats from "../../../components/user_tools/UserStats";


const UserStatsTest = require('../../../components/user_tools/UserStats');

test("UserStats.js is defined", ()=>{
    expect(UserStatsTest).toBeDefined();
});

configure({adapter : new Adapter()});

describe("UserStats", ()=>{
    let wrapper, store;
    const initialState = {userStats: defaultUser};
    const mockStore = configureStore();

    beforeEach(()=>{
        store = mockStore(initialState);
        wrapper = shallow(<Provider store={store}><UserStats/></Provider>);
    });

    it("renders correctly", ()=>{
       wrapper;
    });
});