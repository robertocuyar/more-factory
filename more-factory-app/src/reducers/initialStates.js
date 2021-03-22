import coal from "../img/coal_inv.png";
import iron from "../img/iron_inv.png";
import copper from "../img/copper_inv.png";
import lime from "../img/limestone_inv.png";
import ironBar from "../img/iron_bar.png";
import ironFurnace from "../img/iron_furnace.png";
import copperFurnace from "../img/copper_furnace.png";
import copperBar from "../img/copper_bar.png";

export const defaultBag =
    {
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
    content: "Copper",
    numContent: 1,
    imgUrl: copper
}

export const firstLimestone = {
    content: "Limestone",
    numContent: 1,
    imgUrl: lime
}

export const defaultMachine = {
    machines: [
        {
            content: "Iron Furnace",
            description: "Uses 1 IRON ORE and 1 COAL to make 1 IRON INGOT.",
            imgUrl: ironFurnace,
            needsPower: false,
            isOn: false,
            process: 1000,
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
    options: [
        {
            content: "Copper Furnace",
            needsPower: false,
            description: "Uses 1 COPPER ORE and 1 COAl to make 1 COPPER INGOT",
            isOn: false,
            process: 1200,
            imgUrl: copperFurnace,
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
        }
    ]

}