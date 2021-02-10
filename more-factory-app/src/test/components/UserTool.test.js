import {expect} from "@jest/globals";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import {shallow, configure } from "enzyme";
import UserTool from "../../components/UserTool";
import UserBag from "../../components/UserBag";
import UserStats from "../../components/UserStats";

test("UserTool.js is defined", ()=>{
    expect(UserTool).toBeDefined();
})

configure({ adapter: new Adapter()});

describe ("UserTool", ()=>{

    it("renders correctly", ()=>{
       shallow(<UserTool/>)
    })

    it("Contains bag container", ()=>{
        const wrapper = shallow(<UserTool/>)
        expect(wrapper.containsAnyMatchingElements([
            <UserBag/>,
            <UserStats/>
        ])).toEqual(true);
    })
})