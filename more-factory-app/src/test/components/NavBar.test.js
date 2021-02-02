import {expect} from "@jest/globals";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import {shallow, configure } from "enzyme";
import NavBar from "../../components/NavBar";
import App from "../../components/App";

// const NavBar = require('../../components/NavBar');

test("NavBar.js is defined", ()=>{
    expect(NavBar).toBeDefined();
})

configure({ adapter: new Adapter()});

describe ("Navbar", ()=>{
    it("renders correctly", ()=>{
        shallow(<NavBar/>)
    })
})