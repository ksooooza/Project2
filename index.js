import connection from "./connection/connection.js"
import express from "express"
import Fruit from "./Models/fruit.js"

const app = express();
app.use(express.json())

app.listen(3000, () => console.log("App listening on port 3000"))

app.get("/", async(req, res) => {
    Fruit.find({}).then(fruits => res.json(fruits))
})

app.get("/fruit/:name", (req, res) => {
    Fruit.find({name: req.params.name}).then(fruit => res.json(fruit))
})

app.post("/fruit", (req, res) => {
    Fruit.create(req.body).then(newFruit => {res.json(newFruit)})
})