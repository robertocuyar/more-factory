import {expect} from "@jest/globals";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import {shallow, configure} from "enzyme";
import Order from "../../../components/orders/Order";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {defaultBag} from "../../../reducers/initialStates";

test("Order.js is defined", ()=>{
   expect(Order).toBeDefined();
});

configure({adapter: new Adapter()});

describe("Order", ()=> {
   let wrapper, store;
   const initialState = {slotsInv: defaultBag};
   const mockStore = configureStore();
   const mockClient = {
      id: 1,
      pay: 500,
      input: [
         {
            content: "Iron Ingot",
            numContent: 0,
            imgUrl: "",
            need: 35
         }
      ]
   }

   beforeEach(()=>{
      store = mockStore(initialState);
      wrapper = shallow(<Provider store={store}><Order info = {mockClient} /></Provider>)
   });

   it("renders correctly", ()=>{
      wrapper;
   });
})


