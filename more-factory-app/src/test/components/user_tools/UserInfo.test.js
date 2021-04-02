import {expect} from "@jest/globals";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import {shallow, configure} from "enzyme";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {defaultUser} from "../../../reducers/initialStates";
import UserInfo from "../../../components/user_tools/UserInfo";

test("UserInfo.js is defined", ()=>{
    expect(UserInfo).toBeDefined();
});

configure({adapter : new Adapter()});

describe("UserInfo", ()=>{
    let wrapper, store;
    const initialState = {userStats: defaultUser};
    const mockStore = configureStore();

    beforeEach(()=>{
        store = mockStore(initialState);
        wrapper = shallow(<Provider store={store}><UserInfo/></Provider>);
    });

    it("renders correctly", ()=>{
       wrapper;
    });
});