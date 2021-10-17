const rice = [{
    name: 'rice bowl',
    price: 20,
},{
    name: 'rice plate',
    price: 10
}]

const drink = [{
    name: 'Water',
    price: 20,
},{
    name: 'Ice',
    price: 10
},{
    name: 'Beer',
    price: 30
}]

const fish = [{
    name: 'fired fish',
    price: 120,
},{
    name: 'boiled fish',
    price: 120
}]

const menu = [...fish,...drink,...rice]

export {fish, drink, rice, menu}