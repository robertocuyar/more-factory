import {expect} from "@jest/globals";
import React from 'react';
import Adapter from "enzyme-adapter-react-16";
import {shallow, configure} from "enzyme";
import Machine from "../../../components/machines/Machine";

test("Machine.js is defined", ()=>{
   expect(Machine).toBeDefined();
});

configure({adapter : new Adapter()});

describe ("Machine", ()=>{
   let wrapper;

   beforeEach(()=>{
      wrapper = shallow(<Machine/>);
   });

   it("renders correctly", ()=>{
      wrapper;
   });

});