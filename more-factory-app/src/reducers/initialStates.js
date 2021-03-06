import coal from "../img/coal_inv.png";
import iron from "../img/iron_inv.png";
import copper from "../img/copper_inv.png";
import lime from "../img/limestone_inv.png";
import ironBar from "../img/iron_bar.png";
import ironFurnace from "../img/iron_furnace.png";
import copperFurnace from "../img/copper_furnace.png";
import copperBar from "../img/copper_bar.png";
import coalGen from "../img/coal_gen.png";
import boltPress from "../img/bolt_press.png";
import bolt from "../img/iron_bolt.png";

export const products = [
    {
        content: "Iron Ingot",
        price: 5,
        tier: 1,
        imgUrl: ironBar
    },
    {
        content: "Copper Ingot",
        price: 7,
        tier: 1,
        imgUrl: copperBar
    },
    {
        content: "Copper Wire",
        price: 9,
        tier: 1,
        imgUrl: ""
    },
    {
        content: "Iron Bolt",
        price: 3,
        tier: 1,
        imgUrl: ""
    },
    {
        content: "Plastic",
        price: 70,
        tier: 2,
        imgUrl: ""
    },
    {
        content: "Sulfuric Acid",
        price: 95,
        tier: 3,
        imgUrl: ""
    }
]

export const defaultBag =
    {
        slots:
            [
                {
                    id: 1,
                    content: null,
                    numContent: null,
                    imgUrl: ""
                },
                {
                    id: 2,
                    content: null,
                    numContent: null,
                    imgUrl: ""
                },
                {
                    id: 3,
                    content: null,
                    numContent: null,
                    imgUrl: ""
                },
                {
                    id: 4,
                    content: null,
                    numContent: null,
                    imgUrl: ""
                },
                {
                    id: 5,
                    content: null,
                    numContent: null,
                    imgUrl: ""
                },
                {
                    id: 6,
                    content: null,
                    numContent: null,
                    imgUrl: ""
                },
                {
                    id: 7,
                    content: null,
                    numContent: null,
                    imgUrl: ""
                },
                {
                    id: 8,
                    content: null,
                    numContent: null,
                    imgUrl: ""
                }
            ]
    };

export const firstIron = {
    content: "Iron Ore",
    numContent: 1,
    imgUrl: iron
};

export const firstCoal = {
    content: "Coal",
    numContent: 1,
    imgUrl: coal
};

export const firstCopper = {
    content: "Copper Ore",
    numContent: 1,
    imgUrl: copper
}

export const firstLimestone = {
    content: "Limestone",
    numContent: 1,
    imgUrl: lime
}

export const defaultMachine = {
    power: {
        current: 0,
        capacity: 500
    },
    machines: [
        {
            content: "Iron Furnace",
            description: "Uses 1 IRON ORE and 1 COAL to make 1 IRON INGOT.",
            imgUrl: ironFurnace,
            needsPower: false,
            isOn: false,
            process: 1000,
            tier: 1,
            input: [
                {
                    numContent: 0,
                    content: "Iron Ore",
                    imgUrl: iron,
                    use: 1
                },
                {
                    numContent: 0,
                    content: "Coal",
                    imgUrl: coal,
                    use: 1

                }
            ],
            output: [
                {
                    numContent: 0,
                    content: "Iron Ingot",
                    imgUrl: ironBar,
                    give: 1
                }
            ]
        }
    ]
}

export const defaultBuild = {
    machines: [
        {
            content: "Copper Furnace",
            needsPower: false,
            description: "Uses 1 COPPER ORE and 1 COAl to make 1 COPPER INGOT",
            isOn: false,
            process: 1200,
            imgUrl: copperFurnace,
            tier: 1,
            build: [
                {
                    content: "Limestone",
                    numContent: 0,
                    imgUrl: lime,
                    need: 40
                },
                {
                    content: "Iron Ingot",
                    numContent: 0,
                    imgUrl: ironBar,
                    need: 20
                }
            ],
            input: [
                {
                    content: "Copper Ore",
                    numContent: 0,
                    imgUrl: copper,
                    use: 1
                },
                {
                    content: "Coal",
                    numContent: 0,
                    imgUrl: coal,
                    use: 1
                }
            ],
            output: [
                {
                    content: "Copper Ingot",
                    numContent: 0,
                    imgUrl: copperBar,
                    give: 1
                }
            ]
        },
        {
            content: "Coal Generator",
            needsPower: false,
            description: "Burns coal to generate 50 MW of power",
            isOn: false,
            process: 1000,
            imgUrl: coalGen,
            tier: 1,
            build: [
                {
                    content: "Limestone",
                    numContent: 0,
                    imgUrl: lime,
                    need: 60
                },
                {
                    content: "Iron Ingot",
                    numContent: 0,
                    imgUrl: ironBar,
                    need: 40
                },
                {
                    content: "Copper Ingot",
                    numContent: 0,
                    imgUrl: copperBar,
                    need: 20
                }
            ],
            input: [
                {
                    content: "Coal",
                    numContent: 0,
                    imgUrl: coal,
                    use: 1
                }
            ],
            output: [
                {
                    content: "Current Power Production",
                    numContent: 0,
                    give: 50
                }
            ]
        },
        {
            content: "Bolt Press",
            needsPower: true,
            description: "Uses 1 IRON INGOT to make 2 IRON BOLTS",
            isOn: false,
            consume: 10,
            process: 500,
            imgUrl: boltPress,
            tier: 1,
            build: [
                {
                    content: "Iron Ingot",
                    numContent: 0,
                    imgUrl: ironBar,
                    need: 50
                },
                {
                    content: "Copper Wire",
                    numContent: 0,
                    imgUrl: "",
                    need: 30
                }
            ],
            input: [
                {
                    content: "Iron Ingot",
                    numContent: 0,
                    imgUrl: ironBar,
                    use: 1
                }
            ],
            output: [
                {
                    content: "Iron Bolt",
                    numContent: 0,
                    imgUrl: bolt,
                    give: 2
                }
            ]
        },
        {
            content: "Copper Wire Maker",
            needsPower: true,
            description: "Uses 1 COPPER INGOT to make 2 COPPER WIRE",
            isOn: false,
            consume: 10,
            process: 500,
            imgUrl: "",
            tier: 1,
            build: [
                {
                    content: "Iron Ingot",
                    numContent: 0,
                    imgUrl: ironBar,
                    need: 40
                },
                {
                    content: "Copper Ingot",
                    numContent: 0,
                    imgUrl: copperBar,
                    need: 20
                },
                {
                    content: "Limestone",
                    numContent: 0,
                    imgUrl: lime,
                    need: 10
                }
            ],
            input: [
                {
                    content: "Copper Ingot",
                    numContent: 0,
                    imgUrl: copperBar,
                    use: 1
                }
            ],
            output: [
                {
                    content: "Copper Wire",
                    numContent: 0,
                    imgUrl: "",
                    give: 2
                }
            ]
        }


    ]
}

export const defaultMines = {
    mines: [
        {
            content: "Coal",
            tier: 1
        },
        {
            content: "Iron",
            tier: 1
        },
        {
            content: "Copper",
            tier: 1
        },
        {
            content: "Limestone",
            tier: 1
        },
        {
            content: "Water",
            tier: 2
        },
        {
            content: "Oil",
            tier: 2
        },
        {
            content: "Sulfur",
            tier: 3
        },
    ]
}