import {expect} from "@jest/globals";
import React from 'react';
import Adapter from "enzyme-adapter-react-16";
import {shallow, configure} from "enzyme";
import App from "../../components/App";
import NavBar from "../../components/NavBar";
import UserTool from "../../components/UserTool";
import Field from "../../components/Field";
import TabOptions from "../../components/TabOptions";
import Footer from "../../components/Footer";

test("App.js is defined", ()=>{
    expect(App).toBeDefined();
})

configure ({ adapter: new Adapter()});

describe ("App", ()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<App/>);
    });

    it("renders correctly", ()=>{
        wrapper;
    })

    it("Contains all static components for app", ()=>{
        expect(wrapper.containsAllMatchingElements([
            <NavBar/>,
            <UserTool/>,
            <Field/>,
            <TabOptions/>,
            <Footer/>
        ])).toEqual(true);
    })
});

