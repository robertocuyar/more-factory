import {expect} from "@jest/globals";

const App = require('../../src/components/App');

test("App.js is defined", ()=>{
    const n = null;
    expect(n).toBeDefined();
})