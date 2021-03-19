import {expect} from "@jest/globals";
import Adapter from "enzyme-adapter-react-16";
import {configure} from "enzyme";
import {defaultBag, firstIron, firstCoal, firstCopper, firstLimestone, defaultMachine} from "../../reducers/initialStates";
import coal from "../../img/coal_inv.png";
import iron from "../../img/iron_inv.png";
import copper from "../../img/copper_inv.png";
import lime from "../../img/limestone_inv.png";
import ironBar from "../../img/iron_bar.png";
import ironFurnace from "../../img/iron_furnace.png";

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
        expect(firstIron.content).toEqual("Iron Ore");
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
        expect(firstLimestone.imgUrl).toEqual(lime);
    });

    it("defaultMachine has correct default values", ()=>{
        const firstMachine = defaultMachine.machines[0];
        expect(firstMachine.content).toEqual("Iron Furnace");
        expect(firstMachine.needsPower).toEqual(false);
        expect(firstMachine.description).toEqual("Uses 1 IRON ORE and 1 COAL to make 1 IRON INGOT.");
        expect(firstMachine.isOn).toEqual(false);
        expect(firstMachine.process).toEqual(1000);
        expect(firstMachine.imgUrl).toEqual(ironFurnace);
        expect(firstMachine.input[0].numContent).toEqual(0);
        expect(firstMachine.input[0].content).toEqual("Iron Ore");
        expect(firstMachine.input[0].imgUrl).toEqual(iron);
        expect(firstMachine.input[1].numContent).toEqual(0);
        expect(firstMachine.input[1].content).toEqual("Coal");
        expect(firstMachine.input[1].imgUrl).toEqual(coal);
        expect(firstMachine.output[0].numContent).toEqual(0);
        expect(firstMachine.output[0].content).toEqual("Iron Ingot");
        expect(firstMachine.output[0].imgUrl).toEqual(ironBar);
    });
});