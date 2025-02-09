const menu = [
    { name: "Margheriata", price: 8},
    { name: "Pepperoni", price: 10},
    { name: "Hawaiian", price: 10},
    { name: "Veggie", price: 9},
]

let cashInRegister = 100;
let nextOrderId = 1;
const orderQueue = [];

function addNewPizza(pizzaObj){
    menu.push(pizzaObj)
}

function placeOrder(pizzaName){
    const selectedPizza = menu.find(pizzaObj=>pizzaObj.name === pizzaName)
    cashInRegister += selectedPizza?.price
    const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered"}
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId){
    const order = orderQueue.find(order => order.id === orderId)
    order.status = "completed"
    return order
}