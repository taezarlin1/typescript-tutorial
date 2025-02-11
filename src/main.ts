type Food = string
type Address = {
    street: string
    city: string
    country: string
}

let favoriteFood: Food = "pizza"

type Person = {
    name: string
    age: number
    isStudent: boolean
    address?: Address
}

let person1: Person = {
    name: "Joe",
    age: 43,
    isStudent: true,
    
}

let person2: Person = {
    name: "Jill",
    age: 65,
    isStudent: false
}

let people: Array<Person> = [person1, person2]



function displayInfo(person: Person){
    console.log(`${person. name} lives in ${person.address?.city}`);
}