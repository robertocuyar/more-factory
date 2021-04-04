import {expect} from "@jest/globals";
import {randomizer} from "../../util/randomizer";

test("randomizer.js is defined", ()=>{
   expect(randomizer).toBeDefined();
});

test("randomizer returns a random number between 50 and 80", ()=>{
    const num = randomizer(50, 80);
   expect(num < 80).toBe(true);
   expect(num > 50).toBe(true);
   expect(num > 100).toBe(false);
});