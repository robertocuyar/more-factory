import {expect} from "@jest/globals";
import Adapter from "enzyme-adapter-react-16";
import {configure} from "enzyme";
import {defaultBag, firstIron, firstCoal, firstCopper, firstLimestone} from "../../reducers/initialStates";
import coal from "../../img/coal_inv.png";
import iron from "../../img/iron_inv.png";
import copper from "../../img/copper_inv.png";

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
                        numContent: null,
                        imgUrl: ""
                    },
                    {
                        id : 2,
                        content: null,
                        numContent: null,
                        imgUrl: ""
                    },
                    {
                        id : 3,
                        content: null,
                        numContent: null,
                        imgUrl: ""
                    },
                    {
                        id : 4,
                        content: null,
                        numContent: null,
                        imgUrl: ""
                    },
                    {
                        id : 5,
                        content: null,
                        numContent: null,
                        imgUrl: ""
                    },
                    {
                        id : 6,
                        content: null,
                        numContent: null,
                        imgUrl: ""
                    },
                    {
                        id : 7,
                        content: null,
                        numContent: null,
                        imgUrl: ""
                    },
                    {
                        id : 8,
                        content: null,
                        numContent: null,
                        imgUrl: ""
                    }
                ]
        }
    })
    it("defaultBag has correct default values", ()=>{
        expect(defaultBag.slots[0].id).toEqual(bagTest.slots[0].id);
        expect(defaultBag.slots[0].imgUrl).toEqual(bagTest.slots[0].imgUrl)
        expect(defaultBag.slots[1].content).toBeNull();
        expect(defaultBag.slots[5].numContent).toBeNull();
    });

    it("firstIron has correct default values", ()=>{
        expect(firstIron.content).toEqual("Iron");
        expect(firstIron.numContent).toEqual(1);
        expect(firstIron.imgUrl).toEqual(iron);
    });

    it("firstCoal has correct default values", ()=>{
        expect(firstCoal.content).toEqual("Coal");
        expect(firstCoal.numContent).toEqual(1);
        expect(firstCoal.imgUrl).toEqual(coal);
    });

    it("firstCopper has correct default values", ()=>{
        expect(firstCopper.content).toEqual("Copper");
        expect(firstCopper.numContent).toEqual(1);
        expect(firstCopper.imgUrl).toEqual(copper);
    });

    it("fistLimestone has correct default values", ()=>{
        expect(firstLimestone.content).toEqual("Limestone");
        expect(firstLimestone.numContent).toEqual(1);
        expect(firstLimestone.imgUrl).toEqual("");
    })
})