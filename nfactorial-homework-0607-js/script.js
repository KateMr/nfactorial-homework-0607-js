//What do we know about our user?

let user = 'Katya';
let cart = [];

//What is our shop?

const SHOP = "Pizzeria Dalidy";

//We're making pizzeria. What products do we have in our storage?

let storage = {};

storage['cheese'] = 5;
storage['cola'] = 10;
storage['dough'] = 5;
storage['sausages'] = 10;
storage['tomato'] = 5;

//What kinds of pizza can we make?
const pizzaMargarita = {
    'dough': 1,
    'cheese': 0.5,
    'tomato': 1,
}

const pizzaPeperoni = {
    'dough': 1,
    'cheese': 0.5,
    'sausages': 2,
}

//How does user see/call those procuts?
let dict = {
    'Margarita': pizzaMargarita,
    'Peperoni': pizzaPeperoni,
}

//Is there any functions avalable?

function addToCart (...items) {
    cart.push(...items)
    return cart
}

let removeFromCart = (...items) => {
    cart = cart.filter(item => {
        return items.includes(item) === false
    })
}

// To store products we should put them in frige and take them out whenever user wants to buy something
putInStorage = (productName, productAmount) => 
Object.keys(storage).includes(productName) ? 
storage[productName] += productAmount : 
storage[productName] = productAmount;

function takeOutFromStorage() {
    for (item of cart) {
        if (Object.keys(storage).includes(item)) {
            storage[item] -= 1;
        } else if (dict[item]) {
            for (let product in dict[item]) {
                if (Object.keys(storage).includes(product)) {
                    storage[product] -= dict[item][product]
                } else {
                    console.log(`fail`)
                }
            }
        } else {
            console.log(`there's definately no ${item} in storage`)
        }
    }
}
