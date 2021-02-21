import {expect} from "@jest/globals";
import React from 'react';
import Adapter from "enzyme-adapter-react-16";
import {shallow, configure} from "enzyme";
import TabOptions from "../../components/TabOptions"
import Tab from "@material-ui/core/Tab";

test("TabOptions.js is defined", ()=>{
    expect(TabOptions).toBeDefined();
});

configure( {adapter: new Adapter()});

describe ("TabOptions", ()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<TabOptions/>)
    });

    it("renders correctly", ()=>{
        wrapper;
    });

    it("Contains all tab options for user to select from", ()=>{
        expect(wrapper.containsAllMatchingElements([
            <Tab label="Mine" />,
            <Tab label="Machines"/>,
            <Tab label="Build" />,
            <Tab label="Orders" />,
            <Tab label="Upgrades" />
        ])).toEqual(true);
    })
})