import {expect} from "@jest/globals";
import {userStatReducer} from "../../reducers/userStatReducer";
import {defaultUser} from "../../data/defaultUser";
import {changeClients, clientPay, moneyTake, statRender, upgradeTier} from "../../actions";

const testUser = {
    currency: 0,
    tier: 1,
    clients: [
        {
            id: 1,
            pay: 200,
            input: [
                {
                    content: "Iron Ingot",
                    numContent: 0,
                    need: 40,
                    imgUrl: ""
                }
            ]
        },
        {
            id: 2,
            pay: 250,
            input: [
                {
                    content: "Copper Ingot",
                    numContent: 0,
                    need: 30,
                    imgUrl: ""
                }
            ]
        },
        {
            id: 3,
            pay: 150,
            input: [
                {
                    content: "Copper Ingot",
                    numContent: 0,
                    need: 70,
                    imgUrl: ""
                }
            ]
        },
        {
            id: 4,
            pay: 220,
            input: [
                {
                    content: "Iron Ingot",
                    numContent: 0,
                    need: 35,
                    imgUrl: ""
                }
            ]
        },
        {
            id: 5,
            pay: 400,
            input: [
                {
                    content: "Iron Ingot",
                    numContent: 0,
                    need: 10,
                    imgUrl: ""
                }
            ]
        }
    ]
}
test("userStatReducer.js is defined", () => {
    expect(userStatReducer).toBeDefined();
});

test("userStatReducer changes state", () => {
    expect(userStatReducer({}, statRender(defaultUser))).toEqual(defaultUser);
});

test("userStatReducer changes state of the tier with upgradeTier", () => {
    expect(userStatReducer(defaultUser, upgradeTier()).tier).toEqual(2);
});

test("userStatReducer changes state of currency by addition and adds a new generated client with clientPay", () => {
    const filterClients = testUser.clients.slice(1);
    filterClients.push({id: 6, input: [], pay: 500});
    const newStats = userStatReducer(testUser, clientPay(500, filterClients));
    expect(newStats.currency).toEqual(500);
    expect(newStats.clients[0].id).toEqual(2);
    expect(newStats.clients.length).toEqual(5);
});

test("userStatReducer changes state of currency by subtraction with moneySubtract", () => {
    defaultUser.currency = 1000;
    expect(userStatReducer(defaultUser, moneyTake(500)).currency).toEqual(500);
});

test("userStatReducer changes state of clients with changeClients", () => {
    const newClients = [{input: [{content: "Iron Ingot", need: 50, numContent: 0}], pay: 500}, {}, {}, {}, {}];
    const newState = userStatReducer(defaultUser, changeClients(newClients)).clients[0];
    expect(newState.input[0].content).toEqual("Iron Ingot");
    expect(newState.input[0].need).toEqual(50);
    expect(newState.input[0].numContent).toEqual(0);
    expect(newState.pay).toEqual(500);
});