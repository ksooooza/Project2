import connection from './connection/connection.js'
import data from './data/fruits.json' assert { type: 'json'}
import Fruit from './Models/fruit.js'

let fruitData = data.map(item => {
    const fruit = {}
    fruit.name = item.name,
    fruit.genus = item.genus,
    fruit.family = item.family,
    fruit.order = item.order,
    fruit.nutrition = item.nutritions
    return fruit
})

Fruit
    .deleteMany({})
    .then(() => Fruit.create(fruitData))
    .then(() => console.log("Done!"))
    .then(() => connection.close())
    .catch(error => console.log("error", error))