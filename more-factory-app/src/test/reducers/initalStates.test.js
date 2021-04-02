import {expect} from "@jest/globals";
import Adapter from "enzyme-adapter-react-16";
import {configure} from "enzyme";
import {defaultBag, firstIron, firstCoal, firstCopper, firstLimestone, defaultMachine, defaultBuild, defaultUser, defaultMines} from "../../reducers/initialStates";
import coal from "../../img/coal_inv.png";
import iron from "../../img/iron_inv.png";
import copper from "../../img/copper_inv.png";
import lime from "../../img/limestone_inv.png";
import ironBar from "../../img/iron_bar.png";
import ironFurnace from "../../img/iron_furnace.png";
import copperBar from "../../img/copper_bar.png";
import copperFurnace from "../../img/copper_furnace.png";

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
        expect(defaultMachine.power.current).toEqual(0);
        expect(defaultMachine.power.capacity).toEqual(500)
        expect(firstMachine.content).toEqual("Iron Furnace");
        expect(firstMachine.needsPower).toEqual(false);
        expect(firstMachine.description).toEqual("Uses 1 IRON ORE and 1 COAL to make 1 IRON INGOT.");
        expect(firstMachine.isOn).toEqual(false);
        expect(firstMachine.process).toEqual(1000);
        expect(firstMachine.imgUrl).toEqual(ironFurnace);
        expect(firstMachine.tier).toEqual(1);
        expect(firstMachine.input[0].numContent).toEqual(0);
        expect(firstMachine.input[0].content).toEqual("Iron Ore");
        expect(firstMachine.input[0].imgUrl).toEqual(iron);
        expect(firstMachine.input[0].use).toEqual(1);
        expect(firstMachine.input[1].numContent).toEqual(0);
        expect(firstMachine.input[1].content).toEqual("Coal");
        expect(firstMachine.input[1].imgUrl).toEqual(coal);
        expect(firstMachine.input[1].use).toEqual(1);
        expect(firstMachine.output[0].numContent).toEqual(0);
        expect(firstMachine.output[0].content).toEqual("Iron Ingot");
        expect(firstMachine.output[0].imgUrl).toEqual(ironBar);
        expect(firstMachine.output[0].give).toEqual(1);
    });

    it("defaultBuild has correct default values", ()=>{
        const firstOption = defaultBuild.options[0];
        expect(firstOption.content).toEqual("Copper Furnace");
        expect(firstOption.needsPower).toEqual(false);
        expect(firstOption.description).toEqual("Uses 1 COPPER ORE and 1 COAl to make 1 COPPER INGOT");
        expect(firstOption.isOn).toEqual(false);
        expect(firstOption.process).toEqual(1200);
        expect(firstOption.imgUrl).toEqual(copperFurnace);
        expect(firstOption.build[0].content).toEqual("Limestone");
        expect(firstOption.build[0].numContent).toEqual(0);
        expect(firstOption.build[0].imgUrl).toEqual(lime);
        expect(firstOption.build[0].need).toEqual(40);
        expect(firstOption.build[1].content).toEqual("Iron Ingot");
        expect(firstOption.build[1].numContent).toEqual(0);
        expect(firstOption.build[1].imgUrl).toEqual(ironBar);
        expect(firstOption.build[1].need).toEqual(20);
        expect(firstOption.input[0].numContent).toEqual(0);
        expect(firstOption.input[0].content).toEqual("Copper Ore");
        expect(firstOption.input[0].imgUrl).toEqual(copper);
        expect(firstOption.input[0].use).toEqual(1);
        expect(firstOption.input[1].numContent).toEqual(0);
        expect(firstOption.input[1].content).toEqual("Coal");
        expect(firstOption.input[1].imgUrl).toEqual(coal);
        expect(firstOption.input[1].use).toEqual(1);
        expect(firstOption.output[0].numContent).toEqual(0);
        expect(firstOption.output[0].content).toEqual("Copper Ingot");
        expect(firstOption.output[0].imgUrl).toEqual(copperBar);
        expect(firstOption.output[0].give).toEqual(1);
    });

    it("defaultUser has correct default values", ()=>{
        expect(defaultUser.currency).toEqual(0);
        expect(defaultUser.tier).toEqual(1);
    });

    it("defaultMines has correct default values", ()=>{
       expect(defaultMines.mines[0].content).toEqual("Coal");
       expect(defaultMines.mines[0].tier).toEqual(1);
       expect(defaultMines.mines[4].content).toEqual("Water");
       expect(defaultMines.mines[4].tier).toEqual(2);
       expect(defaultMines.mines[6].content).toEqual("Sulfur");
       expect(defaultMines.mines[6].tier).toEqual(3);

    });
});