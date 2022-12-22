import connection from "./connection/connection.js"
import express from "express"
import Fruit from "./Models/fruit.js"

const app = express();
app.use(express.json())
const port = process.env.PORT || 3000

app.listen(port, () => console.log(`App listening on port ${port}`))

//Landing screen
app.get('/',  (req, res) => {
    //let grape = codePointAt(`U+1F347`);
    res.send(`Welcome to the Funky Fruity API`)
})

//Root directory, lists all fruits
app.get("/fruits", async(req, res) => {
    Fruit.find({}).then(fruits => res.json(fruits))
})

//Find a fruit by name
app.get("/fruits/:name", async(req, res) => {
    Fruit.find({name: req.params.name}).then(fruits => {
      res.json(fruits)
  })
})

//Find fruit by ID
app.get("/fruits/id/:id", (req, res) => {
    Fruit.findById(req.params.id).then(fruits => {
      res.json(fruits)
    })
  })

//Add a new fruit to the database
app.post("/fruits", (req, res) => {
    Fruit.create(req.body).then(newFruit => {res.json(newFruit)})
})

//Update a fruit
app.put("/fruits/update/id/:id/", (req, res) => {
    Fruit.findOneAndUpdate(
      {_id: req.params.id},
      req.body,
    ).then(fruits => {
      res.json(fruits)
    })
  })

//Delete a fruit from the database
app.delete("/fruits/:id", (req, res) => {
    Fruit.findOneAndRemove({ _id: req.params.id })
      .then(list => {
        res.json(list)
      })
  })

  //Less than or greater than certain calories
  app.get("/fruits/:name", async(req, res) => {
    Fruit.find({name: req.params.name}).then(fruits => {
      res.json(fruits)
  })
})