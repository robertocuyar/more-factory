import {expect} from "@jest/globals";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import {shallow, configure } from "enzyme";
import Footer from "../../components/NavBar";
import Typography from '@material-ui/core/Typography';

import App from "../../components/App";

// const NavBar = require('../../components/NavBar');

test("Footer.js is defined", ()=>{
    expect(Footer).toBeDefined();
})

configure({ adapter: new Adapter()});



describe ("Footer", ()=>{
    it("renders correctly", ()=>{
        shallow(<Footer />)
    })

    // it("Contains app name", ()=>{
    //     const wrapper = shallow(<Footer/>);
    //     expect(wrapper.containsAnyMatchingElements([<Typography>More-Factory</Typography>])).toEqual(true);
    // })
})