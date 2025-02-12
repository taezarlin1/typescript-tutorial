type Pizza = {
    name: string
    price: number

}

type Order = {
    id: number
    pizza: Pizza
    status: "ordered" | "completed"
}

const menu: Pizza[] = [
    { name: "Margheriata", price: 8},
    { name: "Pepperoni", price: 10},
    { name: "Hawaiian", price: 10},
    { name: "Veggie", price: 9},
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

function completeOrder(orderId: number){
    const order = orderQueue.find(order => order.id === orderId)
    if (!order) {
        console.error(`${orderId} was not found in the order queue`)
        return
    }
    order.status = "completed"
    return order
}

addNewPizza({ name: "Chicken Ranch", price: 12})
addNewPizza({ name: "BBQ Chicken", price: 12})
addNewPizza({ name: "Spicy Sausage", price: 11})
