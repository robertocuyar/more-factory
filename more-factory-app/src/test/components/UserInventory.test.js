import {expect} from "@jest/globals";
import React from 'react';
import Adapter from "enzyme-adapter-react-16";
import {shallow, configure} from "enzyme";
import {Provider, useSelector} from "react-redux";
import UserInventory from "../../components/UserInventory";
import InventoryItem from "../../components/InventoryItem";
import App from "../../components/App";
import {createStore} from "redux";
import reducers from "../../reducers";

test("UserInventory.js is defined", ()=>{
    expect(UserInventory).toBeDefined();
});

configure({ adapter: new Adapter()});

describe ("UserInventory", ()=>{
    let wrapper;
   beforeEach(()=>{
       wrapper = shallow( <Provider store={createStore(reducers)}><UserInventory/></Provider>);
   })
    it("Renders correctly", ()=>{
        wrapper;
    })

    it("Contains InventoryItem component", ()=>{
    expect(wrapper.containsAnyMatchingElements([<InventoryItem/>]));
    });

   it("Default render of 8 InventoryItem components", ()=>{
        expect(wrapper.find(<InventoryItem/>)).toHaveLength(8);
   });

})

