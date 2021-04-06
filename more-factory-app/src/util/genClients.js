import {randomizer} from "./randomizer";
import {products} from "../reducers/initialStates";

export const genClients = (arr, tier) => {
    let resArr = [...arr];
    let rem = 5 - arr.length;
    if(rem > 0){
       const actProducts = products.filter(product => product.tier <= tier);
       console.log(actProducts.length);
        for(let i = 1; i <= rem; i++){
            let newClient = {};
            let payment = 0;
            let inputs = randomizer(1, 5);
            let inpArr = [];
            for(let k = 1; k <= inputs; k++){
                let product = {...actProducts[randomizer(0, actProducts.length)]};
                product.need = randomizer(1, 81);
                product.numContent = 0;
                payment += (product.need * product.price);
                inpArr.push(product);
            }
            newClient.input = [...inpArr];
            newClient.pay = payment;
            resArr.push(newClient);
        }
    }
    return resArr;
}