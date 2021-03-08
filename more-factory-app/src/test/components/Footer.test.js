import {expect} from "@jest/globals";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import {shallow, configure } from "enzyme";
import Footer from "../../components/NavBar";

test("Footer.js is defined", ()=>{
    expect(Footer).toBeDefined();
});

configure({ adapter: new Adapter()});

describe ("Footer", ()=>{
    it("renders correctly", ()=>{
        shallow(<Footer />)
    });
});