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

const menu: Pizza[] = [
    { id: 1, name: "Margheriata", price: 8},
    { id: 2, name: "Pepperoni", price: 10},
    { id: 3, name: "Hawaiian", price: 10},
    { id: 4, name: "Veggie", price: 9},
]

let cashInRegister = 100;
let nextOrderId = 1;
const orderQueue: Order[] = [];

function addNewPizza(pizzaObj: Pizza){
    menu.push(pizzaObj)
}

function placeOrder(pizzaName: string){
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

function completeOrder(orderId: number){
    const order = orderQueue.find(order => order.id === orderId)
    if (!order) {
        console.error(`${orderId} was not found in the order queue`)
        return
    }
    order.status = "completed"
    return order
}

addNewPizza({ id: 5, name: "Chicken Ranch", price: 12})
addNewPizza({ id: 6, name: "BBQ Chicken", price: 12})
addNewPizza({ id: 7, name: "Spicy Sausage", price: 11})
