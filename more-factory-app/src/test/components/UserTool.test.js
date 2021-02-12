import {expect} from "@jest/globals";
import React, {useState as useStateMock} from "react";
import Adapter from "enzyme-adapter-react-16";
import {shallow, configure } from "enzyme";
import UserTool from "../../components/UserTool";
import UserBag from "../../components/UserBag";
import UserStats from "../../components/UserStats";
import UserInventory from "../../components/UserInventory";

test("UserTool.js is defined", ()=>{
    expect(UserTool).toBeDefined();
})

configure({ adapter: new Adapter()});

jest.mock('react', ()=>({
    ...jest.requireActual('react'),
        useState: jest.fn(),
}));
describe ("UserTool", ()=>{
    let wrapper;
    const setState = jest.fn();

    beforeEach(()=>{
        useStateMock.mockImplementation((init)=> [init, setState]);
        wrapper =  shallow(<UserTool/>);
    });

    afterEach(()=>{
        jest.clearAllMocks();
    });
    it("renders correctly", ()=>{
       wrapper
    });

    it("Contains bag container", ()=>{
        expect(wrapper.containsAnyMatchingElements([
            <UserBag/>,
            <UserStats/>,
            <UserInventory/>
        ])).toEqual(true);
    });

    it('UserBag onclick changes state of UserTool to open', ()=>{
        wrapper.find('#bag-container').props().onClick();
        expect(setState).toHaveBeenCalledWith('open');
    })
})