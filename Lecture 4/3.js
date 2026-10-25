// 10% discount on item prices

let prices = [250, 645, 300, 900, 50]


// let index = 0;
// for (let price of prices) {

//     console.log(`value at index ${index} = ${price}`);
//     let offer = price/10;
//     console.log(`vakue after the offer ${index} = ${price-offer}`)
//     index++;

// }

for (let i = 0; i < prices.length; i++){
    console.log(`value at index ${i} = ${prices[i]}`);
    let offer = prices[i]/ 10;
    console.log(`value after the 10% offer = ${prices[i] - offer}`)
}

// push
let veggies = ["tomato", "potato", "onion", "weed"]
veggies.push("Soya")
console.log(veggies)

// pop
let deleted = veggies.pop()
console.log(veggies);
console.log("Deleted", deleted )

// to string
console.log(veggies.toString())