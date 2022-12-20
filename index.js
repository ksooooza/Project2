import connection from "./connection/connection.js"
import express from "express"
import Fruit from "./Models/fruit.js"
import BSON from "bson";

const app = express();
app.use(express.json())

app.listen(3000, () => console.log("App listening on port 3000"))

//Landing screen - WORKS
app.get('/',  (req, res) => {
    res.send('Welcome to the Funky Fruity API')
})

//Root directory, lists all fruits - WORKS
app.get("/fruits", async(req, res) => {
    Fruit.find({}).then(fruits => res.json(fruits))
})

//Find a fruit by name - WORKS
app.get("/fruits/:name", async(req, res) => {
    Fruit.find({name: req.params.name}).then(fruits => {
      res.json(fruits)
  })
})

//Find fruit by ID - WORKS
app.get("/fruits/id/:id", (req, res) => {
    Fruit.findById(req.params.id).then(fruits => {
      res.json(fruits)
    })
  })

//Add a new fruit to the database - WORKS
app.post("/fruits", (req, res) => {
    Fruit.create(req.body).then(newFruit => {res.json(newFruit)})
})

//Update a fruit - WORKS
app.put("/fruits/update/id/:id/", (req, res) => {
    Fruit.findOneAndUpdate(
      {_id: req.params.id},
      req.body,
    ).then(fruits => {
      res.json(fruits)
    })
  })

//Delete a fruit from the database - WORKS
app.delete("/fruits/:id", (req, res) => {
    Fruit.findOneAndRemove({ _id: req.params.id })
      .then(list => {
        res.json(list)
      })
  })

  //Less than or greater than certain calories