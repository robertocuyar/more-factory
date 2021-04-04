import {expect} from "@jest/globals";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Order from "../../../components/orders/Order";

test("Order.js is defined", ()=>{
   expect(Order).toBeDefined();
});
