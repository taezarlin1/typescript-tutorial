type Pizza = {
    id: number
    name: string
    price: number

}

type Order = {
    id: number
    pizza: Pizza
    status: "ordered" | "completed"
}

let cashInRegister = 100;
let nextOrderId = 1;
let nextPizzaId = 1;
const menu: Pizza[] = [
    { id: nextPizzaId++, name: "Margheriata", price: 8},
    { id: nextPizzaId++, name: "Pepperoni", price: 10},
    { id: nextPizzaId++, name: "Hawaiian", price: 10},
    { id: nextPizzaId++, name: "Veggie", price: 9},
]


const orderQueue: Order[] = [];

function addNewPizza(pizzaObj: Pizza): void{
    pizzaObj.id = nextPizzaId ++;
    menu.push(pizzaObj);
}

function placeOrder(pizzaName: string): Order | undefined{
    const selectedPizza = menu.find(pizzaObj=>pizzaObj.name === pizzaName)
    if(!selectedPizza){
        console.error(`${pizzaName} does not exist in the menu`)
        return
    }
    
    cashInRegister += selectedPizza.price
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered"}
    orderQueue.push(newOrder)
    return newOrder
}

export function getPizzaDetail(identifier: string | number): Pizza | undefined {
    if(typeof identifier === "string"){
        return menu.find(pizza=>pizza.name.toLowerCase() === identifier.toLowerCase())
    } else if (typeof identifier === "number") {
        return menu.find(pizza=> pizza.id === identifier)
    } else {
        throw new TypeError("Parameter 'identifier' must be either a string or a number")
    }
}

function completeOrder(orderId: number): Order | undefined{
    const order = orderQueue.find(order => order.id === orderId)
    if (!order) {
        console.error(`${orderId} was not found in the order queue`)
        return
    }
    order.status = "completed"
    return order
}

addNewPizza({ id: nextPizzaId++, name: "Chicken Ranch", price: 12})
addNewPizza({ id: nextPizzaId++, name: "BBQ Chicken", price: 12})
addNewPizza({ id: nextPizzaId++, name: "Spicy Sausage", price: 11})
