import {expect} from "@jest/globals";
import React from 'react';
import Adapter from "enzyme-adapter-react-16";
import {shallow, configure} from "enzyme";
import MiningMenu from '../../components/MiningMenu';
import CoalMine from "../../components/mines/CoalMine";
import IronMine from "../../components/mines/IronMine";
import CopperMine from "../../components/mines/CopperMine";
import LimeStoneMine from "../../components/mines/LimeStoneMine";

test("MiningMenu.js is defined", ()=>{
    expect(MiningMenu).toBeDefined();
})

configure ({ adapter: new Adapter()});

describe("MiningMenu", ()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<MiningMenu/>);
    });

    it("renders correctly", ()=>{
        wrapper;
    });

    it("Contains all mine components in display", ()=>{
        expect(wrapper.containsAllMatchingElements([
            <CoalMine/>,
            <IronMine/>,
            <CopperMine/>,
            <LimeStoneMine/>
        ])).toEqual(true);
    })
});