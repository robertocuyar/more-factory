import {expect} from "@jest/globals";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import {shallow, configure } from "enzyme";
import NavBar from "../../components/NavBar";
import Typography from '@material-ui/core/Typography';

test("NavBar.js is defined", ()=>{
    expect(NavBar).toBeDefined();
})

configure({ adapter: new Adapter()});

describe ("Navbar", ()=>{
    it("renders correctly", ()=>{
        shallow(<NavBar/>)
    })

    it("Contains app name", ()=>{
        const wrapper = shallow(<NavBar/>);
        expect(wrapper.containsAnyMatchingElements([<Typography>More-Factory</Typography>])).toEqual(true);
    })
})

