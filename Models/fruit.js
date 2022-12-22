import mongoose from 'mongoose'

const fruitSchema = new mongoose.Schema({
    name: String,
    genus: String,
    family: String,
    order: String,
    nutrition: Object
})

export default mongoose.model("Fruit", fruitSchema)