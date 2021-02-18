import {expect} from "@jest/globals";
import Adapter from "enzyme-adapter-react-16";
import {configure} from "enzyme";
import {defaultBag} from "../../reducers/initialStates";

configure({adapter: new Adapter()});

describe("initialState", ()=>{
    let bagTest;
    beforeEach(()=>{
        bagTest =  {
            slots:
                [
                    {
                        id  : 1,
                        content: null,
                        numContent: null
                    },
                    {
                        id : 2,
                        content: null,
                        numContent: null
                    },
                    {
                        id : 3,
                        content: null,
                        numContent: null
                    },
                    {
                        id : 4,
                        content: null,
                        numContent: null
                    },
                    {
                        id : 5,
                        content: null,
                        numContent: null
                    },
                    {
                        id : 6,
                        content: null,
                        numContent: null
                    },
                    {
                        id : 7,
                        content: null,
                        numContent: null
                    },
                    {
                        id : 8,
                        content: null,
                        numContent: null
                    }
                ]
        }
    })
    it("defaultBag has correct default values", ()=>{
        expect(defaultBag.slots[0].id).toEqual(bagTest.slots[0].id);
        expect(defaultBag.slots[1].content).toBeNull();
        expect(defaultBag.slots[5].numContent).toBeNull();
    })
})