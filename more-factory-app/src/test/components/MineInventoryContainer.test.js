import {expect} from "@jest/globals";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import {shallow, configure} from "enzyme";
import MineInventoryContainer from "../../components/MineInventoryContainer";

test("MineInventoryContainer.js to be defined", ()=>{
    expect(MineInventoryContainer).toBeDefined();
});

configure ({adapter : new Adapter()});

describe ("MineINventoryContainer", ()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<MineInventoryContainer numContent={3} content={"Coal"} imgUrl={""}/>);
    });

    it("Renders correctly", ()=>{
       wrapper;
    });

    it("Contains components necessary for being an inventory container", ()=>{
        expect(wrapper.containsAllMatchingElements([
           <div>Coal</div>,
            <img src="" alt="Coal"/>
        ])).toEqual(true);
    })

});

