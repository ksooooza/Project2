import mongoose from 'mongoose'

const fruitSchema = new mongoose.Schema({
    name: String,
    genus: String,
    family: String,
    order: String,
    nutrition: {
        carbohydrates: Number,
        protein: Number,
        fat: Number,
        calories: Number,
        sugar: Number
    }
})

export default mongoose.model("Fruit", fruitSchema)